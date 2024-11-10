import ListItem from "../../components/ListItem";
import SettingTabs from "../../components/settingTab";
import Roles from "./roles/roles";

export default function Settings() {
  const tabs = [
    { label: "My details", content: <div>This is the content for Tab 1</div> },
    { label: "Profile", content: <div>This is the content for Tab 2</div> },
    { label: "Password", content: <div>This is the content for Tab 3</div> },
    { label: "Team", content: <div>This is the content for Tab 1</div> },
    { label: "Plan", content: <div>This is the content for Tab 2</div> },
    { label: "Roles", content: <Roles /> },
    {
      label: "Notifications",
      content: <div>This is the content for Tab 1</div>,
    },
    {
      label: "Integrations",
      content: <div>This is the content for Tab 2</div>,
    },
    { label: "API", content: <div>This is the content for Tab 3</div> },
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
