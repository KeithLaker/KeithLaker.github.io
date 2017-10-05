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


function tswDropShadowInit()
{
	var divs = document.getElementsByTagName('div');
	for(var i=0; i<divs.length; i++)
	{
		if(divs[i].className != null && 
		   divs[i].className.length >= 13 &&
		   divs[i].className.substr(0,13) == 'tswDropShadow' &&
		   divs[i].className != 'tswDropShadowContent')
		{
			tswDropShadowInitDiv(divs[i]);
		}
	}
}

tswUtilsAddEventHandler(window, "load", tswDropShadowInit);

/*Create a table that looks like this:
 
 <table class="tswDropShadow">
 <tbody class="tswDropShadowMedium">
 <tr class="tswDropShadowTop">
 <td class="tswDropShadowLeft"></td>
 <td class="tswDropShadowCenter"></td>
 <td class="tswDropShadowRight"></td>
 </tr>
 <tr class="tswDropShadowMiddle">
 <td class="tswDropShadowLeft"></td>
 <td class="tswDropShadowCenter">
 <div class="tswDropShadowMedium">
 </div>
 </td>
 <td class="tswDropShadowRight"></td>
 </tr>
 <tr class="tswDropShadowBottom">
 <td class="tswDropShadowLeft"></td>
 <td class="tswDropShadowCenter"></td>
 <td class="tswDropShadowRight"></td>
 </tr>
 </tbody>
 </table>
 
 */

function tswDropShadowInitDiv(div)
{
	var webkitBoxShadow = (TSWBrowserDetect.browserPropertyName('WebkitBoxShadow') != null);
	var table = document.createElement('table');
	table.cellSpacing = 0;
	table.cellPadding = 0;
	table.border = 0;
	table.className = 'tswDropShadow';
	
	var tBody = document.createElement('tbody');
	table.appendChild(tBody);
	
	var tBodyClassName = 'tswDropShadowMedium';
	if(div.className != null)
	{
		if(div.className.indexOf('tswDropShadowLarge') != -1)
		{
			tBodyClassName = 'tswDropShadowLarge';
		}
		else if(div.className.indexOf('tswDropShadowSmall') != -1)
		{
			tBodyClassName = 'tswDropShadowSmall';
		}
	}
	table.tBodies[0].className = tBodyClassName + (webkitBoxShadow ? ' tswWebkit' : '');
	
	var row = table.tBodies[0].insertRow(-1);
	row.className = 'tswDropShadowTop';
	tswDropShadowCreateCells(row);
	
	var row = table.tBodies[0].insertRow(-1);
	row.className = 'tswDropShadowMiddle';
	tswDropShadowCreateCells(row);
	
	var row = table.tBodies[0].insertRow(-1);
	row.className = 'tswDropShadowBottom';
	tswDropShadowCreateCells(row);
	
	div.parentNode.insertBefore(table,div);
	table.tBodies[0].rows[1].cells[1].appendChild(div.parentNode.removeChild(div));
}

function tswDropShadowCreateCells(row)
{
	var cell = row.insertCell(-1);
	cell.className = 'tswDropShadowLeft';
	cell = row.insertCell(-1);
	cell.className = 'tswDropShadowCenter';
	cell = row.insertCell(-1);
	cell.className = 'tswDropShadowRight';
}

/* The checksum below is for internal use by Taco HTML Edit, 
   to detect if a component file has been modified.
   TacoHTMLEditChecksum: CD3104B0 */