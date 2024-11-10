import { useState } from "react";

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const SettingTabs = ({ tabs }: { tabs: TabProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mt-10">
      <div className="flex overflow-x-auto whitespace-nowrap max-w-full">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 min-w-[100px] py-2 text-center transition-all border rounded-sm bg-gray-100
              ${
                activeTab === index
                  ? " border-b-2 bg-gray-200 font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default SettingTabs;
