"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SettingTabs = function (_a) {
    var tabs = _a.tabs;
    var _b = (0, react_1.useState)(0), activeTab = _b[0], setActiveTab = _b[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full mt-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex overflow-x-auto whitespace-nowrap max-w-full", children: tabs.map(function (tab, index) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveTab(index); }, className: "flex-1 min-w-[100px] py-2 text-center transition-all border rounded-sm bg-gray-100\n              ".concat(activeTab === index
                        ? " border-b-2 bg-gray-200 font-semibold"
                        : "text-gray-500 hover:text-gray-700"), children: tab.label }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4", children: tabs[activeTab].content })] }));
};
exports.default = SettingTabs;
