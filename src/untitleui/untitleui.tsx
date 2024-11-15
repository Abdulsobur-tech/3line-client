import Tabs from "../components/tab";
import Home from "../assets/Home.svg";
import Dashboard from "../assets/Dashboard.svg";
import Project from "../assets/Projects.svg";
import Task from "../assets/check-square.svg";
import Reporting from "../assets/Reporting.svg";
import Setting from "../assets/Settings.svg";
import Users from "../assets/Users.svg";
import Support from "../assets/Support.svg";
import Settings from "./settings/settings";

export default function UntitleUI() {
  const tabs = [
    {
      title: "Home",
      content: <div>Home: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Home} alt="home icon" className="m-2" />,
    },
    {
      title: "Dashboard",
      content: <div>Dashboard: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Dashboard} alt="Dashboard icon" className="m-2" />,
    },
    {
      title: "Projects",
      content: <div>Dashboard: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Project} alt="Project icon" className="m-2" />,
    },
    {
      title: "Tasks",
      content: <div>Tasks: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Task} alt="Task icon" className="m-2" />,
    },
    {
      title: "Reporting",
      content: <div>Reporting: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Reporting} alt="Reporting icon" className="m-2" />,
    },
    {
      title: "Users",
      content: <div>Users: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Users} alt="Users icon" className="m-2" />,
    },
    {
      title: "Support",
      content: <div>Support: Keep clicking the task is on Setting Tab</div>,
      icon: <img src={Support} alt="Support icon" className="m-2" />,
    },
    {
      title: "Settings",
      content: <Settings />,
      icon: <img src={Setting} alt="Setting icon" className="m-2" />,
    },
  ];
  return (
    <div className="">
      <Tabs tabs={tabs} />
    </div>
  );
}
