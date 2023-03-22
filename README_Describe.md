**โครงสร้างโปรเจค**
# 1.folder ต่างๆ
node_module - เก็บข้อมูลโมดูลหรือไลบรารี่ที่ทำงานภายในโปรเจคของเรา
public - เก็บไฟล์ public ต่างๆเช่น รูปภาพ เเละ index.html เป็นต้น
src - สำหรับเก็บ component หรือโครงสร้างของแอพพลิเคชั่น
package.json - เก็บข้อมูลต่างๆรวมถึง packgage ที่จะใช้ทำงานภายในโปรเจค

# 2.file ต่างๆ
2.1 /Public/Index.html 
เป็นไฟล์ที่ใช้สำหรับการแสดงผลข้อมูลบนบราเซอร์ จะรันผ่านไฟล์ Index.html สิ่งที่เราสนใขใน Index.html ก็คือ คำสั่งส่วนที่อยู่ใน <body> ตรงส่วนของ <div id = ""></div>
2.2 /Src/App.js
เป็นไฟล์หลักในการรันแอพขึ้นมา โดยนำส่วนประกอบต่างๆมาประกอบกันแล้วนำไปแสดงผลในบราวเซอร์ หรืออาจเรียกว่า component app
***เพิ่มเติม***
- component คือ ส่วนประกอบต่างๆที่ถูกนำมาประกอบรวมกันเป็นหน้าเว็บ(คล้ายๆสร้าง tag ขึ้นมาใช้เองเช่น <Mook/>)
- state คือ ข้อมูลที่อยู่ภายใน component แต่ละตัว
- Props คือ ข้อมูลที่ถูกส่งจาก component (แนวคิดมาจากการกำหนด Attribute หรือ Properties ใน HTML)
  
# ReactDOM Render HTML
เมื่อหน้าเว็บโหลดเสร็จเรียบร้อย Web Breowser มันจะสร้าง DOM ของหน้านั้นขึ้นมาโดยมอง HTML เป็นโครงสร้างต้นไม้(ก้อน Object )หรือเรียกว่า DOM (Document Object Model)

# ReactDOM 
เป็นไลบรารี่เหมือนกับ react ทำหน้าที่เฉพาะในการจัดการกับ DON และใช้เฉพาะกับ React เท่านั้น
คำสั่ง ReactDOM.render() จะทำการสร้าง DOM(Virtual DOM) ที่มีลักษณะของโครงสร้างต้นไม้ แล้วนำโครงสร้างดังกล่าวใส่ลงไปยัง DOM จริงๆ (Real DOM) ซึ่งเป็นวิธีการในการ render jsx ออกมาแสดงผลทั้งหน้าจอยกตัวอย่างเช่น  
ReactDOM.render(<p>Hello World</p>,document.getElementById(‘root’)); 
หรือ 
const data = (
<div>
	<h1>MookPrath</h1>
</div>
);
ReactDOM.render(data,document.getElementById(‘root’)); 

## Virtual DOM
การทำงานของ Virtual DOM มีลักษณะคล้ายๆกับ DOM ใน HTML โดย Virtual DOM จะทำการคัด ลอก DOM จริงๆ(Real DOM) มาเก็บลงใน memory ถ้ามีการเปลี่ยนแปลงเกิดขึ้นที่ component  ก็จะอัพเดทเฉพาะ component ที่เปลี่ยนแปลงเท่านั้น โดยไม่จำเป็นต้องอัพเดท DOM  ใหม่หมดทั้งหน้า ทำให้เกิดการทำงานได้อย่างรวดเร็ว
**ถ้าใช้ DOM แบบปกติจะรีเฟรชทั้งหน้าเพื่ออัพเดทหน้าเว็บที่เปลี่ยนแปลงไป** 

