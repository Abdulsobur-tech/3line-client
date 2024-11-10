"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Roles;
var jsx_runtime_1 = require("react/jsx-runtime");
var ListItem_1 = __importDefault(require("../../../components/ListItem"));
var checkRadioButton_1 = __importDefault(require("../../../components/checkRadioButton"));
var mail_svg_1 = __importDefault(require("../../../assets/mail.svg"));
var PaymentIcon_svg_1 = __importDefault(require("../../../assets/PaymentIcon.svg"));
var ceckButton_1 = __importDefault(require("../../../components/ceckButton"));
var AddIcon_svg_1 = __importDefault(require("../../../assets/AddIcon.svg"));
var Download_svg_1 = __importDefault(require("../../../assets/Download.svg"));
var Mark_svg_1 = __importDefault(require("../../../assets/Mark.svg"));
var ThreeUsers_svg_1 = __importDefault(require("../../../assets/ThreeUsers.svg"));
var FourUsers_svg_1 = __importDefault(require("../../../assets/FourUsers.svg"));
var UsersAvatar_group_svg_1 = __importDefault(require("../../../assets/UsersAvatar group.svg"));
var react_1 = require("react");
var basicTable_1 = __importDefault(require("../../../components/basicTable"));
function Roles() {
    var _a = (0, react_1.useState)(false), addRole = _a[0], setAddRole = _a[1];
    var activeRoles = [
        {
            date: "Superadmin",
            activeDate: "Last active 06/2023",
            icon: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}),
        },
        {
            date: "Developeradmin",
            activeDate: "Last active 01/2023",
            icon: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}),
        },
        {
            date: "Supportadmin",
            activeDate: "Last active 10/2022",
            icon: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-5", children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: "User Roles", mainTitleStyle: "text-[18px]", subTitle: "Update your roles details and information.", subTitleStyle: "text-[14px] text-[#667085] mt-1" }), (0, jsx_runtime_1.jsxs)("div", { className: "block sm:flex sm:flex-row sm:space-x-20", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[#344054] text-[14px] mt-5", children: "Connected avatar" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "Select date account" })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "mt-2 sm:m-5", children: [(0, jsx_runtime_1.jsx)(checkRadioButton_1.default, { options: ["My account avatar"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-[14px] text-[#667085] ml-5", children: "olivia@untitledui.com" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 sm:m-5", children: [(0, jsx_runtime_1.jsx)(checkRadioButton_1.default, { options: ["An alternative avatar"] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-5", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex row space-x-2 border rounded-md border-gray-300 h-[2rem] w-[15rem] sm:w-[20rem] sm:h-[3rem] sm:ml-5 hover:border-[#D6BBFB] cursor-pointer", children: [(0, jsx_runtime_1.jsx)("img", { src: mail_svg_1.default, alt: "messtype icon", className: "ml-5 w-5 h-5 sm:mt-3 mt-1" }), (0, jsx_runtime_1.jsx)("p", { className: "sm:mt-2", children: "billing@untitledui.com" })] }) })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "block sm:flex sm:row sm:space-x-10", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[14px] mt-3 sm:mt-0", children: "Active Role" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[14px] text-[#667085]", children: "Select active date available to the user." })] }), (0, jsx_runtime_1.jsx)("div", { children: activeRoles.map(function (date, index) {
                            return ((0, jsx_runtime_1.jsxs)("div", { className: "w-[2orem]  mt-3 sm:w-[50rem] h-[7rem] border rounded-md border-gray-100 hover:bg-[#F9F5FF] cursor-pointer", children: [(0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)("img", { src: PaymentIcon_svg_1.default, alt: "payment icon" }), mainTitle: date.date, mainTitleStyle: "text-[14px] mt-5", subTitle: date.activeDate, subTitleStyle: "text-[#7F56D9] text-[14px] mt-1", trailing: (0, jsx_runtime_1.jsx)("div", { className: "mr-3", children: date.icon }) }, index), (0, jsx_runtime_1.jsxs)("div", { className: "flex row m-3 space-x-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[14px] ml-8", children: "Set as default" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[14px] text-[#6941C6]", children: "Edit" })] })] }));
                        }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center items-center mr-[24rem] space-x-2 mt-5 hover:cursor-pointer", onClick: function () { return setAddRole(!addRole); }, children: [(0, jsx_runtime_1.jsx)("img", { src: AddIcon_svg_1.default, alt: "add icon" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[14px] text-[#667085]", children: "Add date to user" })] }), addRole && ((0, jsx_runtime_1.jsx)("div", { className: "mt-5", children: (0, jsx_runtime_1.jsx)(basicTable_1.default, { columns: columns, data: data, heading: (0, jsx_runtime_1.jsx)("div", { className: "m-2", children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { mainTitle: "User Roles", mainTitleStyle: "text-[#101828] text-[16px]", trailing: (0, jsx_runtime_1.jsxs)("div", { className: " flex bg-[#FFFFFF] border rounded-md  w-24 h-8 hover:cursor-pointer hover:bg-slate-300", children: [(0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: "ml-1  m-2" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[12px] m-1", children: "Download" })] }) }) }) }) }))] }));
}
var columns = [
    { title: "Name", key: "name" },
    { title: "Type", key: "type" },
    { title: "Date created", key: "date" },
    { title: "Status", key: "status" },
    { title: "Role users", key: "avatar" },
    { title: "", key: "actions" },
];
var data = [
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "DEFAULT" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: UsersAvatar_group_svg_1.default, alt: "users" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Jun 1, 2023" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "DEFAULT" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Feb 1, 2023" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: FourUsers_svg_1.default, alt: "users" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "DEFAULT" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Mar 1, 2023" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: ThreeUsers_svg_1.default, alt: "users" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "CUSTOM" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Feb 1, 2023" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: UsersAvatar_group_svg_1.default, alt: "users" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "CUSTOM" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Apr 1, 2023" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: ThreeUsers_svg_1.default, alt: "users" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "SYSTEM-CUSTOM" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Mar 1, 2023" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: UsersAvatar_group_svg_1.default, alt: "users" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
    {
        name: ((0, jsx_runtime_1.jsx)(ListItem_1.default, { leading: (0, jsx_runtime_1.jsx)(ceckButton_1.default, {}), mainTitle: "Superadmin", mainTitleStyle: "ml-2" })),
        type: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[14px]", children: "SYSTEM-CUSTOM" }),
        avatar: (0, jsx_runtime_1.jsx)("img", { src: FourUsers_svg_1.default, alt: "users" }),
        date: (0, jsx_runtime_1.jsx)("p", { className: "text-[#667085] text-[12px]", children: "Apr 1, 2023" }),
        status: ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#ECFDF3] w-14", children: [(0, jsx_runtime_1.jsx)("img", { src: Mark_svg_1.default, alt: "" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[#027A48] text-[12px]", children: "Active" })] })),
        actions: ((0, jsx_runtime_1.jsx)("img", { src: Download_svg_1.default, alt: "Download Icon", className: " hover:cursor-pointer" })),
    },
];
