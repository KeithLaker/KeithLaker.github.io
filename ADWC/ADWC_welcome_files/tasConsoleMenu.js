/**
 * Created by ziziwang on 8/11/16.
 */

var menu =
{
    init: function (menuItems, config)
    {
        if(menu.initialized){
            return;
        }
        menu.menuItems = menuItems;
        menu.bodyDivId = config.bodyDivId;
        if (!menu.bodyDivId)
        {
            menu.bodyDivId = menu.createBodyDiv();
        }

        menu.bodyDiv = document.getElementById(menu.bodyDivId);
        menu.rbstyle = config.rbstyle === undefined ? false : config.rbstyle;
        menu.hideOnSelect = config.hideOnSelect === undefined ? false : config.hideOnSelect;
        menu.width = config.width;

        menu.eventNames = ['eventOpenMenu'];
        menu.events = {};
        if (config.events) {
            for (var i = 0; i < config.events.length; i++) {
                var e = config.events[i];
                if (menu.eventNames.indexOf(e.event) < 0) {
                    console.log('unsupported event: ' + e.event);
                    console.log('Currently supported evnets are ' + menu.eventNames);
                    continue;
                }
                menu.events[e.event] = e;
            }
        }

        menu.currentItems = menu.menuItems;

        if (config.btnMenu) {

            menu.btnMenu = document.querySelector("*[id$=" + config.btnMenu + "]");
            if (menu.btnMenu) {
                menu.btnMenu.addEventListener("keypress", menu.keypressMenuButton);
                menu.bKeyEnter = true;

                if (config.btnTabIndex) {
                    menu.btnMenu.tabIndex = config.btnTabIndex;
                }
            }
        }

        menu.bodyDiv.className = "menu-div-body";

        var sheets = document.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
            var sheet = sheets[i];
            if (sheet.href && sheet.href.indexOf('menu.css')) {//indexOf('menu_icons.css')
                menu.iconsStyleSheet = sheet;
                break;
            }
        }
        menu.createMenuHtml();
        menu.open = false;
        menu.initialized = true;
    },
    keypressMenuButton: function (e) {
        var key = e.key === undefined ? e.keyIdentifier : e.key;
        if (key === "Enter") {
            menu.toggle();
            if (menu.focus && menu.focus.length > 0) {
                menu.nfocus = 0;
                menu.removeClassName(menu.div, "mousehover");
                menu.removeClassNameArray(menu.focus, "keyhover");
                menu.addClassName(menu.focus[menu.nfocus], "keyhover");
            }
        }
    },
    createBodyDiv: function ()
    {

        var body = document.getElementsByTagName('body')[0];

        var nodes = body.childNodes;
        var n = nodes.length;

        var div = document.createElement('DIV');

        div.id = "bodyDivId";

        var k = 0;
        while (document.getElementById(div.id) && k < 100)
        {
            div.id += k++;
        }

        if (document.getElementById(div.id))
        {
            console.log("could not set unique body div id");
            return "undefined";
        }

        for (var i = 0; i < n; i++)
        {
            var el = body.removeChild(nodes[0]);
            div.appendChild(el);
        }

        body.appendChild(div);

        return div.id;
    },
    createUL: function (items)
    {
        var ul = document.createElement("UL");
        menu.focus = [];
        ul.focus = menu.focus;
        for (var i = 0, l = items.length; i < l; i++)
        {
            it = items[i];

            if (!(it instanceof menuItem)) {
                it = new menuItem(it);
                items[i] = it;
            }

            if (!it.visible)
            {
                continue;
            }

            li = document.createElement("LI");
            li.menuItem = it;
            it.li = li;
            li.innerHTML = it.html ? it.html : it.name;
            if (it.selected)
            {
                li.className += " selected";
            }

            if (it.tooltip) {
                li.title = it.tooltip;
            }

            //if (it.handler && it.handler.type === "url")

            var a = document.createElement("A");
            if (it.target)
            {
                a.target = it.target;
            }
            a.href = it.link;
            a.style.display = "none";
            li.appendChild(a);
            it.a = a;


            if (it.ident) {
                li.style.backgroundPosition = (it.ident + 20) + "px center";
            } else {
                li.style.backgroundPosition = "20px center";
            }

            li.style.whiteSpace = "nowrap";

            if (it.icon)
            {
                if (it.icon.css) {
                    it.icon.css = it.getConfigValue(it.icon.css, "icon.css");
                } else {
                    it.icon.css = menu.createIconCSS(it);
                }
                li.className += " " + it.icon.css;

                var paddingLeft = 50;
                if (it.ident) {
                    paddingLeft += it.ident;
                }

                if (it.icon.width) {
                    paddingLeft += (it.icon.width - 35);
                }

                if (paddingLeft != 50) {
                    li.style.paddingLeft = paddingLeft + "px";
                }
            }

            if (it.type === menuItem.typeItem || it.type === menuItem.typeMenu
                || it.type === menuItem.typeParentMenu)
            {
                if (it.clickable())
                {
                    li.addEventListener("click", menu.onClickItem);
                }

                if (it.active)
                {
                    li.className += " active";
                    li.addEventListener("mousemove", function (e) {
                        menu.removeClassNameArray(menu.focus, "keyhover");
                        if (!menu.hasClassName(menu.div, "mousehover")) {
                            menu.addClassName(menu.div, "mousehover");
                        }

                        menu.nfocus = e.target.nfocus;
                    });
                    menu.focus.push(li);
                    li.nfocus = menu.focus.length - 1;
                } else
                {
                    li.className += " disabled";
                }
            } else if (it.type == menuItem.typeTitle)
            {
                li.className = it.classNames ? "" : "menu-title";
                li.style.width = menu.width;
            }

            if (it.type === menuItem.typeMenu) {
                var img = document.createElement('IMG');
                img.src = "img/func_caretright_16_ena.png";
                img.style.marginLeft = "10px";
                img.style.verticalAlign = "middle";
                li.appendChild(img);
            } else if (it.type === menuItem.typeParentMenu) {
                var img = document.createElement('IMG');
                img.src = "img/func_caretleft_16_ena.png";
                img.style.marginRight = "10px";
                img.style.verticalAlign = "middle";
                li.insertBefore(img, li.firstChild);
            }

            if (it.classNames)
            {
                li.className += it.classNames;
            }

            if (it.styles)
            {
                for (var s = 0; s < it.styles.length; s++)
                {
                    var style = it.styles[s];
                    li.style[style.name] = style.value;
                }
            }

            ul.appendChild(li);

            if (it.separator) {
                var li1 = document.createElement("LI");
                li1.className = "menu-item-border";
                ul.appendChild(li1);
            }
        }

        return ul;
    },
    updateFocusArray: function (items, ul) {
        menu.focus = [];
        ul.focus = menu.focus;
        for (var i = 0, l = items.length; i < l; i++) {
            var it = items[i];
            var li = it.li;
            if (it.active)
            {
                menu.focus.push(li);
                li.nfocus = menu.focus.length - 1;
            }
        }

    },
    createIconCSS: function (it) {

        if (!it.icon || !it.icon.urls || !menu.iconsStyleSheet) {
            return "";
        }

        var styleSheet = menu.iconsStyleSheet;

        var css = it.id + "-icon";
        for (var i = 0; i < it.icon.urls.length; i++) {

            var url = it.icon.urls[i];
            var rule = "";
            for (var k = 0; k < url.types.length; k++) {

                switch (url.types[k]) {
                    case 'active':
                        rule += ", ." + css;
                        break;
                    case 'disabled':
                        rule += ", ." + css + ".disabled, " + ".menu-div.mousehover ." + css + ".disabled:hover ";
                        break;
                    case 'selected':
                        rule += ", ." + css + ".selected ";
                        break;
                    case 'hover':
                        rule += ", .menu-div.mousehover ." + css + ":hover ";
                        rule += ", .menu-div ." + css + ".keyhover ";
                        break;
                }
            }

            if (rule.length > 0 && rule[0] === ',') {
                rule = rule.substr(1);
            }

            rule += " { background: url('" + url.path + "') no-repeat 0px 0px transparent; }";

            styleSheet.insertRule(rule, 0);
        }

        return css;
    },
    createMenuHtml: function ()
    {
        menu.div = document.createElement("DIV");

        var ul = menu.createUL(menu.menuItems);
        ul.name = "main";
        menu.ul = ul;
        menu.div.style.width = "0px";
        menu.div.className = "menu-div mousehover";
        menu.div.appendChild(ul);

        document.getElementsByTagName('body')[0].insertBefore(menu.div, menu.bodyDiv);
    },
    toggle: function (e)
    {

        if (menu.div.style.width === '0px')
        {
            if (menu.btnMenu && menu.bKeyEnter) {
                menu.btnMenu.removeEventListener("keypress", menu.keypressMenuButton);
                menu.bKeyEnter = false;
            }

            menu.bodyDiv.addEventListener("click", menu.toggle);
            document.getElementsByTagName('body')[0].addEventListener("keydown", menu.keyEventHandler);

            menu.div.style.width = menu.width;
            //menu.div.style.marginRight = "3px";
            menu.bodyDiv.style.marginLeft = menu.width;

            menu.nfocus = -1;
            menu.open = true;

            if (menu.events.eventOpenMenu && !menu.bFirstTime) {
                menu.bFirstTime = true;
                menu.events.eventOpenMenu.handler(this.id, menu.currentItems, true);
            }
        }
        else
        {

            menu.removeClassNameArray(menu.focus, "keyhover");
            if (menu.btnMenu && !menu.bKeyEnter) {
                menu.btnMenu.addEventListener("keypress", menu.keypressMenuButton);
                menu.bKeyEnter = true;
            }

            menu.bodyDiv.removeEventListener("click", menu.toggle);
            document.getElementsByTagName('body')[0].removeEventListener("keydown", menu.keyEventHandler);

            menu.div.style.width = "0px";
            menu.div.style.marginRight = "0px";
            menu.bodyDiv.style.marginLeft = "0px";

            menu.closeAllSubMenu();

            menu.open = false;
        }

        if (e)
        {
            e.stopPropagation();
        }
    },
    keyEventHandler: function (e) {
        var key = e.keyCode;
        if (key === 27) { //Esc
            menu.toggle();
        } else if (key === 40) { //"Down"

            if (menu.focus && menu.focus.length > 0) {

                menu.removeClassName(menu.div, "mousehover");

                menu.nfocus++;
                if (menu.nfocus >= menu.focus.length) {
                    menu.nfocus = 0;
                }
                menu.removeClassNameArray(menu.focus, "keyhover");
                menu.addClassName(menu.focus[menu.nfocus], "keyhover");
            }
        } else if (key === 38) { //"Up"

            if (menu.focus && menu.focus.length > 0) {

                menu.removeClassName(menu.div, "mousehover");

                menu.nfocus--;
                if (menu.nfocus < 0) {
                    menu.nfocus = menu.focus.length - 1;
                }

                menu.removeClassNameArray(menu.focus, "keyhover");
                menu.addClassName(menu.focus[menu.nfocus], "keyhover");
            }
        } else if (key === 13) { //"Enter"
            if (menu.focus && menu.nfocus >= 0 && menu.nfocus < menu.focus.length) {
                var it = menu.focus[menu.nfocus].menuItem;
                it.onClickItem();
            }
        }

        if (e)
        {
            e.preventDefault();
            e.stopPropagation();
        }

    },
    show: function (ul)
    {
        ul.style.left = "0px";
    },
    hideLeft: function (ul)
    {
        ul.style.left = "-" + menu.width;
    },
    hideRight: function (ul)
    {
        ul.style.left = "+" + menu.width;
    },
    onClickItem: function (e)
    {
        if (!menu.open) {
            return;
        }
        var it = e.currentTarget.menuItem;
        it.onClickItem();
    },
    removeAllSelections: function ()
    {

        for (var i = 0, l = menu.currentItems.length; i < l; i++)
        {

            var li = menu.currentItems[i].li;
            if (li && menu.hasClassName(li, "selected"))
            {
                menu.removeClassName(li, "selected");
                menu.currentItems[i].selected = false;
            }
        }
    },
    hasClassName: function (el, cname)
    {
        return el && el.classList && el.classList.contains(cname);
    },
    addClassName: function (el, cname)
    {
        if (el && el.classList)
        {
            el.classList.add(cname);
        }
    },
    removeClassName: function (el, cname)
    {
        if (el && el.classList)
        {
            el.classList.remove(cname);
        }
    },
    removeClassNameArray: function (a, cname) {

        for (var i = 0; i < a.length; i++) {
            menu.removeClassName(a[i], cname);
        }
    },
    replaceClassName: function (el, newClassName, classNames)
    {
        for (var i = 0; i < classNames.length; i++)
        {
            if (menu.hasClassName(el, classNames[i]))
            {
                menu.removeClassName(el, classNames[i]);
            }
        }

        menu.addClassName(el, newClassName);
    },
    getItemById: function (id)
    {
        var it = menu._getItemById(menu.menuItems, id);

        if (!it) {
            console.log("invalid menu item id: " + id);
        }

        return it;
    },
    _getItemById: function (items, id) {

        for (var i = 0, l = items.length; i < l; i++)
        {
            var it = items[i];
            if (id === it.id)
            {
                return it;
            }

            if (it.items) {
                return menu._getItemById(it.items, id);
            }
        }

        return null;
    },
    highlightFocus: function () {
        if (menu.focus && menu.focus.length > 0) {

            menu.removeClassName(menu.div, "mousehover");

            if (menu.nfocus >= menu.focus.length || menu.nfocus < 0) {
                menu.nfocus = 0;
            }
            menu.removeClassNameArray(menu.focus, "keyhover");
            menu.addClassName(menu.focus[menu.nfocus], "keyhover");
        }
    },
    removeHighlightFocus: function () {
        if (menu.focus && menu.focus.length > 0) {
            if (!menu.hasClassName(menu.div, "mousehover")) {
                menu.addClassName(menu.div, "mousehover");
            }
            menu.removeClassNameArray(menu.focus, "keyhover");
        }
    },
    closeAllSubMenu: function () {

        var ul = menu.div.childNodes;
        var mainUL;
        for (var i = 0; i < ul.length; i++) {
            if (ul[i].name === "main") {
                mainUL = ul[i];
                menu.show(mainUL);
            } else {
                menu.hideLeft(ul[i]);
            }
        }

        menu.currentItems = menu.menuItems;
        menu.focus = mainUL.focus;
        menu.nfocus = 0;
    }

};

