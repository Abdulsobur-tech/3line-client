"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UntitleUI;
var jsx_runtime_1 = require("react/jsx-runtime");
var tab_1 = __importDefault(require("../components/tab"));
var Home_svg_1 = __importDefault(require("../assets/Home.svg"));
var Dashboard_svg_1 = __importDefault(require("../assets/Dashboard.svg"));
var Projects_svg_1 = __importDefault(require("../assets/Projects.svg"));
var check_square_svg_1 = __importDefault(require("../assets/check-square.svg"));
var Reporting_svg_1 = __importDefault(require("../assets/Reporting.svg"));
var Settings_svg_1 = __importDefault(require("../assets/Settings.svg"));
var Users_svg_1 = __importDefault(require("../assets/Users.svg"));
var Support_svg_1 = __importDefault(require("../assets/Support.svg"));
var settings_1 = __importDefault(require("./settings/settings"));
function UntitleUI() {
    var tabs = [
        {
            title: "Home",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab home" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Home_svg_1.default, alt: "home icon", className: "m-2" }),
        },
        {
            title: "Dashboard",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab dasboard" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Dashboard_svg_1.default, alt: "Dashboard icon", className: "m-2" }),
        },
        {
            title: "Projects",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab projects" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Projects_svg_1.default, alt: "Project icon", className: "m-2" }),
        },
        {
            title: "Tasks",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab tasks" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: check_square_svg_1.default, alt: "Task icon", className: "m-2" }),
        },
        {
            title: "Reporting",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab report" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Reporting_svg_1.default, alt: "Reporting icon", className: "m-2" }),
        },
        {
            title: "Users",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab Users" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Users_svg_1.default, alt: "Users icon", className: "m-2" }),
        },
        {
            title: "Support",
            content: (0, jsx_runtime_1.jsx)("div", { children: "This is the content for Tab Support" }),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Support_svg_1.default, alt: "Support icon", className: "m-2" }),
        },
        {
            title: "Settings",
            content: (0, jsx_runtime_1.jsx)(settings_1.default, {}),
            icon: (0, jsx_runtime_1.jsx)("img", { src: Settings_svg_1.default, alt: "Setting icon", className: "m-2" }),
        },
    ];
    return ((0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)(tab_1.default, { tabs: tabs }) }));
}
