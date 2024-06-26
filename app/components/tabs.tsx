type Tab = {
  id: string;
  title: string;
  disabled?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  activeTabId?: string;
  className?: string;
  onValueChange?: (tabId: string) => void;
};

const Tabs = ({ tabs, activeTabId, onValueChange = () => {}, className = '' }: TabsProps) => {
  return (
    <div className={`tabs ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tabs_trigger ${activeTabId === tab.id ? 'active' : ''}`}
          disabled={tab.disabled === true}
          onClick={() => !tab.disabled && onValueChange(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