var menuItem = function (config)
{
    this.config = config;
    this.id = config.id;
    this.name = config.name;
    this.html = this.getConfigValue(config.html, "html");
    this.icon = config.icon;
    this.handler = config.handler;
    this.link = config.link;
    if (this.handler) {
        var h = this.handler;
        if (typeof this.handler === "string") {
            var url = h;
            var params = null;
            var s1 = h.indexOf('>');
            if (s1 > -1) {
                url = h.substring(0, s1);
                var ps = h.substring(s1 + 1, h.length);
                var prm = ps.split("&");
                if (prm && prm.length > 0) {
                    params = {};
                    for (var i = 0; i < prm.length; i++) {
                        var p = prm[i];
                        var p1 = p.split("=");
                        if (p1 && p1.length > 1) {
                            params[p1[0]] = p1[1];
                        }
                    }
                }
            }

            this.handler = {
                type: "url",
                url: url
            };

            if (params) {
                this.handler.params = params;
            }
        } else if (typeof this.handler === "function") {
            this.handler = {
                type: "fn",
                fn: h
            };
        }
    }
    this.type = config.type === undefined ? menuItem.typeItem : config.type;
    this.selected = config.selected === undefined ? false : this.getConfigValue(config.selected, "selected");
    this.active = config.active === undefined ? true : this.getConfigValue(config.active, "active");
    this.separator = config.separator === undefined ? true : this.getConfigValue(config.separator, "separator");
    this.ident = this.getConfigValue(config.ident, "ident");
    this.update = config.update;
    this.classNames = this.getConfigValue(config.classNames, "classNames");
    this.styles = config.styles;
    this.visible = config.visible === undefined ? true : this.getConfigValue(config.visible, "visible");
    this.tooltip = config.tooltip === undefined ? "" : this.getConfigValue(config.tooltip, "tooltip");

    if (this.type == menuItem.typeMenu && config.items)
    {
        this.items = [];
        this.items.push(new menuItem({
            type: menuItem.typeParentMenu,
            name: this.name
        }));
        this.items[0].parent = menu;

        for (var i = 0; i < config.items.length; i++)
        {
            it = config.items[i];
            it = it instanceof menuItem ? it : new menuItem(it);
            this.items.push(it);
        }
    }
};

