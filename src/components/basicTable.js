"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var BasicTable = function (_a) {
    var columns = _a.columns, data = _a.data, heading = _a.heading;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "overflow-x-auto", children: [heading, (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full table-auto border-collapse", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map(function (column) { return ((0, jsx_runtime_1.jsx)("th", { className: "px-4 py-2 text-left border-b bg-gray-100 text-[#667085] text-[12px]", children: column.title }, column.key)); }) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: data.map(function (row, index) { return ((0, jsx_runtime_1.jsx)("tr", { className: "hover:bg-gray-50", children: columns.map(function (column) { return ((0, jsx_runtime_1.jsx)("td", { className: "px-4 py-5 border-b", children: row[column.key] }, column.key)); }) }, index)); }) })] })] }));
};
exports.default = BasicTable;