# การสร้าง Component 
ใน react การสร้างหน้าเว็บขึ้นมาได้นั้นจะใช้สิ่งที่เรียกว่า component โดย component คือส่วนย่อยแต่ละส่วนของหน้าเว็บที่นำมาประกอบกัน โดยจะเขียนด้วยภาษา JavaScript เพื่อทำหน้าตาแต่ละส่วนของเว็บ หรือส่วนย่อยนั้นๆ มาแทนที่จะเขียนใน HTML แทน
**แต่ใน react จะไม่เขียน HTML ใน HTML แต่จะเขียนใน JavaScript แทน** ซึ่งจะใช้ส่วนที่เรียกว่า JSX(JavaScript XML) ที่ทำให้ใส่ HTML เข้าไปเขียนใน JavaScript ได้ ดังนั้น React คือ การสร้างหน้าเว็บด้วยภาษา JavaScript ที่มี HTML แทรกอยู่ ก็คือ JSX นั่นเอง
**สามารถสร้างได้ 2 รูปแบบ**
1. Class Component
สร้าง Class ที่ extends มาจาก React.Component และ Return HTML ออกมา แต่ถ้าสร้างแบบคลาส จะมีความสามารถในการใช้งานมากกว่าแบบ Functional
class HelloComponent extends React.Component{
    render(){
        return<h1> Hi React!</h1>
    }
}
ReactDOM.render(<HelloComponent/>,document.getElementById(‘root’)); 
2. Functional Component
เป็นรูปแบบฟังกันธรรมดา และ Return HTML ออกมาโดย "กำหนดให้ตัวอักษรตัวแรงของชื่อฟังชัน เป็นตัวพิมใหญ่เสมอ" เช่น
function HelloComponrnt(){
    return<h1> Say Hi!! </h1>;
}
ReactDOM.render(<HelloComponent/>,document.getElementById(‘root’)); 
***โดยทั้งคู่จะ Return HTML ออกมาและเขียน JSX  ด้านในส่วนของการ Return***
3.External Component เพิ่มเติม
การสร้าง Component ไว้เป็นไฟล์ด้านนอกที่มีนามสกุล .js จากนั้นก็นำเข้ามาทำงานในหน้าเว็บ
funtion HelloComponent(){
    return<h1> Hi External Component! </h1>
}
export default HelloComponent

## React JSX
รูปแบบการเขียน JSX
- สามารถเขียนใน <div>/ section / article / Fragment / <> และต้องมีการกำหนด Tag เปิด-ปิด ทุกครั้ง
- การใส่ Class Style ที่เป็น Attribute ใน JSX จะมีการกำหนด className แทน class เนื่องจากคำว่า class เป็น Keyword
1. รูปแบบการเขียน <div>
function HelloComponent(){
        return(
                <div>
                        <div><h3>Hi react!</h3></div>
                </div>
        )
}
2. รูปแบบการเขียน section / article
function HelloComponent(){
        return(
                <section>
                        <article><h3> Hi react!</h3></article>
                </section>
        )
}
3. รูปแบบการเขียน Fragment
function HelloComponent(){
        return(
                <React.Fragment>
                        <div><h3>Hi react!</h3></div>
                </React.Fragment>
        )
}
4. รูปแบบการเขียน Fragment แบบ <>
function HelloComponent(){
        return(
                <>
                <div><h3> Hi react! </h3></div>        
                </>
        )
}

# React Properties
Prop(Properties) คือ ตัวแปรที่สามารถส่งเข้าไปใน component ได้ผ่านการกำหนด attribute ส่งผลให้ component แต่ละตัวสามารถรับค่าจากด้านนอกเข้าไปทำงานได้
***โครงสร้างการเขียน***
<ชื่อcomponent ชื่อProperties = ค่าที่กำหนดให้Properties/> ex.<Item title ="ค่ารักษาพยาบาล" amount="2000"/> สามารถกำหนดพรอบเพอตี้ได้มากกว่าหนึ่ง

## Props Destructuring 
แปลงโครงสร้างของตัว properties ที่ส่งมา เพื่อที่จะนำเอา properties ที่ส่งมาไปเก็บในตัวแปร แล้วนำตัวแปรพวกนั้นไปแสดงผลอีกที
***สำคัญคือต้องสร้างตัวแปรขึ้นมา ตามจำนวน properties เช่น***
const Item =(props)=>{
    const{title,amount} = props; //เก็บค่าที่ส่งมาจาก Props ในตัวแปร {title,amount}
    return( 
        <li>{title}<span>-{amount}</span></li> //แล้วนำมาแสดงผล
    );
} 

## Props & Array Map
วนลูปสมาชิกใน array แทนการกำหนดค่าแทน โดยการทำ Array Map
const Transactions =()=>{
    const data=[
        {title:"ค่ารักษาพยาบาล", amount:2000},
        {title:"ค่าอาหาร", amount:5000},
        {title:"เงินเดือน", amount:20000}      
    ]
    return(
        <ul className='item-list'>
            {data.map((element)=>{
                return<Item title ={element.title} amount={element.amount}/>
            })}
        </ul>
    );
}

