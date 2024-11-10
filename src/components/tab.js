"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ListItem_1 = __importDefault(require("./ListItem"));
var User_svg_1 = __importDefault(require("../assets/User.svg"));
var Avatar_svg_1 = __importDefault(require("../assets/Avatar.svg"));
var Icon_svg_1 = __importDefault(require("../assets/Icon.svg"));
var Content_svg_1 = __importDefault(require("../assets/Content.svg"));
var Hambuger_svg_1 = __importDefault(require("../assets/Hambuger.svg"));
var searchInput_1 = __importDefault(require("./searchInput"));
var Tabs = function (_a) {
    var tabs = _a.tabs;
    var _b = (0, react_1.useState)(0), activeTab = _b[0], setActiveTab = _b[1];
    var _c = (0, react_1.useState)(false), isDropdownOpen = _c[0], setIsDropdownOpen = _c[1];
    var toggleDropdown = function () {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex", children: [(0, jsx_runtime_1.jsxs)("div", { className: "hidden lg:flex flex-col  mt-5 w-[20%] ml-3 space-y-2  border-gray-#FFFFFF", children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: "Untitle UI", mainTitleStyle: "m-2", leading: (0, jsx_runtime_1.jsx)("img", { src: Content_svg_1.default, alt: "untitle ui" }), trailing: (0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)("img", { src: Hambuger_svg_1.default, onClick: toggleDropdown }) }) }), isDropdownOpen && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-8 right-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-10", children: (0, jsx_runtime_1.jsx)("ul", { className: "space-y-2 p-4", children: tabs.map(function (tab, index) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { onClick: function () {
                                        setActiveTab(index);
                                        setIsDropdownOpen(false);
                                    }, className: "w-full text-left text-gray-700 hover:text-blue-500", children: tab.title }) }, index)); }) }) })), (0, jsx_runtime_1.jsx)(searchInput_1.default, {}), tabs.map(function (tab, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "hidden lg:flex", children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: tab.icon, mainTitle: (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveTab(index); }, className: " text-left text-[16px] ".concat(activeTab === index
                                    ? "bg-[#F9FAFB]  font-semibold"
                                    : "text-gray-500", " hover:text-blue-600"), children: tab.title }, index) }) })); }), (0, jsx_runtime_1.jsx)("div", { className: "w-[95.4%] h-[15rem] bg-[#F9FAFB]", children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: (0, jsx_runtime_1.jsxs)("div", { className: "m-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[14px] mb-1", children: "New features available!" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-[14px] mb-2 text-[#667085]", children: ["Check out the new dashboard view. Pages now load faster.", " "] }), (0, jsx_runtime_1.jsx)("img", { src: User_svg_1.default, alt: "user image", className: "rounded" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex row-auto space-x-5 mt-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[14px]", children: "Dismiss" }), (0, jsx_runtime_1.jsx)("a", { href: "#", className: "text-[#6941C6] text-[14px]", children: "What\u2019s new?" })] })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "py-5", children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)("div", { className: "mr-1", children: (0, jsx_runtime_1.jsx)("img", { src: Avatar_svg_1.default, alt: "user picture", className: "" }) }), mainTitle: "Olivia Rhye", mainTitleStyle: "text-[14px]", subTitle: "olivia@untitledui.com", subTitleStyle: "text-[10px]", trailing: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: Icon_svg_1.default, alt: "icon", className: " mb-3" }) }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full h-full p-4 bg-[#F9FAFB]  rounded-r-lg", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: "Untitle UI", mainTitleStyle: "m-2", leading: (0, jsx_runtime_1.jsx)("img", { src: Content_svg_1.default, alt: "untitle ui" }), trailing: (0, jsx_runtime_1.jsx)("div", { className: "lg:hidden hover:cursor-pointer", children: (0, jsx_runtime_1.jsx)("img", { src: Hambuger_svg_1.default, onClick: toggleDropdown }) }) }) }), isDropdownOpen && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-8 right-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-10", children: (0, jsx_runtime_1.jsx)("ul", { className: "space-y-2 p-4", children: tabs.map(function (tab, index) { return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { onClick: function () {
                                        setActiveTab(index);
                                        setIsDropdownOpen(false);
                                    }, className: "w-full text-left text-gray-700 hover:text-blue-500", children: tab.title }) }, index)); }) }) })), tabs[activeTab].content] })] }));
};
exports.default = Tabs;