menuItem.typeItem = 0;
menuItem.typeLabel = 1;
menuItem.typeTitle = 2;
menuItem.typeMenu = 3;
menuItem.typeParentMenu = 4;/*private type*/

menuItem.prototype.clickable = function ()
{
    if (this.type != menuItem.typeItem
        && this.type != menuItem.typeMenu
        && this.type != menuItem.typeParentMenu
        || !this.active)
    {
        return false;
    }

    return true;
};

menuItem.prototype.openMenu = function ()
{
    var bFirstTime = false;
    if (!this.ul)
    {
        bFirstTime = true;
        this.ul = menu.createUL(this.items);
        var menuId = (menu.currentItems &&
        menu.currentItems.length > 0 &&
        menu.currentItems[0].type === menuItem.typeParentMenu) ?
            menu.currentItems[0].parent.itemId : "";
        var parent = {
            ul: this.li.parentNode,
            items: menu.currentItems,
            focus: menu.focus,
            menuId: menuId,
            itemId: this.id
        };//menu;
        this.parent = parent;
        this.items[0].parent = parent;
        this.items[0].ul = this.ul;
        menu.hideLeft(this.ul);
        menu.show(this.parent.ul);
        menu.div.appendChild(this.ul);
    }

    var x = menu.div.offsetHeight;

    menu.removeHighlightFocus();
    menu.hideLeft(this.ul);
    menu.show(this.ul);
    menu.hideRight(this.parent.ul);


    menu.currentItems = this.items;
    menu.focus = this.ul.focus;
    menu.nfocus = 0;
    menu.highlightFocus();

    if (menu.events.eventOpenMenu) {
        menu.events.eventOpenMenu.handler(this.id, menu.currentItems, bFirstTime);
    }
};

