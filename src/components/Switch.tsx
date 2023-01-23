import React, { useState} from "react";

export class SwitchProps {
}

export function Tabs({ children }) {
    function findActiveTab(a) {
        return a.reduce((accumulator, currentValue, i) => {
            if (currentValue.props.active) {
                return i;
            }

            return accumulator;
        }, 0);
    }

    function tabValidator(tab) {
        return tab.type.displayName === "Tab";
    }

    const [activeTab, setActiveTab] = useState(findActiveTab(children));
    return (
        <>
            <div className="flex gap-3 bg-slate-200 p-1 max-w-fit font-semibold rounded-lg">
                {children.map((item, i) => {
                    return (
                        <>
                            {tabValidator(item) && (
                                <Tab
                                    key={`tab-{i}`}
                                    currentTab={i}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                >
                                    {item.props.children}
                                </Tab>
                            )}
                        </>
                    );
                })}
            </div>
        </>
    );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
    return (
        <>
            <div
                className={`px-3 py-2 rounded-lg cursor-pointer relative
      ${activeTab === currentTab ? "bg-white text-violet-600" : "text-slate-600 hover:text-slate-800"}`}
                onClick={() => setActiveTab(currentTab)}
            >
                {children}
            </div>
        </>
    );
}

Tab.displayName = "Tab";

