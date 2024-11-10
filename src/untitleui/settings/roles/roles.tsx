import ListItem from "../../../components/ListItem";
import CustomRadioButton from "../../../components/checkRadioButton";
import Mail from "../../../assets/mail.svg";
import PaymentIcon from "../../../assets/PaymentIcon.svg";
import CheckButton from "../../../components/ceckButton";
import AddIcon from "../../../assets/AddIcon.svg";
import DownloadIcon from "../../../assets/Download.svg";
import Mark from "../../../assets/Mark.svg";
import ThreeUsers from "../../../assets/ThreeUsers.svg";
import FourUser from "../../../assets/FourUsers.svg";
import UsersAvatar from "../../../assets/UsersAvatar group.svg";
import { useState } from "react";
import BasicTable from "../../../components/basicTable";
export default function Roles() {
  const [addRole, setAddRole] = useState(false);

  const activeRoles = [
    {
      date: "Superadmin",
      activeDate: "Last active 06/2023",
      icon: <CheckButton />,
    },
    {
      date: "Developeradmin",
      activeDate: "Last active 01/2023",
      icon: <CheckButton />,
    },
    {
      date: "Supportadmin",
      activeDate: "Last active 10/2022",
      icon: <CheckButton />,
    },
  ];

  return (
    <div className="mt-5">
      <ListItem
        mainTitle={"User Roles"}
        mainTitleStyle={"text-[18px]"}
        subTitle={"Update your roles details and information."}
        subTitleStyle={"text-[14px] text-[#667085] mt-1"}
      />
      <div className="block sm:flex sm:flex-row sm:space-x-20">
        <div>
          <p className="text-[#344054] text-[14px] mt-5">Connected avatar</p>
          <p className="text-[#667085] text-[14px]">Select date account</p>
        </div>
        <div>
          <div className="mt-2 sm:m-5">
            <CustomRadioButton options={["My account avatar"]} />
            <p className="text-[14px] text-[#667085] ml-5">
              olivia@untitledui.com
            </p>
          </div>
          <div className="mt-2 sm:m-5">
            <CustomRadioButton options={["An alternative avatar"]} />
            <div className="mt-5">
              <div className="flex row space-x-2 border rounded-md border-gray-300 h-[2rem] w-[15rem] sm:w-[20rem] sm:h-[3rem] sm:ml-5 hover:border-[#D6BBFB] cursor-pointer">
                <img
                  src={Mail}
                  alt="messtype icon"
                  className="ml-5 w-5 h-5 sm:mt-3 mt-1"
                />
                <p className="sm:mt-2">billing@untitledui.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:flex sm:row sm:space-x-10">
        <div>
          <p className="text-[14px] mt-3 sm:mt-0">Active Role</p>
          <p className="text-[14px] text-[#667085]">
            Select active date available to the user.
          </p>
        </div>
        <div>
          {activeRoles.map((date, index) => {
            return (
              <div className="w-[2orem]  mt-3 sm:w-[50rem] h-[7rem] border rounded-md border-gray-100 hover:bg-[#F9F5FF] cursor-pointer">
                <ListItem
                  key={index}
                  leading={<img src={PaymentIcon} alt="payment icon" />}
                  mainTitle={date.date}
                  mainTitleStyle={"text-[14px] mt-5"}
                  subTitle={date.activeDate}
                  subTitleStyle={"text-[#7F56D9] text-[14px] mt-1"}
                  trailing={<div className="mr-3">{date.icon}</div>}
                />
                <div className="flex row m-3 space-x-5">
                  <p className="text-[14px] ml-8">Set as default</p>
                  <p className="text-[14px] text-[#6941C6]">Edit</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex justify-center items-center mr-[24rem] space-x-2 mt-5 hover:cursor-pointer"
        onClick={() => setAddRole(!addRole)}
      >
        <img src={AddIcon} alt="add icon" />
        <p className="text-[14px] text-[#667085]">Add date to user</p>
      </div>
      {addRole && (
        <div className="mt-5">
          <BasicTable
            columns={columns}
            data={data}
            heading={
              <div className="m-2">
                <ListItem
                  mainTitle={"User Roles"}
                  mainTitleStyle={"text-[#101828] text-[16px]"}
                  trailing={
                    <div className=" flex bg-[#FFFFFF] border rounded-md  w-24 h-8 hover:cursor-pointer hover:bg-slate-300">
                      <img
                        src={DownloadIcon}
                        alt="Download Icon"
                        className="ml-1  m-2"
                      />
                      <p className="text-[12px] m-1">Download</p>
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
      )}
    </div>
  );
}

const columns = [
  { title: "Name", key: "name" },
  { title: "Type", key: "type" },
  { title: "Date created", key: "date" },
  { title: "Status", key: "status" },
  { title: "Role users", key: "avatar" },
  { title: "", key: "actions" },
];

const data = [
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">DEFAULT</p>,
    avatar: <img src={UsersAvatar} alt="users" />,
    date: <p className="text-[#667085] text-[12px]">Jun 1, 2023</p>,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">DEFAULT</p>,

    date: <p className="text-[#667085] text-[12px]">Feb 1, 2023</p>,
    avatar: <img src={FourUser} alt="users" />,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">DEFAULT</p>,

    date: <p className="text-[#667085] text-[12px]">Mar 1, 2023</p>,
    avatar: <img src={ThreeUsers} alt="users" />,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">CUSTOM</p>,

    date: <p className="text-[#667085] text-[12px]">Feb 1, 2023</p>,
    avatar: <img src={UsersAvatar} alt="users" />,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">CUSTOM</p>,

    date: <p className="text-[#667085] text-[12px]">Apr 1, 2023</p>,
    avatar: <img src={ThreeUsers} alt="users" />,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">SYSTEM-CUSTOM</p>,

    date: <p className="text-[#667085] text-[12px]">Mar 1, 2023</p>,
    avatar: <img src={UsersAvatar} alt="users" />,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
  {
    name: (
      <ListItem
        leading={<CheckButton />}
        mainTitle={"Superadmin"}
        mainTitleStyle={"ml-2"}
      />
    ),
    type: <p className="text-[#667085] text-[14px]">SYSTEM-CUSTOM</p>,
    avatar: <img src={FourUser} alt="users" />,
    date: <p className="text-[#667085] text-[12px]">Apr 1, 2023</p>,
    status: (
      <div className="flex bg-[#ECFDF3] w-14">
        <img src={Mark} alt="" />
        <p className="text-[#027A48] text-[12px]">Active</p>
      </div>
    ),
    actions: (
      <img
        src={DownloadIcon}
        alt="Download Icon"
        className=" hover:cursor-pointer"
      />
    ),
  },
];
