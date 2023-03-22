/*ปรับหน้าตาแอพในนี้ component App*/
import Transactions from "./components/Transaction";
import FromComponent from "./components/FormComponent";
import "./App.css"
import { useState,useEffect,useReducer } from "react";
import DataContext from "./components/data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { element } from "prop-types";

//สร้าง component โดยใช้ arrow function
// const Title =()=><h1>โปรแกรมบันทึกรายรับ-รายจ่าย</h1>

function App() {
  const design = {color:'red', textAlign:'center',fontSize:'1.5rem'}
  
  // const initState =[
  //   {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
  //   {id:2,title:"เงินเดือน",amount:12000},
  //   {id:3,title:"ค่าเดินทาง",amount:-400},
  //   {id:4,title:"ขายของ",amount:3000}
  // ]
  const[items,setItems] = useState([])

  const[reportIncome,setReportIncome] = useState(0)
  const[reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem) =>{
  //console.log("ข้อมูลที่ส่งมาจาก Form component = ",newItem)
    setItems((previousItem)=>{
      return[newItem,...previousItem]
      })  
    }
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0) //array income ตัวนี้จะเก็บค่าบวก  
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1 //array expense ตัวนี้จะเก็บค่าลบ  
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])
    // console.log("รายได้ = ",income)
    // console.log("รายจ่าย = ",expense)

    //reducer state จะบอกว่าสเตจที่เราทำงานอยู่มีแอคชั่นอะไรบ้าง
    const [showReport,setShowReport] =  useState(false) //สร้าง reducer state
    const reducer = (state,action) =>{ //state คือ state ที่เราต้องการให้เกิด action , action คือรูปแบบการกระทำที่กระทะต่อ state
      switch(action.type){ //ใช้ switch case มาแยกประเภท action ที่เกิดขึ้น
        case "SHOW" : //เรียก action ผ่าน reducer โดย reducer จะเป็นตัวบอกว่า state ที่เราทำงานมี action อะไรอยู่
          return setShowReport(true)
        case "HIDE" :
          return setShowReport(false)
      }
    } 
    //การเรียกใช้ reducer โดยใช้ react hook: useReducer
    const [result,dispatch] = useReducer(reducer,showReport)//ตัวแรกระบุ reducer ตัวสองระบุสเตจที่เราจะทำงานด้วย
  return (
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:reportExpense        
      }
    }>
      <div className='container'>           
        <h1 style={design}>โปรแกรมบันทึกรายรับ-รายจ่าย</h1>
        {showReport && <ReportComponent/>}
        <FromComponent onAddItem = {onAddNewItem}/>
        <Transactions items ={items}/>  
      {/* <h1>{result}</h1>
      <button onClick={()=>dispatch({type:"SHOW"})}>Show</button>
      <button onClick={()=>dispatch({type:"HIDE"})}>Hide</button> */}
      </div>
    </DataContext.Provider>
    
  );
}

export default App;
