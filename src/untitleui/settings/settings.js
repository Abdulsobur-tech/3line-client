"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Settings;
var jsx_runtime_1 = require("react/jsx-runtime");
var ListItem_1 = __importDefault(require("../../components/ListItem"));
var settingTab_1 = __importDefault(require("../../components/settingTab"));
var roles_1 = __importDefault(require("./roles/roles"));
function Settings() {
    var tabs = [
        { label: "My details", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 1" }) },
        { label: "Profile", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 2" }) },
        { label: "Password", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 3" }) },
        { label: "Team", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 1" }) },
        { label: "Plan", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 2" }) },
        { label: "Roles", content: (0, jsx_runtime_1.jsx)(roles_1.default, {}) },
        {
            label: "Notifications",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 1" }),
        },
        {
            label: "Integrations",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 2" }),
        },
        { label: "API", content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab 3" }) },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "m-5", children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: "Settings", mainTitleStyle: "sm:text-[30px] text-[20px] font-bold", subTitle: "Manage your team and preferences here.", subTitleStyle: "text-[#667085] text-base sm:text-[14] text-[12px]" }), (0, jsx_runtime_1.jsx)("div", { className: "flex", children: (0, jsx_runtime_1.jsx)(settingTab_1.default, { tabs: tabs }) })] }));
}
