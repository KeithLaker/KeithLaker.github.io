AdfUIComponents.createComponentClass("AdfRichSelectBooleanCheckbox",{componentType:"oracle.adf.RichSelectBooleanCheckbox",propertyKeys:[{name:"changed",type:"Boolean","default":!1},{name:"changedDesc",type:"String"},{name:"autoSubmit",type:"Boolean","default":!1},{name:"accessKey",type:"String"},{name:"contentStyle",type:"String"},{name:"helpTopicId",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"label",type:"String"},{name:"labelStyle",type:"String"},{name:"readOnly",
type:"Boolean","default":!1,secured:!0},{name:"showRequired",type:"Boolean","default":!1},{name:"simple",type:"Boolean","default":!1},{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"text",type:"String"},{name:"nullValueMeans",type:"String","default":"null"}],superclass:AdfUISelectBoolean});
AdfRichUIPeer.createPeerClass(AdfDhtmlEditableValuePeer,"AdfDhtmlSelectBooleanCheckboxPeer");
AdfDhtmlSelectBooleanCheckboxPeer.InitSubclass=function(){AdfObject.ensureClassInitialization(AdfRichSelectBooleanCheckbox);AdfRichUIPeer.addComponentPropertyGetters(this,AdfUIEditableValue.SUBMITTED_VALUE,AdfRichSelectBooleanCheckbox.TEXT);AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE);AdfAgent.AGENT.getCapabilities()[AdfAgent.CAP_TOUCH_SCREEN]==AdfAgent.CAP_TOUCH_SCREEN_NONE&&AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.MOUSE_IN_EVENT_TYPE);AdfRichUIPeer.addComponentPropertyChanges(this,
AdfRichSelectBooleanCheckbox.TEXT);this._inlineEditor=null;this._SELECT_BOOLEAN_VALUE_KEY="_adfSbv";this._TRCB="icon-style";this._TRCB_ID="_adfTRC"};AdfDhtmlSelectBooleanCheckboxPeer.prototype.InitDomElement=function(a,b){AdfDhtmlSelectBooleanCheckboxPeer.superclass.InitDomElement.call(this,a,b);var d=a.getClientId(),d=AdfRichUIPeer.CreateSubId(d,AdfDhtmlSelectBooleanCheckboxPeer._TRCB);b.setAttribute(AdfDhtmlSelectBooleanCheckboxPeer._TRCB_ID,d)};
AdfDhtmlSelectBooleanCheckboxPeer.prototype.HandleComponentMouseOver=function(a){this.ShowNoteWindowMouseOver(a)};
AdfDhtmlSelectBooleanCheckboxPeer.prototype.HandleComponentClick=function(a){AdfDhtmlSelectBooleanCheckboxPeer.superclass.HandleComponentClick.call(this,a);var b=this.getComponent();a=a.getNativeEventTarget();var d=this.getDomElement();if((d=AdfDhtmlEditableValuePeer.GetContentNode(b,d))&&"A"==AdfAgent.AGENT.getNodeName(a))d.checked?(d.checked=!1,AdfDomUtils.removeCSSClassName(a,"p_AFSelected")):(d.checked=!0,AdfDomUtils.addCSSClassName(a,"p_AFSelected")),AdfDomUtils.removeCSSClassName(a,"p_AFMixed"),
a=d;"INPUT"==AdfAgent.AGENT.getNodeName(a)&&(a&&a.checked?this.Validate(b,!0):this.Validate(b,!1))};AdfDhtmlSelectBooleanCheckboxPeer.prototype.GetSubmittedValue=function(a,b){var d=AdfDhtmlEditableValuePeer.GetContentNode(a,b);return a.getReadOnly()?AdfAgent.AGENT.getAttribute(d,AdfDhtmlSelectBooleanCheckboxPeer._SELECT_BOOLEAN_VALUE_KEY):null!=d&&d.checked?!0:!1};
AdfDhtmlSelectBooleanCheckboxPeer.prototype.SetDisplayValue=function(a,b,d){b=AdfDhtmlEditableValuePeer.GetContentNode(a,b);null!=b&&(a.getReadOnly()?"true"==d||!0==d?(d=a.getText(),AdfAgent.AGENT.setTextContent(b,d)):AdfAgent.AGENT.setTextContent(b,""):(a=AdfAgent.AGENT.getElementById(b.getAttribute(AdfDhtmlSelectBooleanCheckboxPeer._TRCB_ID)),"true"==d||!0==d?(b.checked=!0,a&&(AdfDomUtils.addCSSClassName(a,"p_AFSelected"),AdfDomUtils.removeCSSClassName(a,"p_AFMixed"))):(b.checked=!1,a&&(AdfDomUtils.removeCSSClassName(a,
"p_AFSelected"),AdfDomUtils.removeCSSClassName(a,"p_AFMixed")))))};AdfDhtmlSelectBooleanCheckboxPeer.prototype.GetInlineEditor=function(){var a=AdfDhtmlSelectBooleanCheckboxPeer._inlineEditor;null==a&&(a=new AdfDhtmlSelectBooleanTextEditor,AdfDhtmlSelectBooleanCheckboxPeer._inlineEditor=a);return a};AdfDhtmlSelectBooleanCheckboxPeer.prototype.GetComponentText=function(a,b){var d=AdfDhtmlSelectBooleanCheckboxPeer.__getInlineEditableTextElement(b);return null!=d?AdfAgent.AGENT.getTextContent(d):null};
AdfDhtmlSelectBooleanCheckboxPeer.prototype.ComponentTextChanged=function(a,b,d){b=AdfDhtmlSelectBooleanCheckboxPeer.__getInlineEditableTextElement(b);return null!=b?AdfDomUtils.handleTextChangeWithAccessKey(a,b,d):!1};AdfDhtmlSelectBooleanCheckboxPeer.__getInlineEditableTextElement=function(a){a=a.getElementsByTagName("LABEL");for(var b=a.length,d=0;d<b;d++){var e=a[d];if(null!=e&&"AFContentCell"==e.parentNode.parentNode.className)return e}return null};
AdfDhtmlSelectBooleanCheckboxPeer.prototype.NeedsSpuriousDirtyValueTracking=function(){return!0};
AdfUIComponents.createComponentClass("AdfRichSelectBooleanRadio",{componentType:"oracle.adf.RichSelectBooleanRadio",propertyKeys:[{name:"changed",type:"Boolean","default":!1},{name:"changedDesc",type:"String"},{name:"autoSubmit",type:"Boolean","default":!1},{name:"accessKey",type:"String"},{name:"contentStyle",type:"String"},{name:"helpTopicId",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"label",type:"String"},{name:"labelStyle",type:"String"},{name:"readOnly",type:"Boolean",
"default":!1,secured:!0},{name:"showRequired",type:"Boolean","default":!1},{name:"simple",type:"Boolean","default":!1},{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"group",type:"String"},{name:"text",type:"String"}],superclass:AdfUISelectBoolean});
AdfRichUIPeer.createPeerClass(AdfDhtmlSelectBooleanCheckboxPeer,"AdfDhtmlSelectBooleanRadioPeer");
AdfDhtmlSelectBooleanRadioPeer.prototype.LazyInitialize=function(a,b){var d=AdfDhtmlEditableValuePeer.GetContentNode(a,b).name,e=AdfAgent.AGENT;if(d=AdfDomUtils.getFormElement(b).elements[d])for(var f=0;f<d.length;++f){var g=d[f];if("radio"==g.type&&(g=AdfRichUIPeer.getFirstAncestorComponent(g),null!=g)){var h=AdfRichUIPeer.getDomElementForComponent(g);AdfDhtmlSelectBooleanRadioPeer.superclass.LazyInitialize.call(this,g,h);g!=a&&e.setExpandoProperty(h,AdfDhtmlEditableValuePeer._INITIALIZED,"init")}}};
AdfDhtmlSelectBooleanRadioPeer.prototype.HandleComponentClick=function(a){AdfDhtmlSelectBooleanRadioPeer.superclass.HandleComponentClick.call(this,a);var b=this.getComponent();if((a=a.getNativeEventTarget())&&"radio"==a.type)a&&a.checked?this.Validate(b,!0):this.Validate(b,!1),this._validateUncheckedComponents(a)};
AdfDhtmlSelectBooleanRadioPeer.prototype._validateUncheckedComponents=function(a){var b=a.name;if(""!=b&&(a=AdfDomUtils.getFormElement(a).elements[b]))for(b=0;b<a.length;++b){var d=a[b];"radio"==d.type&&!1==d.checked&&(d=AdfRichUIPeer.getFirstAncestorComponent(d),null!=d&&(!0==d.getSubmittedValue()||!0==d.getValue())&&this.Validate(d,!1))}};
AdfUIComponents.createComponentClass("AdfRichSelectManyCheckbox",{componentType:"oracle.adf.RichSelectManyCheckbox",propertyKeys:[{name:"changed",type:"Boolean","default":!1},{name:"changedDesc",type:"String"},{name:"autoSubmit",type:"Boolean","default":!1},{name:"accessKey",type:"String"},{name:"contentStyle",type:"String"},{name:"helpTopicId",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"label",type:"String"},{name:"labelStyle",type:"String"},{name:"readOnly",type:"Boolean",
"default":!1,secured:!0},{name:"showRequired",type:"Boolean","default":!1},{name:"simple",type:"Boolean","default":!1},{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"valuePassThru",type:"Boolean","default":!1,secured:!0},{name:"layout",type:"String","default":"vertical"}],superclass:AdfUISelectMany});
AdfRichUIPeer.createPeerClass(AdfDhtmlSelectManyPeer,"AdfDhtmlSelectManyCheckboxPeer");AdfDhtmlSelectManyCheckboxPeer.InitSubclass=function(){AdfRichUIPeer.addComponentPropertyGetters(this,AdfUIEditableValue.SUBMITTED_VALUE,AdfUISelectMany.SELECT_ITEMS,AdfRichSelectManyCheckbox.LABEL);AdfRichUIPeer.addComponentPropertyChanges(this,AdfRichSelectManyCheckbox.LABEL);AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE)};
AdfDhtmlSelectManyCheckboxPeer.prototype.HandleComponentClick=function(a){AdfDhtmlSelectManyCheckboxPeer.superclass.HandleComponentClick.call(this,a);var b=this.getComponent();a=a.getNativeEventTarget();"INPUT"==AdfAgent.AGENT.getNodeName(a)&&(a=this.GetSubmittedValue(b,a),this.Validate(b,a))};
AdfDhtmlSelectManyCheckboxPeer.prototype.GetNoteWindowAlignmentNode=function(a,b){b||(b=this.getDomElement());var d=b.getElementsByTagName("input")[0];return d?d:AdfDhtmlSelectManyCheckboxPeer.superclass.GetNoteWindowAlignmentNode.call(this,a,b)};AdfDhtmlSelectManyCheckboxPeer.prototype.SetDisplayValue=function(a,b,d){AdfAssert.assertDomElement(b);AdfAssert.assertArray(d);if(a=this.GetCheckboxes(a,b))for(b=0;b<a.length;b++){var e=a[b],f=AdfCollections.indexOf(d,e.value);e.checked=0<=f}};
AdfDhtmlSelectManyCheckboxPeer.prototype.GetLabelValue=function(a){return a.parentNode.nextSibling.firstChild.nodeValue};AdfDhtmlSelectManyCheckboxPeer.prototype.GetInlineEditor=function(){return AdfDhtmlSimpleLabelEditor.getInlineEditor()};
AdfUIComponents.createComponentClass("AdfRichSelectOneRadio",{componentType:"oracle.adf.RichSelectOneRadio",propertyKeys:[{name:"changed",type:"Boolean","default":!1},{name:"changedDesc",type:"String"},{name:"autoSubmit",type:"Boolean","default":!1},{name:"accessKey",type:"String"},{name:"contentStyle",type:"String"},{name:"helpTopicId",type:"String"},{name:"disabled",type:"Boolean","default":!1,secured:!0},{name:"label",type:"String"},{name:"labelStyle",type:"String"},{name:"readOnly",type:"Boolean",
"default":!1,secured:!0},{name:"showRequired",type:"Boolean","default":!1},{name:"simple",type:"Boolean","default":!1},{name:"inlineStyle",type:"String"},{name:"styleClass",type:"String"},{name:"shortDesc",type:"String"},{name:"unsecure",type:"Object",secured:!0},{name:"visible",type:"Boolean","default":!0},{name:"valuePassThru",type:"Boolean","default":!1,secured:!0},{name:"layout",type:"String","default":"vertical"},{name:"unselectedLabel",type:"String"}],superclass:AdfUISelectOne});
AdfRichUIPeer.createPeerClass(AdfDhtmlSelectOnePeer,"AdfDhtmlSelectOneRadioPeer");AdfDhtmlSelectOneRadioPeer.InitSubclass=function(){AdfRichUIPeer.addComponentPropertyGetters(this,AdfUIEditableValue.SUBMITTED_VALUE,AdfUISelectOne.SELECT_ITEMS,AdfRichSelectOneRadio.LABEL);AdfRichUIPeer.addComponentPropertyChanges(this,AdfRichSelectOneRadio.LABEL);AdfRichUIPeer.addComponentEventHandlers(this,AdfUIInputEvent.CLICK_EVENT_TYPE);this._ITEM_VALUE_EXPANDO="_adfIV"};
AdfDhtmlSelectOneRadioPeer.prototype.HandleComponentClick=function(a){AdfDhtmlSelectOneRadioPeer.superclass.HandleComponentClick.call(this,a);a=this.getComponent();this.Validate(a,this.GetSubmittedValue(a,this.getDomElement()))};AdfDhtmlSelectOneRadioPeer.prototype.GetNoteWindowAlignmentNode=function(a,b){b||(b=this.getDomElement());var d=b.getElementsByTagName("input")[0];return d?d:AdfDhtmlSelectOneRadioPeer.superclass.GetNoteWindowAlignmentNode.call(this,a,b)};
AdfDhtmlSelectOneRadioPeer.prototype.GetComponentSelectItems=function(a,b){var d=AdfDhtmlEditableValuePeer.GetContentNode(a,b);if(null!=d){var d=d.getElementsByTagName("input"),e=[];if(null!=d)for(var f=d.length,g=0;g<f;g++)e[g]=new AdfSelectItem,e[g].setValue(d[g].value),e[g].setLabel(d[g].text),e[g].setDisabled(d[g].disabled);return e}};
AdfDhtmlSelectOneRadioPeer.prototype.GetSubmittedValue=function(a,b){var d=AdfDhtmlEditableValuePeer.GetContentNode(a,b);if(a.getReadOnly())return d.getAttribute(AdfDhtmlSelectOneRadioPeer._ITEM_VALUE_EXPANDO);for(var d=d.getElementsByTagName("input"),e=0;e<d.length;e++)if(d[e].checked)return d[e].value;return""};
AdfDhtmlSelectOneRadioPeer.prototype.SetDisplayValue=function(a,b,d){b=AdfDhtmlEditableValuePeer.GetContentNode(a,b);if(null!=b)if(a=a.getReadOnly(),AdfAssert.assertString(d),a)AdfAgent.AGENT.setTextContent(b,d);else if(a=b.getElementsByTagName("input"),null!=a){b=a.length;for(var e=0;e<b;e++)a[e].value==d&&(a[e].checked=!0)}};AdfDhtmlSelectOneRadioPeer.prototype.GetInlineEditor=function(){return AdfDhtmlSimpleLabelEditor.getInlineEditor()};