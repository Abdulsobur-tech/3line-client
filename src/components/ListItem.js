"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListItem;
var jsx_runtime_1 = require("react/jsx-runtime");
function ListItem(_a) {
    var leading = _a.leading, trailing = _a.trailing, mainTitle = _a.mainTitle, subTitle = _a.subTitle, mainTitleStyle = _a.mainTitleStyle, subTitleStyle = _a.subTitleStyle, _b = _a.centered, centered = _b === void 0 ? false : _b, appendClass = _a.appendClass, appendParentClass = _a.appendParentClass, appendTitleParentClass = _a.appendTitleParentClass;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center w-full ".concat(appendParentClass ? appendParentClass : ""), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center w-full ".concat(appendClass ? appendClass : ""), children: [leading && (0, jsx_runtime_1.jsx)("div", { children: leading }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col w-full ".concat(centered ? "items-center" : "", " ").concat(appendTitleParentClass ? appendTitleParentClass : ""), children: [(0, jsx_runtime_1.jsx)("span", { className: mainTitleStyle, children: mainTitle }), (0, jsx_runtime_1.jsx)("span", { className: subTitleStyle, children: subTitle })] })] }), trailing && (0, jsx_runtime_1.jsx)("div", { className: "flex", children: trailing })] }));
}
