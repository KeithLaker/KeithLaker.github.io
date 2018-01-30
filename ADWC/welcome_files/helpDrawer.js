/**
 * Created by ziziwang on 9/26/16.
 */

var hdEnabled = false;

function getHDVisible() {
    var drawerId = "help-drawer-contact";
    var el = document.querySelector("*[id$=" + drawerId  + "]");
    var drawerComp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);

    return drawerComp.getVisible();
}

function setHDVisible(value) {
    var drawerId = "help-drawer-contact";
    var el = document.querySelector("*[id$=" + drawerId  + "]");
    var drawerComp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);

    drawerComp.setVisible (value);
}

function toggleHelpDrawer (event)
{
    if (!hdEnabled) {
        hdScrolling(true);
    }

    if (!getHDVisible()) {
        setHDVisible(true);
        updateHDScrolling();
    } else {
        setHDVisible(false);
    }
}

function closeHelpDrawer() {
    setHDVisible(false);
}

function hdScrolling(enable) {
    var id;
    function resizeEventHandler() {
        clearTimeout(id);
        id = setTimeout(evaluateHDScroll, 500);
    }

    if (enable) {
        // just in case it was wasn't removed
        window.removeEventListener("resize", resizeEventHandler);
        window.addEventListener("resize", resizeEventHandler);
        hdEnabled = true;
    } else {
        window.removeEventListener("resize", resizeEventHandler);
        hdEnabled = false;
    }
}

function updateHDScrolling() {
    if (getHDVisible()) {
        setTimeout(evaluateHDScroll, 2000);
    }
}

function evaluateHDScroll() {
    if (getHDVisible()) {
        // there is help and there is call
        // scroll is different
        if (inHelpMode()) {
            helpModeScrolling();
        } else if (inCallMode()) {
            callModeScrolling();
        }
    }
}

function inHelpMode() {
    var helpId = "helpSectionPGL" ;
    var el = document.querySelector("*[id$=" + helpId  + "]");
    var s = document.getElementById(el.id);

    if (s.clientHeight) {
        return true;
    } else {
        return false;
    }
}

function inCallMode() {
    var helpId = "callSectionPGL" ;
    var el = document.querySelector("*[id$=" + helpId  + "]");
    var s = document.getElementById(el.id);

    if (s.clientHeight) {
        return true;
    } else {
        return false;
    }
}

function helpModeScrolling() {
    var helpId = "helpSectionPGL" ;
    var el = document.querySelector("*[id$=" + helpId  + "]");
    var s = document.getElementById(el.id);

    if ((window.innerHeight - s.scrollHeight) < 262) {
        var cssHeightAdjust = 262 - (window.innerHeight - s.clientHeight);
        var cssHeightText = "" + Math.max(s.clientHeight - cssHeightAdjust, 50) + "px";
        s.style.height = cssHeightText;
        s.style.overflowY = "scroll";
    } else {
        s.style.height = "auto";
        s.style.overflowY = "auto";
    }
}

function callModeScrolling() {
    var helpId = "callSectionPGL" ;
    var el = document.querySelector("*[id$=" + helpId  + "]");
    var s = document.getElementById(el.id);

    if ((window.innerHeight - s.scrollHeight) < 262) {
        var cssHeightAdjust = 262 - (window.innerHeight - s.clientHeight);
        var cssHeightText = "" + Math.max(s.clientHeight - cssHeightAdjust, 50) + "px";
        s.style.height = cssHeightText;
        s.style.overflowY = "scroll";
    } else {
        s.style.height = "auto";
        s.style.overflowY = "auto";
    }
}

function helpIconClicked() {
    updateHDScrolling();
}

function callIconClicked() {
    updateHDScrolling();
}

function createBodyWrapper() {
    var bodyWrapperId = "hdBodyWrapper";
    if(document.getElementById(bodyWrapperId)){
        //wrapper already created
        return;
    }
    var body = document.getElementsByTagName('body')[0];
    var nodes = body.childNodes;
    var n = nodes.length;
    var div = document.createElement('DIV');
    div.id = bodyWrapperId;

    for (var i = 0; i < n; i++)
    {
        var el = body.removeChild(nodes[0]);
        div.appendChild(el);
    }
    body.appendChild(div);
}

function fixIE8ContactTabV2()
{
    if (navigator.appName.indexOf("Internet Explorer")!=-1)
    {
        var rv = -1;
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) {
            rv = parseFloat( RegExp.$1 );
        }
        if (rv == 8.0) {
            var contactSpan = parent.document.getElementById('pt1:contact:contact-tab');
            if (contactSpan != null) {
                contactSpan.className += ' contact-tab-ie8';
            }
        }
    }
}


function asyncloaderV2()
{
    var head = document.getElementsByTagName('head')[0];
    var s;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '${paasUiConfig.chatJsSourceURL}';
    s.async = true;
    head.appendChild(s);

    fixIE8ContactTabV2();
}

