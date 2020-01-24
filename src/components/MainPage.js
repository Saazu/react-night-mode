import React from 'react';
import MainListView from './MainListView/MainListView';
import SideNavBar from './Sidebar/SideNavBar';
import { useTheme } from '../providers/useTheme';

const MainPage = () => {
  const { mode } = useTheme()
  return (
    <div className={"flex min-h-screen " + (mode === 'light' ? 'text-black' : 'text-white')}>
      <div className={"w-1/6 overflow-auto max-h-screen " + (mode === 'light' ? 'bg-sidebar-background-color-light' : 'bg-sidebar-background-color-dark')}>
        <SideNavBar />
      </div>
      <div className={"w-5/6 " + (mode === 'light' ? 'bg-list-view-background-color-light' : 'bg-list-view-background-color-dark')}>
        <MainListView />
      </div>
    </div>
  );
}

export default MainPage;