## Props & Spread operator
ยุบคำสั่ง <Item title ={element.title} amount={element.amount}/> ให้เป็นคำสั่งเดียวได้
 return<Item{...element}/>

## Key Props
***จะขึ้นแจ้งเตือน Warning: Each child in a list should have a unique "key" prop.***
เพราะว่า Keys เป็นPropertiesที่อยู่ใน JSX โดย Keys จะมีค่าไม่ซ้ำกัน กำหนดขึ้นเพื่อให้ React นำไปเช็คว่ามี Component ใดบ้างที่เปลี่ยนแปลงค่าไปในการ Render หน้าเว็บ
const Transactions =()=>{
    const data=[
        {id:1,title:"ค่ารักษาพยาบาล", amount:2000},
        {id:2,title:"ค่าอาหาร", amount:5000},
        {id:3,title:"เงินเดือน", amount:20000}      
    ]
    return(
        <ul className='item-list'>
            {data.map((element)=>{
                return<Item {...element} key={element.id}/>
            })}
        </ul>
    );
}

## Key Props UUID(Universally unique idetifier)
- npm install uuid
- import { v4 as uuidv4 } from 'uuid';
***วิธีการใช้งาน***
import { v4 as uuidv4 } from 'uuid';
const Transactions =()=>{
    const data=[
        {title:"ค่ารักษาพยาบาล", amount:2000},
        {title:"ค่าอาหาร", amount:5000},
        {title:"เงินเดือน", amount:20000}      
    ]
    return(
        <ul className='item-list'>
            {data.map((element)=>{
                return<Item {...element} key={uuidv4()}/>
            })}
        </ul>
    );
}
export default Transactions

## React PropsType(Validation) 
เป็นการประกาศรูปแบบหรือชนิดของ Properties ที่ส่งเข้าไปทำงานใน component เช่น กำหนดชนิดข้อมูลของ Properties หรือ บังคับให้ต้องกำหนดค่า Properties ทุกครั้งที่มีการเรียกใช้งาน component เป็นต้น
***เพิ่มเติม ทำการกรองข้อมูล เพื่อตรวจสอบข้อมูลใน Properties และความถูกต้องของชนิดข้อมูล ป้องกันข้อมูลผิดประเภท***
- npm install prop-types
หลักการใช้งาน
ชื่อComponent.propsTypes={
    ชื่อProperties: รูปแบบPropertie
}
//Example Proptype
import PropTypes from 'prop-types'; // ES6

/* ทำการประกาศ properties ใน parameter ได้ เช่น const Item =(props)=>{} และต้องทำการเรียกใช้*/
const Item =(props)=>{
    const{title,amount} = props;
    return(
        /*<li>{name}<span>-{amount}</span></li>*/
        <li>{title}<span>{amount}</span></li>
    );
}

Item.propTypes={
    title: PropTypes.string.isRequired, //isRequired คือการบังคับให้ผู้ใช้ป้อนค่าทุกครั้ง ห้ามว่าง
    amount: PropTypes.number.isRequired
}

export default Item

# State
State คือ ตัวแปรที่เก็บข้อมูลภายใน component คล้ายๆกับ Props แต่การใช้งาน Props นั้น ***ข้อมูลจะไม่สามารถเปลี่ยนแปลงค่าได้ แต่ state สามารถทำได้*** ฉะนั้นถ้าต้องการให้ข้อมูลภายในแอพสามารถเปลี่ยนแปลงค่าได้ได้ในระหว่างรันแอพก้จะใช้ State ซึ่งรูปแบบเดิมจะเขียนภายใน Class Component
- stateless คือ state ที่ไม่มีการเปลี่ยนแปลงค่า
- stateful คือ state ที่มีการเปลี่ยนแปลงค่า

**React Hook** เข้ามาช่วยจัดการข้อมูลภายในแอพ
็Hook is a feature in react version 16.8 up ใช้สำหรับจัดการเกี่ยวกับ state หรือ ฟีเจอร์ต่างๆที่อยู่ภายใน react โดยที่ไม่ต้องเขียนภายใน class component แต่จะเขียนใน Functional Component แทน
~ การใช้งาน 
1. เขียนใน Functional Component
2. เขียนในส่วนของ Top-Level ของ Function(อย่าเขียนใน Condition,Loop,Nested Function นอกจากจะแยกออกมาเขียน Custom Hook)
***ตัวอย่าง React Hook***
1. useState จัดการกับ state
2. useEffect
3. useReducer
4. useContext
5. useMemo
6. useCallBack
***การทำงาน***
import{useState} from 'react'
[ชื่อ state , functionที่ใช้เปลี่ยนแปลงข้อมูลในstate]=useState(ค่าเริ่มต้นของState ที่เก็บในตัวแปร)
---ตัวอย่าง---
const[name,setName]=useState('MookProject') //setName คือฟังชันที่เป็นตัวกำหนดตัวข้อมูลที่อยุ่ในสเตจ
const[age,setAge]=useState(30)
~ จะได้ array ที่ Destructuring จาก useState