menuItem.prototype.closeMenu = function ()
{
    menu.removeHighlightFocus();
    menu.hideRight(this.parent.ul);
    menu.show(this.parent.ul);
    menu.hideLeft(this.ul);
    menu.currentItems = this.parent.items;
    menu.focus = this.parent.ul.focus;
    menu.nfocus = 0;
    menu.highlightFocus();

    if (menu.events.eventOpenMenu) {
        menu.events.eventOpenMenu.handler(this.parent.menuId, menu.currentItems, false);
    }
};

/*public*/
menuItem.prototype.setSelection = function (bSingleSelectionMode, bSelected) {

    if (bSingleSelectionMode) {
        menu.removeAllSelections();
    }

    if (bSelected) {
        menu.addClassName(this.li, "selected");
    }
    this.selected = bSelected;
};

/*public*/
menuItem.prototype.setActive = function (value)
{
    if (this.active === value)
    {
        return;
    }

    var className = (value ? "active" : "disabled");
    menu.replaceClassName(this.li, className, ["active", "disabled"]);

    if (this.active && !value)
    {
        this.li.removeEventListener("click", menu.onClickItem);
    } else if (!this.active && value)
    {
        this.li.addEventListener("click", menu.onClickItem);
    }

    this.active = value;

    var ul = this.li.parentNode;
    var items = menu.currentItems;
    menu.updateFocusArray(items, ul);
};

