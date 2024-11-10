"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CustomRadioButton = function (_a) {
    var options = _a.options;
    var _b = (0, react_1.useState)(null), selectedOption = _b[0], setSelectedOption = _b[1];
    var handleOptionClick = function (option) {
        setSelectedOption(function (prev) { return (prev === option ? null : option); });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "space-y-3", children: options.map(function (option) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2 cursor-pointer text-[14px]", onClick: function () { return handleOptionClick(option); }, children: [(0, jsx_runtime_1.jsx)("span", { className: "w-4 h-4 rounded-full border transition-colors duration-200 ".concat(selectedOption === option
                        ? "bg-[#7F56D9] border-[#7F56D9]"
                        : "bg-white border-gray-300") }), (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: option })] }, option)); }) }));
};
exports.default = CustomRadioButton;
