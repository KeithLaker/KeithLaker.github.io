AdfUIComponents.createComponentClass("AdfRichGoButton",{componentType:"oracle.adf.RichGoButton",propertyKeys:[{name:"text",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"accessKey",type:"String"},{name:"targetFrame",type:"String"},{name:"icon",type:"String"},{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0}],superclass:AdfUIGo});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlGoButtonPeer");AdfDhtmlGoButtonPeer.InitSubclass=function(){AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE);AdfRichUIPeer.addComponentPropertyChanges(this,AdfRichGoButton.TEXT);AdfRichUIPeer.addComponentPropertyGetters(this,AdfRichGoButton.TEXT)};
AdfDhtmlGoButtonPeer.prototype.HandleComponentClick=function(a){var b=this.getComponent(),d=this.getDomElement().getAttribute("data-afr-target");AdfNavigationUtils.performGetNavigation(b,a,d)};AdfDhtmlGoButtonPeer.prototype.GetInlineEditor=function(){return AdfDhtmlButtonTextEditor.getInlineEditor()};AdfDhtmlGoButtonPeer.prototype.GetAccessibleName=function(){return this.getComponent().getText()};
AdfDhtmlGoButtonPeer.prototype.GetComponentText=function(a,b){var d=AdfAgent.AGENT.getTextContent(b);return""==d?null:d};AdfDhtmlGoButtonPeer.prototype.ComponentTextChanged=function(a,b,d){return(b=AdfDhtmlCommandButtonPeer.getInlineEditableTextElement(a,b))?AdfDomUtils.handleTextChangeWithAccessKey(a,b,d):!1};
function AdfNavigationUtils(){}AdfObject.createSubclass(AdfNavigationUtils);AdfNavigationUtils.performGetNavigation=function(a,b,d){b.isLeftButtonPressed()&&!a.getDisabled()&&(a=a.getDestination(),null!=a&&(AdfPage.PAGE.__handleNavigation(a,d),b.cancel()))};
AdfUIComponents.createComponentClass("AdfRichGoImageLink",{componentType:"oracle.adf.RichGoImageLink",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"accessKey",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"targetFrame",type:"String"},{name:"text",type:"String"},{name:"depressedIcon",type:"String"},{name:"disabledIcon",
type:"String"},{name:"hoverIcon",type:"String"},{name:"icon",type:"String"},{name:"iconPosition",type:"String","default":"leading"}],superclass:AdfUIGo});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlGoImageLinkPeer");
AdfDhtmlGoImageLinkPeer.InitSubclass=function(){AdfObject.ensureClassInitialization(AdfRichGoImageLink);AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE,AdfUIInputEvent.MOUSE_DOWN_EVENT_TYPE,AdfUIInputEvent.MOUSE_UP_EVENT_TYPE);AdfAgent.AGENT.getCapabilities()[AdfAgent.CAP_TOUCH_SCREEN]==AdfAgent.CAP_TOUCH_SCREEN_NONE&&AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.MOUSE_IN_EVENT_TYPE,AdfUIInputEvent.MOUSE_OUT_EVENT_TYPE);AdfRichUIPeer.addComponentPropertyChanges(this,
AdfRichGoImageLink.TEXT);AdfRichUIPeer.addComponentPropertyGetters(this,AdfRichGoImageLink.TEXT);this._DEPRESSED_STYLE_CLASS="p_AFDepressed"};AdfDhtmlGoImageLinkPeer.prototype.HandleComponentClick=function(a){var b=this.getComponent(),d=this.getDomElement().getAttribute("target");AdfNavigationUtils.performGetNavigation(b,a,d)};AdfDhtmlGoImageLinkPeer.prototype.HandleComponentMouseOver=function(){this.getComponent().getDisabled()||this._displayMouseOverIcon(this.getComponent())};
AdfDhtmlGoImageLinkPeer.prototype.HandleComponentMouseOut=function(){var a=this.getComponent();a.getDisabled()||(this._setDepressedStyle(a,!1),this._displayDefaultIcon(this.getComponent()))};AdfDhtmlGoImageLinkPeer.prototype.HandleComponentMouseUp=function(){var a=this.getComponent();a.getDisabled()||(this._setDepressedStyle(a,!1),this._displayMouseOverIcon(a))};
AdfDhtmlGoImageLinkPeer.prototype.HandleComponentMouseDown=function(a){var b=this.getComponent();a=a.isLeftButtonPressed();!b.getDisabled()&&a&&(this._setDepressedStyle(b,!0),this._displayMouseDownIcon(b))};AdfDhtmlGoImageLinkPeer.prototype.GetComponentText=function(a,b){var d=AdfDomUtils.getFirstDescendentElement(b,"span");return d&&(d=AdfAgent.AGENT.getTextContent(d),""!=d)?d:null};
AdfDhtmlGoImageLinkPeer.prototype._getIconElement=function(a){a=a.getClientId();a=AdfRichUIPeer.CreateSubId(a,"icon");return AdfAgent.AGENT.getElementById(a)};AdfDhtmlGoImageLinkPeer.prototype._displayDefaultIcon=function(a){var b=a.getIcon();b&&(this._getIconElement(a).src=b)};AdfDhtmlGoImageLinkPeer.prototype._displayMouseDownIcon=function(a){this._displayIcon(a,a.getDepressedIcon())};AdfDhtmlGoImageLinkPeer.prototype._displayMouseOverIcon=function(a){this._displayIcon(a,a.getHoverIcon())};
AdfDhtmlGoImageLinkPeer.prototype._displayDisabledIcon=function(a){this._displayIcon(a,a.getDisabledIcon())};AdfDhtmlGoImageLinkPeer.prototype._displayIcon=function(a,b){var d=a.getIcon();d&&(this._getIconElement(a).src=b||d)};AdfDhtmlGoImageLinkPeer.prototype._setDepressedStyle=function(a,b){var d=AdfRichUIPeer.getDomElementForComponent(a),e=AdfDhtmlGoImageLinkPeer._DEPRESSED_STYLE_CLASS;b?AdfDomUtils.addCSSClassName(d,e):AdfDomUtils.removeCSSClassName(d,e)};
AdfDhtmlGoImageLinkPeer.prototype.ComponentTextChanged=AdfDomUtils.__componentTextChanged;
function AdfNavigationUtils(){}AdfObject.createSubclass(AdfNavigationUtils);AdfNavigationUtils.performGetNavigation=function(a,b,d){b.isLeftButtonPressed()&&!a.getDisabled()&&(a=a.getDestination(),null!=a&&(AdfPage.PAGE.__handleNavigation(a,d),b.cancel()))};
AdfUIComponents.createComponentClass("AdfRichGoLink",{componentType:"oracle.adf.RichGoLink",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"accessKey",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"targetFrame",type:"String"},{name:"text",type:"String"}],superclass:AdfUIGo});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlGoLinkPeer");AdfDhtmlGoLinkPeer.InitSubclass=function(){AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE);AdfRichUIPeer.addComponentPropertyChanges(this,AdfRichGoLink.TEXT);AdfRichUIPeer.addComponentPropertyGetters(this,AdfRichGoLink.TEXT)};
AdfDhtmlGoLinkPeer.prototype.HandleComponentClick=function(a){var b=this.getComponent(),d=this.getDomElement().getAttribute("target");AdfNavigationUtils.performGetNavigation(b,a,d)};AdfDhtmlGoLinkPeer.prototype.GetInlineEditor=function(){return AdfDhtmlSimpleTextEditor.getInlineEditor()};AdfDhtmlGoLinkPeer.prototype.GetAccessibleName=function(){return this.getComponent().getText()};
AdfDhtmlGoLinkPeer.prototype.GetComponentText=function(a,b){var d=AdfAgent.AGENT.getTextContent(b);return""==d?null:d};AdfDhtmlGoLinkPeer.prototype.ComponentTextChanged=AdfDomUtils.__componentTextChanged;
function AdfNavigationUtils(){}AdfObject.createSubclass(AdfNavigationUtils);AdfNavigationUtils.performGetNavigation=function(a,b,d){b.isLeftButtonPressed()&&!a.getDisabled()&&(a=a.getDestination(),null!=a&&(AdfPage.PAGE.__handleNavigation(a,d),b.cancel()))};
AdfUIComponents.createComponentClass("AdfRichIcon",{componentType:"oracle.adf.RichIcon",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"name",type:"String"}],superclass:AdfUIObject});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlIconPeer");
AdfUIComponents.createComponentClass("AdfRichImage",{componentType:"oracle.adf.RichImage",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"visible",type:"Boolean","default":!0},{name:"source",type:"String"},{name:"shortDesc",type:"String"},{name:"longDescURL",type:"String"},{name:"imageMapType",type:"String","default":"none"}],superclass:AdfUIObject});
AdfRichImage.prototype.getAccessibleName=function(){return this.getShortDesc()};
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlImagePeer");AdfDhtmlImagePeer.InitSubclass=function(){var a=AdfRichImage.SOURCE;AdfRichUIPeer.addComponentPropertyGetters(this,a);AdfRichUIPeer.addComponentPropertyChanges(this,a)};AdfDhtmlImagePeer.prototype.GetComponentSource=function(a,b){return AdfPage.PAGE.removeResourceURL(b.src)};AdfDhtmlImagePeer.prototype.ComponentSourceChanged=function(a,b,d){null==d&&(d="");b.src=AdfPage.PAGE.getResourceURL(d)};
AdfUIComponents.createComponentClass("AdfRichOutputText",{componentType:"oracle.adf.RichOutputText",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"escape",type:"Boolean","default":!0},{name:"noWrap",type:"Boolean","default":!1},{name:"truncateAt",type:"Number","default":0},{name:"description",type:"String"}],superclass:AdfUIOutput});
AdfRichOutputText.prototype.getAccessibleName=function(){return this.getShortDesc()};
AdfRichUIPeer.createPeerClass(AdfDhtmlValuePeer,"AdfDhtmlTextPeer");AdfDhtmlTextPeer.InitSubclass=function(){this._inlineEditor=null};AdfDhtmlTextPeer.prototype.SetDisplayValue=function(a,b,d){a.getEscape()?AdfAgent.AGENT.setTextContent(b,d):this._setUnescapedContent(b,d);return!0};
AdfDhtmlTextPeer.prototype._setUnescapedContent=function(a,b){if("SCRIPT"!==a.tagName)a.innerHTML=b;else{for(var d=a.parentNode,e=this._getUnescapedChildNodes(a),f=e.length,g=0;g<f;g++)d.removeChild(e[g]);a.insertAdjacentHTML("afterend",b)}};AdfDhtmlTextPeer.prototype._getUnescapedChildNodes=function(a){var b=[],d=a.id+"_end";for(a=a.nextSibling;a&&a.id!==d;)b.push(a),a=a.nextSibling;return b};
AdfDhtmlTextPeer.prototype.GetDisplayValue=function(a,b){AdfDomUtils.stripScripts(b);return a.getEscape()?AdfAgent.AGENT.getTextContent(b):b.innerHTML};AdfDhtmlTextPeer.prototype.GetInlineEditor=function(){var a=AdfDhtmlTextPeer._inlineEditor;null==a&&(a=new AdfRichPlainTextEditor("value"),AdfDhtmlTextPeer._inlineEditor=a);return a};
AdfUIComponents.createComponentClass("AdfRichPanelGroupLayout",{componentType:"oracle.adf.RichPanelGroupLayout",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"theme",type:"String"},{name:"layout",type:"String","default":"default"},{name:"valign",type:"String","default":"middle"},{name:"halign",type:"String","default":"start"},{name:"landmark",
type:"String","default":"none"}],superclass:AdfUIPanel});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlPanelGroupLayoutPeer");AdfDhtmlPanelGroupLayoutPeer.prototype.needsChildVisibilityChanges=function(){return!0};AdfDhtmlPanelGroupLayoutPeer.prototype.ChildVisibilityChanged=function(a,b){var d=this.getDomElement();return b.parentNode==d?(AdfPage.PAGE.addPartialTargets(this.getComponent()),!0):!1};
AdfUIComponents.createComponentClass("AdfRichSeparator",{componentType:"oracle.adf.RichSeparator",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0}],superclass:AdfUIObject});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlSeparatorPeer");
AdfUIComponents.createComponentClass("AdfRichSpacer",{componentType:"oracle.adf.RichSpacer",propertyKeys:[{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"height",type:"String"},{name:"width",type:"String"}],superclass:AdfUIObject});
AdfRichUIPeer.createPeerClass(AdfRichUIPeer,"AdfDhtmlSpacerPeer");AdfDhtmlSpacerPeer.InitSubclass=function(){AdfRichUIPeer.addComponentPropertyChanges(this,AdfRichSpacer.WIDTH,AdfRichSpacer.HEIGHT)};
AdfDhtmlSpacerPeer.prototype.ComponentWidthChanged=function(a,b,d){d&&(a=AdfDhtmlSpacerPeer._getLengthInt(d),AdfAgent.AGENT.getPlatform()==AdfAgent.IE_PLATFORM?b.width=a:"IMG"==b.nodeName?b.width=a:(b=b.firstChild,b||(b=this.getDomDocument().createElement("div"),domNode.appendChild(b)),b.style.paddingLeft=a+"px"))};
AdfDhtmlSpacerPeer.prototype.ComponentHeightChanged=function(a,b,d){d&&(a=AdfDhtmlSpacerPeer._getLengthInt(d),AdfAgent.AGENT.getPlatform()==AdfAgent.IE_PLATFORM?b.height=a:"IMG"==b.nodeName?b.height=a:(b=b.firstChild,b||(b=this.getDomDocument().createElement("div"),domNode.appendChild(b)),b.style.paddingTop=a+"px"))};AdfDhtmlSpacerPeer._getLengthInt=function(a){var b=a;0<a.toLowerCase().indexOf("px")&&(b=a.replace(/^\s*([\+\-]?\d+)\s*px\s*.*/i,"$1"));a=1;b&&(a=1*b);0>a&&(a=0);return a};