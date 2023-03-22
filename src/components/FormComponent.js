import {useState,useEffect} from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';

const FromComponent =(props)=>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle =(event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault() //เพื่อไม่ให้เวลากรอกข้อมูลละจอมันจะไม่รีเฟรช
        const itemData ={
            id:uuidv4(),
            title: title,
            amount: Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('') //เมื่อเรากดเพิ่มข้อมูล ให้เคลียเป็นค่าเริ่มต้น
        setAmount(0)
    }

    useEffect(()=>{ 
        if(amount!==0){
            const checkData = title.trim().length > 0 && amount !==0
            setFormValid(checkData)
        }
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>

        </div>
    )
}

export default FromComponent