## Children to parent หรือ Bottom to up
- คือการส่งข้อมูลจากล่างขึ้นบน จาก parent --> Child และ child --> parent
- เช่น App.js(parent) --> ส่งข้อมูลไปหา Transaction(child) และ FormComponent(child) โดยที่ Transaction ก็มี Item เป็นลูกต่ออีก
***FormComponent(Bottom-Up) ส่งข้อมูลไปให้ App ที่เป็น parent ได้*** 

# useEffect(Effect คือ ผลกระทบ)
- useEffect คือ ผลกระทบที่เกิดขึ้นภายใน component ใช้เพื่อต้องการทราบว่าเกิดการอัพเดทหรือเปลี่ยนแปลงอะไรขึ้นบ้างภายใน Component ***จนส่งผลให้ component เกิดการ render ใหม่*** โดยสาเหตุหลักๆที่component render ใหม่จะมาจากการเปลี่ยนแปลงค่าที่อยู่ภายใน props และ state นั่นเอง
- การใช้งาน useEffect จึงนำมาใช้งานเพื่อตรวจสอบการเปลี่ยนแปลงที่เกิดขึ้นภายใน application ของเราว่ามีข้อมูลใดบ้างที่เปลี่ยนแปลงไป ***จากค่าหนึ่งไปสู่อีกค่าหนึ่ง*** จนส่งผลให้ render component ใหม่อีกครั้ง

# Context API(Global State)
- ในกรณีที่ต้องการอยากให้แอพของเรามีข้อมูลกลาง และอยากให้มีการแชร์ข้อมูลเกิดขึ้นภายใน component จะทำอย่างไร เช่น ต้องการให้ทุกๆ component สามารถเข้าถึงข้อมูลชุดเดียวกันได้ โดยที่ไม่ต้องใช้รูปแบบส่งข้อมูลจาก Component แม่ไปยัง component ลูก(properties)
- มี 2 องค์ประกอบคือ 
2.1 Provider(parent) ดูแลและจัดการข้อมูลแล้วนำไปส่งให้ Consumer
2.2 Consumer(children) นำข้อมูลที่ได้จาก Provider ไปสร้างหรือแสดงผลใน Component
- ยกตัวอย่างให้เข้าใจง่ายๆ เช่น เขียนป้ายบอกเมนูอาหาร(component) <--- แม่ค้า(Consumer) <--- พ่อครัว(Providerเป็นคนคอยจัดการดูแลข้อมูล) <--- เมนูอาหาร(data)
***Provider ในที่นี้จะอยู่ใน app.js***
//เริ่มแรกทำการสร้างไฟล์ DataContext เป็นเมนูอาหารรอให้ provider มาเรียกใช้งาน
import { createContext } from "react"; 
const DataContext = createContext() //สร้างเมนูอาหารเพื่อให้ provider เรียกใช้งาน
export default DataContext

//ทำการ import ในไฟล์ app.js และเรียกใช้งาน DataContext
import DataContext from "./components/data/DataContext";
function App() {
  const design = {color:'red', textAlign:'center',fontSize:'1.5rem'}
  const[items,setItem] = useState([])
  const onAddNewItem = (newItem) =>{
  //console.log("ข้อมูลที่ส่งมาจาก Form component = ",newItem)
  setItem((previousItem)=>{
    return[newItem,...previousItem]
    })  
  }
  return (
    <DataContext.Provider value="kaimook">
      <div className='container'>            
        <h1 style={design}>โปรแกรมบันทึกรายรับ-รายจ่าย</h1>
        <FromComponent onAddItem = {onAddNewItem}/>
        <Transactions items ={items}/>
      </div>
    </DataContext.Provider>
  );
}

//การนำไปเรียกใช้งานใน component อื่นๆ เช่น transaction.js
import DataContext from "./data/DataContext";
import { useContext } from "react";

