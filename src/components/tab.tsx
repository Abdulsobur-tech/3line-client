import { useState } from "react";
import ListItem from "./ListItem";
import User from "../assets/User.svg";
import Avatar from "../assets/Avatar.svg";
import Icon from "../assets/Icon.svg";
import Content from "../assets/Content.svg";
import Hambuger from "../assets/Hambuger.svg";
import SearchInput from "./searchInput";
interface TabProps {
  title: string;
  content: React.ReactNode;
  icon: JSX.Element;
}

const Tabs = ({ tabs }: { tabs: TabProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full flex">
      <div className="hidden lg:flex flex-col  mt-5 w-[20%] ml-3 space-y-2  border-gray-#FFFFFF">
        <ListItem
          mainTitle={"Untitle UI"}
          mainTitleStyle={"m-2"}
          leading={<img src={Content} alt="untitle ui" />}
          trailing={
            <div className="lg:hidden">
              <img src={Hambuger} onClick={toggleDropdown} />
            </div>
          }
        />
        {isDropdownOpen && (
          <div className="absolute top-8 right-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-10">
            <ul className="space-y-2 p-4">
              {tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setActiveTab(index);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-500"
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <SearchInput />
        {tabs.map((tab, index) => (
          <div className="hidden lg:flex">
            <ListItem
              leading={tab.icon}
              mainTitle={
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={` text-left text-[16px] ${
                    activeTab === index
                      ? "bg-[#F9FAFB]  font-semibold"
                      : "text-gray-500"
                  } hover:text-blue-600`}
                >
                  {tab.title}
                </button>
              }
            />
          </div>
        ))}
        <div className="w-[95.4%] h-[15rem] bg-[#F9FAFB]">
          <ListItem
            mainTitle={
              <div className="m-2">
                <p className="text-[14px] mb-1">New features available!</p>
                <p className="text-[14px] mb-2 text-[#667085]">
                  Check out the new dashboard view. Pages now load faster.{" "}
                </p>
                <img src={User} alt="user image" className="rounded" />
                <div className="flex row-auto space-x-5 mt-2">
                  <p className="text-[14px]">Dismiss</p>
                  <a href="#" className="text-[#6941C6] text-[14px]">
                    What’s new?
                  </a>
                </div>
              </div>
            }
          />
        </div>

        <div className="py-5">
          <ListItem
            leading={
              <div className="mr-1">
                <img src={Avatar} alt="user picture" className="" />
              </div>
            }
            mainTitle={"Olivia Rhye"}
            mainTitleStyle={"text-[14px]"}
            subTitle={"olivia@untitledui.com"}
            subTitleStyle="text-[10px]"
            trailing={
              <div>
                <img src={Icon} alt="icon" className=" mb-3" />
              </div>
            }
          />
        </div>
      </div>

      <div className="w-full h-full p-4 bg-[#F9FAFB]  rounded-r-lg">
        <div className="lg:hidden">
          <ListItem
            mainTitle={"Untitle UI"}
            mainTitleStyle={"m-2"}
            leading={<img src={Content} alt="untitle ui" />}
            trailing={
              <div className="lg:hidden hover:cursor-pointer">
                <img src={Hambuger} onClick={toggleDropdown} />
              </div>
            }
          />
        </div>
        {isDropdownOpen && (
          <div className="absolute top-8 right-0 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-10">
            <ul className="space-y-2 p-4">
              {tabs.map((tab, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setActiveTab(index);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left text-gray-700 hover:text-blue-500"
                  >
                    {tab.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
