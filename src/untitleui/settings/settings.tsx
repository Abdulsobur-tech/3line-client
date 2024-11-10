import ListItem from "../../components/ListItem";
import SettingTabs from "../../components/settingTab";
import Roles from "./roles/roles";

export default function Settings() {
  const tabs = [
    {
      label: "My details",
      content: <div>My details: Keep clicking the task is on Roles Tab </div>,
    },
    {
      label: "Profile",
      content: <div>Profile: Keep clicking the task is on Roles Tab</div>,
    },
    {
      label: "Password",
      content: <div>Password: Keep clicking the task is on Roles Tab</div>,
    },
    {
      label: "Team",
      content: <div>Team: Keep clicking the task is on Roles Tab</div>,
    },
    {
      label: "Plan",
      content: <div>Plan: Keep clicking the task is on Roles Tab</div>,
    },
    { label: "Roles", content: <Roles /> },
    {
      label: "Notifications",
      content: <div>Notifications: Keep clicking the task is on Roles Tab</div>,
    },
    {
      label: "Integrations",
      content: <div>Integrations: Keep clicking the task is on Roles Tab</div>,
    },
    {
      label: "API",
      content: <div>API: Keep clicking the task is on Roles Tab</div>,
    },
  ];
  return (
    <div className="m-5">
      <ListItem
        mainTitle={"Settings"}
        mainTitleStyle={"sm:text-[30px] text-[20px] font-bold"}
        subTitle={"Manage your team and preferences here."}
        subTitleStyle={"text-[#667085] text-base sm:text-[14] text-[12px]"}
      />
      <div className="flex">
        <SettingTabs tabs={tabs} />
      </div>
    </div>
  );
}