const Transactions =(props)=>{
    const {items} = props
    const name = useContext(DataContext) //ประกาศ {usecontext ข้างบนละเรียกใช้ได้เลย} โดยเก็บค่าในตัวแปร name
    return(
        <div>
            <ul className='item-list'>
            {items.map((element)=>{
                return<Item {...element} key={element.id}/>
            })}
        </ul>
        {name}
        </div>
    );
}
export default Transactions

# Context API(Multiple value) 
สามารถส่งข้อมูลได้หลายค่า ส่งไปแบบเป็นก้อน object ได้และภายใน obj ก็จะเก็บได้ค่าหลายๆค่า โดยระบุส่วนค่าดังกล่าวโดยเรียกว่า key กับ value
- ยกตัวอย่าง ในไฟล์ App.js
return (
    <DataContext.Provider value={
      {
        income:50000, {/*ก้อน object ที่เก็บค่าระบุ Key:value*/}
        expense:8000      
      }
    }>
      <div className='container'>            
        <h1 style={design}>โปรแกรมบันทึกรายรับ-รายจ่าย</h1>
        <FromComponent onAddItem = {onAddNewItem}/>
        <Transactions items ={items}/>
      </div>
    </DataContext.Provider>
  ); 
*** เรียกใช้งานได้สองแบบคือผ่าน consumer และ usecontext ***
1.เรียกใช้งานผ่าน consumer
import { useContext } from "react";
import DataContext from "./data/DataContext";

const ReportComponent=()=>{
    return(
        <div>
            <DataContext.Consumer>
                {context => <p>รายรับ: {context.income} รายจ่าย: {context.expense}</p>} {/* เรียกใช้ข้อมูลที่ส่งมาจาก provider ข้อมูลที่ส่งมาคือ value */}
            </DataContext.Consumer>        
        </div>
    )
}

export default ReportComponent
2.เรียกใช้งานผ่าน usecontext
import { useContext } from "react";
import DataContext from "./data/DataContext";

const ReportComponent=()=>{
    const{income,expense} = useContext(DataContext) //มันเป็นก้อน object เลยต้องทำการสลายโครงสร้าง object ละเก็บในตัวแปร
    return(
        <div>
            <p>รายรับ: {income}</p> {/* เรียกใช้ข้อมูลที่ส่งมาจาก provider ข้อมูลที่ส่งมาคือ value */}
            <p>รายจ่าย: {expense}</p>        
        </div>
    )
}  
3.เพิ่มเติม ถ้าต้องการจะดึงมาใช้งานใน transaction
import Item from "./Item";
import './Transaction.css'
import DataContext from "./data/DataContext";
import { useContext } from "react";

const Transactions =(props)=>{
    const {items} = props
    const {income,expense} = useContext(DataContext) //ประกาศ {usecontext ข้างบนละเรียกใช้ได้เลย} โดยเก็บค่าในตัวแปร name
    return(
        <div>
            <ul className='item-list'>
            {items.map((element)=>{
                return<Item {...element} key={element.id}/>
            })}
        </ul>
        <p>รายรับ: {income}</p> {/* เรียกใช้ข้อมูลที่ส่งมาจาก provider ข้อมูลที่ส่งมาคือ value */}
        <p>รายจ่าย: {expense}</p> 
        </div>
    );
}
export default Transactions

