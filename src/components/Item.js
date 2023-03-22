import PropTypes from 'prop-types'; // ES6
import './item.css'
import DataContext from './data/DataContext';
// import { useContext } from 'react';

/* ทำการประกาศ properties ใน parameter ได้ เช่น const Item =(props)=>{} และต้องทำการเรียกใช้*/
const Item =(props)=>{
    const{title,amount} = props;
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    // const name = useContext(DataContext)
    return(
        /*<li>{name}<span>-{amount}</span></li>*/
        <li className={status}>{title}<span>{symbol}{Math.abs(amount)}</span>
        {/* {name} */}
        </li>
        
    );
}

Item.propTypes={
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item