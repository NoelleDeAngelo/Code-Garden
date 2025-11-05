'use client'
import styles from "./reportBtn.module.css";
import { redirect } from "next/navigation";

const ReportBtn = () => {

  return <button className={styles.button}
    onClick={() => { redirect('/report') }}
  >Generate Report</button>
}

export default ReportBtn;