/*public*/
menuItem.prototype.setName = function (name) {

    this.name = name;
    this.li.innerHTML = name;
};

menuItem.prototype.onClickItem = function ()
{
    if(this.selected){
        return;
    }

    if (menu.rbstyle)
    {
        menu.removeAllSelections();
        if (this.type !== menuItem.typeMenu && this.type !== menuItem.typeParentMenu) {
            menu.addClassName(this.li, "selected");
            this.selected = true;
        }
    }

    if (this.type == menuItem.typeMenu)
    {
        this.openMenu();
        return;
    } else if (this.type == menuItem.typeParentMenu)
    {
        this.closeMenu();
        return;
    }
    this.a.click();
    //if (this.handler)
    //{
    //    switch (this.handler.type)
    //    {
    //        case "url":
    //            this.a.click();
    //            break;
    //        case "fn":
    //            var params = this.handler.params == undefined ? null : this.getConfigValue(this.handler.params, "handler.params");
    //            this.handler.fn(this.id, this.handler.params);
    //            break;
    //        case "adf":
    //            if (this.handler.cmpId)
    //            {
    //                var el = document.querySelector("*[id$=" + this.handler.cmpId + "]");
    //                if (el)
    //                {
    //                    var cmp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);
    //                    if (cmp)
    //                    {
    //                        var eventName = this.handler.eventName ? this.handler.eventName : this.id;
    //                        var params = this.handler.params == undefined ? null : this.getConfigValue(this.handler.params, "handler.params");
    //                        AdfCustomEvent.queue(cmp, eventName,
    //                            {
    //                                id: this.id, params: params
    //                            });
    //                    }
    //                    else
    //                    {
    //                        console.log("cannot find adf component in handler for " + this.id);
    //                    }
    //                }
    //                else
    //                {
    //                    console.log("cannot find html element in handler for " + this.id);
    //                }
    //
    //            }
    //            else
    //            {
    //                console.log("missing adf component id in handler for " + this.id);
    //            }
    //            break;
    //    }
    //}

    if (this.update)
    {
        //this.updateItem();
        this.update();
    }

    if (menu.hideOnSelect)
    {
        menu.toggle();
    }
};

