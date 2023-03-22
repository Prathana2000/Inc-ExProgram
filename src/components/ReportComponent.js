import { useContext } from "react";
import DataContext from "./data/DataContext";
import './ReportComponent.css';

const ReportComponent=()=>{
    const{income,expense} = useContext(DataContext) //มันเป็นก้อน object เลยต้องทำการสลายโครงสร้าง object ละเก็บในตัวแปร
    return(
        <div>
            <h4>ยอดคงเหลือ</h4>
            <h1>{income-expense}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report-income">{income}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report-expense">{expense}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent