/* Copyright 2009-2010 Taco Software. All rights reserved.
 * http://tacosw.com
 *
 * This file is part of the Component Library included in Taco HTML Edit.
 * Licensed users of Taco HTML Edit may modify and use this source code 
 * for their web development (including commercial projects), as long as 
 * this copyright notice is retained.
 *
 * The contents of this file may not be published in a format intended
 * for access by other humans, so you may not put code examples on a
 * web site with all or part of the contents of this file, and you may
 * not publish the contents of this file in a printed format.
 */

var tswTabbedContentMap = new Object(); //maps tabbled content id to TSWTabbedContent object;

//Returns the TSWTabbedContent object for an id, creating the object
//if necessary.
function tswTabbedContentGetForId(id)
{
	var tc = tswTabbedContentMap[id];
	if(tc == null)
	{
		tc = new TSWTabbedContent(id);
		tswTabbedContentMap[id] = tc;
	}
	return tc;
}

//TSWTabbedContent is a javascript object that represents
//the tabbed content component in the HTML document. The
//constructor takes the id of the object.
function TSWTabbedContent(id)
{
	this.id = id;
	this.selectedTab = 0; //The tab that is currently selected
	this.animationDuration = 0; //Duration of animation in milliseconds (0 for no animation)
	this.reserveSpaceForTallestTab = false;
	
	//Initialize DOM by adding needed divs to tabs
	var tabs = this.getTabElements();
	for(var i=0; i<tabs.length; i++)
	{
		var tab = tabs[i];
		
		var outerDiv = document.createElement('div');
		outerDiv.className = 'tswTabOuterDiv';
		var innerDiv = document.createElement('div');
		innerDiv.className = 'tswTabInnerDiv';
		outerDiv.appendChild(innerDiv);
		
		while (tab.hasChildNodes()) 
		{
			innerDiv.appendChild(tab.removeChild(tab.firstChild));
		}
		tab.appendChild(outerDiv);
		this.generateOnClick(tab, this, i);
		
		if(tab.className == 'tswTabSelected')
			this.selectedTab = i;
	}
	
	//Needed for IE7 in quirks mode
	this.getTabbedContentElement().insertBefore(document.createElement('br'),this.getTabContentContainerElement());
	
	this.animationIntervalId = null; //Identifies the interval timer being used for the animation
	this.animationStartDate = null; //date when the animation began
	this.previousSelectedTab = -1; //The previously selected tab
	this.previousTabContentRect; //The coordinates of the preview tab content
	
	this.init(this);
};

//tabbedContent is passed in for closure
TSWTabbedContent.prototype.init = function(tabbedContent)
{
	tswUtilsAddEventHandler(window, 'resize', 
		function(){ 
			if(tabbedContent.reserveSpaceForTallestTab)
				tabbedContent.setReserveSpaceForTallestTab(true);
		});
	tswUtilsAddEventHandler(window, 'load', 
		function(){ 
			if(tabbedContent.reserveSpaceForTallestTab)
				tabbedContent.setReserveSpaceForTallestTab(true);
		});
}

TSWTabbedContent.prototype.setReserveSpaceForTallestTab = function(bool)
{
	/*In IE inline JavaScript can be invoked multiple times, which is why
	 we need this check. For this to work correctly in Safari, it needs to
	 be called multiple times; hence, the Explorer check.*/
	if(!TSWBrowserDetect.browserMatches('Explorer', null, null) || this.reserveSpaceForTallestTab != bool)
	{
		this.reserveSpaceForTallestTab = bool;
		if(bool)
		{
			var maxHeight = 0;
			var tabContents = this.getTabContentElements();
			for(var i=0; i<tabContents.length; i++)
			{
				var h = tabContents[i].offsetHeight;
				if(h > maxHeight)
					maxHeight = h;
			}
			
			this.getTabContentContainerElement().style.height = maxHeight + 'px';
			
			//Needed for IE7 when a position:relative div is inside the tabbed
			//content for the content to appear in the correct location; don't ask me why
			var tabContents = this.getTabContentElements();
			tabContents[this.selectedTab].className = 'tswTabContentSelected';
		}
		else
		{
			this.getTabContentContainerElement().style.height = null;
		}
	}
};

TSWTabbedContent.prototype.getTabbedContentElement = function()
{
	return document.getElementById(this.id);
};

TSWTabbedContent.prototype.getTabListElement = function()
{
	var lists = TSWDomUtils.getChildrenWithTagName(this.getTabbedContentElement(), 'ul');
	if(lists.length > 0)
		return lists[0];
	return null;
};

TSWTabbedContent.prototype.getTabElements = function()
{
	return TSWDomUtils.getChildrenWithTagName(this.getTabListElement(), 'li');
};

TSWTabbedContent.prototype.getTabContentContainerElement = function()
{
	var divs = TSWDomUtils.getChildrenWithTagName(this.getTabbedContentElement(), 'div');
	for(var i=0; i<divs.length; i++)
	{
		if(divs[i].className == 'tswTabContent')
			return divs[i];
	}
	return null;
}

TSWTabbedContent.prototype.getTabContentElements = function()
{
	return TSWDomUtils.getChildrenWithTagName(this.getTabContentContainerElement(), 'div');
};

TSWTabbedContent.prototype.generateOnClick = function(tabElement, tabbedContent, index)
{
	tabElement.onclick = function() { tabbedContent.selectTab(index); };
};

TSWTabbedContent.prototype.selectTab = function(index)
{
	if(this.selectedTab == index)
		return;
	this.cleanupAnimation();
	
	var tabs = this.getTabElements();
	var tabContents = this.getTabContentElements();
	
	//Store preview tab content coords for animation
	var previousTabContents = tabContents[this.selectedTab];
	var prevPos = tswUtilsGetAbsolutePosition(previousTabContents);
	
	if(TSWBrowserDetect.browserMatches('Explorer', null, 6.0) ||
	   (TSWBrowserDetect.browserMatches('Explorer', null, null) && document.compatMode == 'BackCompat'))
	{
		//For IE 6 or IE quirks mode
		this.previousTabContentRect = 
			[prevPos[0], 
			prevPos[1], 
			previousTabContents.offsetWidth, 
			previousTabContents.offsetHeight];
	}
	else
	{
		this.previousTabContentRect = 
			[prevPos[0], 
			prevPos[1], 
			previousTabContents.offsetWidth 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'borderLeftWidth')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'borderRightWidth')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'paddingLeft')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'paddingRight')), 
			previousTabContents.offsetHeight
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'borderTopWidth')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'borderBottomWidth')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'paddingTop')) 
				- tswUtilsGetPixelsAsInteger(tswUtilsGetStyle(previousTabContents, 'paddingBottom'))];
	}
	
	tabs[this.selectedTab].className = null;
	tabContents[this.selectedTab].className = 'tswTabContentUnselected';
	
	this.previousSelectedTab = this.selectedTab;
	this.selectedTab = index;
	
	tabs[this.selectedTab].className = 'tswTabSelected';
	tabContents[this.selectedTab].className = 'tswTabContentSelected';
	
	this.beginAnimation();
};

TSWTabbedContent.prototype.cleanupAnimation = function()
{
	if(this.animationDuration <= 0 || this.previousSelectedTab < 0)
		return;
	
	var tabContents = this.getTabContentElements();
	var previousTabContents = tabContents[this.previousSelectedTab];
	previousTabContents.style.display = 'none';
	previousTabContents.style.position = '';
	previousTabContents.style.left = '';
	previousTabContents.style.top = '';
	previousTabContents.style.width = '';
	previousTabContents.style.height = '';
	previousTabContents.style.zIndex = 0;
	tswUtilsSetOpacity(previousTabContents, 1.0);
	
	var currentTabContents = tabContents[this.selectedTab];
	tswUtilsSetOpacity(currentTabContents, 1.0);
	
	clearInterval(this.animationIntervalId)
	this.animationIntervalId = null;
};

TSWTabbedContent.prototype.beginAnimation = function()
{
	if(this.animationDuration <= 0)
		return;
	
	this.animationStartDate = new Date();
	var tabContents = this.getTabContentElements();
	var previousTabContents = tabContents[this.previousSelectedTab];
	
	previousTabContents.style.display = 'block';
	previousTabContents.style.visibility = 'visible';
	previousTabContents.style.position = 'absolute';
	previousTabContents.style.left = this.previousTabContentRect[0] + 'px';
	previousTabContents.style.top = this.previousTabContentRect[1] + 'px';
	previousTabContents.style.width = this.previousTabContentRect[2] + 'px';
	previousTabContents.style.height = this.previousTabContentRect[3] + 'px';
	previousTabContents.style.zIndex = 1;
	tswUtilsSetOpacity(previousTabContents, 1.0);
	
	var currentTabContents = tabContents[this.selectedTab];
	tswUtilsSetOpacity(currentTabContents, 0.0);
	currentTabContents.style.display = '';
	
	this.animationIntervalId = setInterval("_tswTabbedContentAnimate('"+this.id+"')", 25);
};

function _tswTabbedContentAnimate(id)
{
	tswTabbedContentGetForId(id).continueAnimation();
}

TSWTabbedContent.prototype.continueAnimation = function()
{
	var currentDate = new Date();
	var tabContents = this.getTabContentElements();
	var previousTabContents = tabContents[this.previousSelectedTab];
	var currentTabContents = tabContents[this.selectedTab];
	
	var delta = (currentDate.getTime() - this.animationStartDate.getTime()) / this.animationDuration;
	if(delta >= 1.0)
	{
		//complete the animation
		this.cleanupAnimation();
		return;
	}
	tswUtilsSetOpacity(previousTabContents, 1.0 - delta);
	tswUtilsSetOpacity(currentTabContents, delta);
}


/* The checksum below is for internal use by Taco HTML Edit, 
   to detect if a component file has been modified.
   TacoHTMLEditChecksum: 96A07087 */