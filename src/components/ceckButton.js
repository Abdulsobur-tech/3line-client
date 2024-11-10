"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CheckButton = function () {
    var _a = (0, react_1.useState)(false), isChecked = _a[0], setIsChecked = _a[1];
    var handleClick = function () {
        setIsChecked(!isChecked);
    };
    return ((0, jsx_runtime_1.jsx)("button", { onClick: handleClick, className: "w-4 h-4 flex items-center justify-center rounded-full transition-colors duration-200 ".concat(isChecked
            ? "bg-[#7F56D9] text-white border "
            : "border border-[#7F56D9] text-transparent"), children: (0, jsx_runtime_1.jsx)("span", { className: "text-xs font-bold", children: isChecked ? "✓" : "" }) }));
};
exports.default = CheckButton;