# คำนวณรายรัย-รายจ่ายในแอพ
- หาผลรวมจาก item.js โดยใช้ amount คิดผลรวม ไปแสดงใน ReportComponent โดยสร้าง state => income , expense มาไว้ที่ app.js
const[reportIncome,setReportIncome] = useState(0)
const[reportExpense,setReportExpense] = useState(0)
- สร้าง initState มาเก็บข้อมูลรายรับ รายจ่าย
const initState =[
    {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
    {id:2,title:"เงินเดือน",amount:12000},
    {id:3,title:"ค่าเดินทาง",amount:-400},
    {id:4,title:"ขายของ",amount:3000},
  ]
  const[items,setItem] = useState(initState)
- นำ useEffect มาใช้เพื่อเช็คว่ามีการเปลี่ยนแปลงภายใน item.js เพราะมีการเปลี่ยนแปลงตลอดเวลา
  //ทำการกรองข้อมูลโดยตรวจดูว่าสมาชิกใน array amount มีค่าใดบ้างที่เป็น บวก หรือค่าที่มากกว่าศูนย์ให้ดึงมาทำงาน
useEffect(()=>{
    const amounts = items.map(item => item.amount)
    const income = amounts.filter(element=>element>0) //array income ตัวนี้จะเก็บค่าบวก  
    const expense = amounts.filter(element=>element<0) //array expense ตัวนี้จะเก็บค่าลบ  
    console.log("รายได้ = ",income)
    console.log("รายจ่าย = ",expense)
  },[items])
- ใช้งาน reduce โดยต้องมีการกำหนดข้อมูลตัวนึงคือ result เอาไว้เก็บผลการคำนวณข้อมูลสมาชิกใน income ว่ามีผลรวมเท่าไหร่
const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)
- นำข้อมูลไปเก็บใน state
  useEffect(()=>{
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0) //array income ตัวนี้จะเก็บค่าบวก  
    const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0) //array expense ตัวนี้จะเก็บค่าลบ  
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense]) 
- ต่อไปโยนข้อมูลสองตัวนี้ที่เก็บ state นำเอาไปทำงานใน reportComponent โดยอ้างอิงข้อมูลที่อยู่ใน state reportIncome,reportExpense  
<DataContext.Provider value={
      {
        income:reportIncome,
        expense:reportExpense        
      }
    }

# ตกแต่ง ReportComponent 

# UseReducer
***เป็นการจัดการ state ในรูปแบบของ Redux(style)***
โดยทั่วไป state สามารถอ่านค่าได้อย่างเดียว ถ้าต้องการอยากจะเปลี่ยนแปลงค่า state จะใช้ useReducer โดยการกำหนดรูปแบบการกระทำที่เกิดขึ้นกับ state ของเราผ่านส่วนที่เรียกว่า Action
//import useReducer
import { useState,useEffect,useReducer } from "react";

//reducer state จะบอกว่าสเตจที่เราทำงานอยู่มีแอคชั่นอะไรบ้าง
    const [count,setCount] =  useState(0) //สร้าง reducer state
    const reducer = (state,action) =>{ //state คือ state ที่เราต้องการให้เกิด action , action คือรูปแบบการกระทำที่กระทะต่อ state
      switch(sction){ //ใช้ switch case มาแยกประเภท action ที่เกิดขึ้น
        case "ADD" : //เรียก action ผ่าน reducer โดย reducer จะเป็นตัวบอกว่า state ที่เราทำงานมี action อะไรอยู่
          return state+1
        case "SUB" :
          return state-1
        case "CLEAR" :
          return 0
      }
    } 
//การเรียกใช้ reducer โดยใช้ react hook: useReducer โดยตัวรีดิวเซอร์จะส่งค่ากลับออกมาสองค่า
const [result,dispatch] = useReducer(reducer,count) //ตัวแรกระบุ reducer ตัวสองระบุสเตจที่เราจะทำงานด้วย dispatch จะเป็นตัวเรียก action

//เรียกส่วนพวกนี้ว่า action
    <div>  
    <p>{result}</p> 
    <button onClick={()=>dispatch({type:"ADD"})}>เพิ่ม</button>
    <button onClick={()=>dispatch({type:"SUB"})}>ลด</button>
    <button onClick={()=>dispatch({type:"CLEAR"})}>ล้างข้อมูล</button>
    </div>

//นำมาปรับใช้กับการซ่อนยอดคงเหลือ
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
      <h1>{result}</h1>
      <button onClick={()=>dispatch({type:"SHOW"})}>Show</button>
      <button onClick={()=>dispatch({type:"HIDE"})}>Hide</button>
      </div>
    </DataContext.Provider>
    
  );

# React Router
การพัฒนาแอพด้วย react ประกอบไปด้วยการแสดงผลมากกว่า 1 หน้าจอ การที่จะทำให้ผู้ใช้งานไปยังส่วนการแสดงผลต่างๆที่เกิดขึ้นจากการใช้งาน Component ในแอพ เราจะใช้ส่วนที่เรียกว่า "Route การสร้างเส้นทาง" แบบสมัยก่อนจะใช้ลิ้งค์แนบ ละกดเด้งไปหน้าอื่นๆ แต่ใน react จะใช้วิธีนี้
- การติดตั้ง
npm install react-router-dom
1. การสร้าง Router/Route เพื่อกำหนดเส้นทางการเข้าถึง Component ของการกำหนด Path
2. สร้าง switch ในการเปลี่ยนเส้นทางการเข้าถึง Component
3. กำหนด Link เพื่อเชื่อมโยง Path กับ Component

