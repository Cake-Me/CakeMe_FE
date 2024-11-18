import React, { useState } from 'react';
import { SectionTabsContainer, TabButtonGroup, TabGroup, TabButton } from './CategoryTabs.style';

const CategoryTabs = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SectionTabsContainer>
      <TabButtonGroup>
        <TabGroup>
          {['생일', '연인', '친구', '부모님', '선생님'].map((tab) => (
            <TabButton
              key={tab}
              $isSelected={selectedTab === tab} // $ 사용으로 DOM 전달 방지
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabGroup>
        <TabGroup>
          {['X-mas', '졸업', '회사', '결혼', '아이'].map((tab) => (
            <TabButton
              key={tab}
              $isSelected={selectedTab === tab} // $ 사용으로 DOM 전달 방지
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabGroup>
      </TabButtonGroup>
    </SectionTabsContainer>
  );
};

export default CategoryTabs;
