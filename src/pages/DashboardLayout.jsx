import { Outlet } from "react-router";
import LeftBar from "../components/LeftBar";
import TopBar from "../components/TopBar";

const DashboardLayout = () => {
  return (
    <div className="app">
      <TopBar />
      <div className="flex flex-col xs:flex-row xs:pl-0 pl-10">
        <LeftBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
