
import {React,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amount=transactions.map((trans)=>{return trans.amount})
  const income=amount.filter((trans)=>trans>0).reduce((acc,init)=>(acc+=init),0).toFixed(2);
  const expense=(amount.filter((trans)=>trans<0).reduce((acc,init)=>(acc+=init),0)*-1).toFixed(2);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+Rs.{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-Rs.{expense}</p>
        </div>
      </div>
  )
}
