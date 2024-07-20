import {React,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
     const {transactions} = useContext(GlobalContext);
     const amount=transactions.map((trans)=>{return trans.amount})
     const balanceAmount=amount.reduce((acc,init)=>(acc+=init),0).toFixed(2);
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1>Rs.{balanceAmount}</h1>
      </div>
  )
}
