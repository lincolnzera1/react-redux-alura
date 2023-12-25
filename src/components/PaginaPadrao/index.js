import Navbar from "components/Navbar";
import styles from "./PaginaPadrao.module.scss";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

export default function PaginaPadrao() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
