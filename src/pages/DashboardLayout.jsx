import { Outlet } from "react-router";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";

const DashboardLayout = () => {
  return (
    <div className="app">
      <TopBar />
      <div className="flex">
        <LeftBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