menuItem.prototype.getConfigValue = function (val, name)
{

    var value = menuVariant.getValue(val, this.id + "." + name);

    return value;
};

menuVariant =
{
    getValue: function (val, name)
    {
        if (val === undefined || val === null)
        {
            return val;
        }

        if (typeof val === 'function')
        {
            return val();
        }
        else if (typeof val === 'object')
        {
            if (val.type === "adf")
            {
                var value = menuVariant.getAdfClientAttribute(val, name);
                return value;
            }
            else if (val.type === "fn")
            {
                return val.fn(val.params);
            }
            else
            {
                console.log("wrong menu item type parameter: " + val.type);
            }
        }

        return val;
    },
    getAdfClientAttribute: function (val, name)
    {
        var el = document.querySelector("*[id$=" + val.cmpId + "]");
        var cmp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);
        var value = cmp.getProperty(val.name ? val.name : name);
        return value;
    },
    getAdfClientAttribFromId: function (cmpId, name)
    {
        var el = document.querySelector("*[id$=" + cmpId + "]");
        var cmp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);
        var value = cmp.getProperty(name);
        return value;
    }

};


function populateMenuContent(){
    var el = document.querySelector("*[id$=" + 'menu-btn-img' + "]");
    var cmp = AdfPage.PAGE.findComponentByAbsoluteId(el.id);
    var menuItemsArr = cmp.getProperty("menuItems");
    var currentServiceType = cmp.getProperty("currentServiceType");
    var context = menuVariant.getAdfClientAttribFromId("menu-btn-img", "imgcontextpath");
    var imagePath = "/cs_images";
    //context += imagePath;

    //title item
    var title =
    {
        id: "title",
        type: menuItem.typeTitle,
        name: cmp.getProperty("title")
    };
    var outputMenuItems = [];

    //navigation menu items
    for(var i=0; i<menuItemsArr.length;i++){
        var item = JSON.parse(menuItemsArr[i]);
        var singleMenuItem = {
            name : item.displayName,
            id : item.id,
            link : item.link,
            order : item.displayOrder,
            selected : currentServiceType && item.id
                          &&  (currentServiceType.toUpperCase && item.id.toUpperCase)
                          &&  (currentServiceType.toUpperCase() === item.id.toUpperCase()),
            icon:
            {
                urls: [
                    {
                    path: context + (item.serviceIconPath ? item.serviceIconPath : imagePath) + '/' + item.activeIcon,
                    types: ['active', 'disabled']
                    },
                    {
                        path: context + (item.serviceIconPath ? item.serviceIconPath : imagePath) + '/' + item.hoverIcon,
                        types: ['hover']
                    },
                    {
                        path: context + (item.serviceIconPath ? item.serviceIconPath : imagePath) + '/' + item.selectedIcon,
                        types: ['selected']
                    }
                ],
                width: 50
            },
            ident : item.indentation
        };
        outputMenuItems.push(singleMenuItem);
    }
    outputMenuItems.unshift(title);
    menu.init(outputMenuItems,{width: "400px", rbstyle: true, btnMenu: "menu-btn-img", btnTabIndex: "1"});

};

function toggleMenu(){
    if(menu){
        if(!menu.div){
            populateMenuContent();
        }
        menu.toggle();
    }
};
