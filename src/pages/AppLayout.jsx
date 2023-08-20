import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app_layout}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
