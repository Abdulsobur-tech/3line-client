"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var search_svg_1 = __importDefault(require("../assets/search.svg"));
var SearchInput = function () {
    var _a = (0, react_1.useState)(""), inputValue = _a[0], setInputValue = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative w-full max-w-xs", children: [!inputValue && ((0, jsx_runtime_1.jsx)("span", { className: "absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none", children: (0, jsx_runtime_1.jsx)("img", { src: search_svg_1.default, alt: "search icon" }) })), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Olivia Rhye", value: inputValue, onChange: function (e) { return setInputValue(e.target.value); }, className: "w-[90%] pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm" })] }));
};
exports.default = SearchInput;
