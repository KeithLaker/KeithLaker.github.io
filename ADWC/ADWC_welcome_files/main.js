function addWatermarkBehavior(componentId, type, text) {
    var sourceInput = AdfPage.PAGE.findComponent(componentId);
    var domElemement = AdfAgent.AGENT.getElementById(sourceInput.getClientId());
    var targetArray = domElemement.getElementsByTagName(type);
    targetArray[0].placeholder = text;
}

function handleIDMFieldBlur (evt) {
    var inputTextComponent = evt.getSource();   
    AdfCustomEvent.queue(inputTextComponent,
                         "IDMFieldBlurEvent",
                         {fvalue:inputTextComponent.getSubmittedValue()},
                         true);
    evt.cancel();
} 

function setFocusOnCustomValueText (event)
{
   var adfSelectField   = event.getSource();
   var adfTextField     = adfSelectField.findComponent(adfSelectField.getProperty('focusField'));
   var domSelectField   = AdfAgent.AGENT.getElementById(adfSelectField.getClientId() + "::content");
   var domTextField     = AdfAgent.AGENT.getElementById(adfTextField.getClientId() + "::content");
   if (domSelectField.length > 2 &&
       domSelectField.options[domSelectField.length-2].text == "---------------" &&
       adfSelectField.getValue() == (domSelectField.length - 1))
   {
      adfTextField.setVisible(true);
      domTextField.focus();
   }
   else if (adfTextField != null)
   {
      domTextField.value = "";
      adfTextField.setVisible(false);
   }
}

function removeRequiredStyle(event)
{
   var inputComp = event.getSource();
   var styleClass = new String(inputComp.getStyleClass());
   if (styleClass.indexOf("p_AFError") >= 0)
   {
      inputComp.setStyleClass(styleClass.replace("p_AFError", ""));
   }
}

function toggleExpandCollpase(event)
{
   var srcComp = event.getSource();
   var btnStyleClass = srcComp.getStyleClass();
   if (btnStyleClass.indexOf("expand") > 0)
   {
      srcComp.setShortDesc(srcComp.getProperty('iconCollapseDesc'));
      srcComp.setStyleClass("img-collapse pos-flt-left");
      
      if (srcComp.getProperty('toggleIdOn') != null)
      {
         var hideComp = srcComp.findComponent(srcComp.getProperty('toggleIdOn'));
         hideComp.setInlineStyle("display:none;");
      }
      
      if (srcComp.getProperty('toggleIdOff') != null)
      {
         var showComp = srcComp.findComponent(srcComp.getProperty('toggleIdOff'));
         showComp.setInlineStyle("display:block;");
      }
   }
   else
   {
      srcComp.setShortDesc(srcComp.getProperty('iconExpandDesc'));
      srcComp.setStyleClass("img-expand pos-flt-left");
      
      if (srcComp.getProperty('toggleIdOff') != null)
      {
         var hideComp = srcComp.findComponent(srcComp.getProperty('toggleIdOff'));
         hideComp.setInlineStyle("display:none;");
      }
      
      if (srcComp.getProperty('toggleIdOn') != null)
      {
         var showComp = srcComp.findComponent(srcComp.getProperty('toggleIdOn'));
         showComp.setInlineStyle("display:block;");
      }
   }
}

/**
 * Overrides AdfAgent.prototype.eatEvent to skip eating mouse events that happen
 * on databody element of af:table components.
 * A hack to fix ADF problem with af:table not propogating mouse wheel events.
 * Bug 20210593 - JCS-UI: Scrolling using mouse wheel doesn't work if pointer is inside box container.
 */
function doNotEatMouseEventsOnADFTables(){
   var originalEatEvent = AdfAgent.prototype.eatEvent;
   AdfAgent.prototype.eatEvent = function( e ){
      if( e && e.currentTarget && e.currentTarget.id && e.currentTarget.id.endsWith("::db") )
      {
         // do nothing;
      }
      else {
         originalEatEvent.apply( this, arguments );
      }
   }
}

function isElementInViewport (el) {
   var rect = el.getBoundingClientRect();
   return (
   rect.top >= 0 &&
   rect.left >= 0 &&
   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
   rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
   );
}


function openDiscoveryVideo(evt) {
    videoUrl = evt.getSource().getProperty("videoUrl");
    //window.open(videoUrl, "_blank", "width=512, height=356, location=no, status=no, titlebar=no, toolbar=no, menubar=no");
    window.open(videoUrl, "_blank");
}

function displayProgressPopup(evt) {
    var popupId = evt.getSource().getProperty('progressPopupId');
    var popup = AdfPage.PAGE.findComponentByAbsoluteId(popupId);
    if(popup != null) {
        AdfPage.PAGE.addBusyStateListener(popup, handleBusyState);
        evt.preventUserInput();
    }
     function handleBusyState(evt) {
        if(popup != null) {
            if(evt.isBusy()) {
                popup.show();
            }
            else if(popup.isPopupVisible()) {
                popup.hide();
                AdfPage.PAGE.removeBusyStateListener(popup, handleBusyState);
            }
        }
    }
}