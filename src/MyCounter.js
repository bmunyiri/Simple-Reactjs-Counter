import React, { useContext } from 'react'
import { CounterContext }  from './context/CounterContext';


const MyCounter = () => {

    const {count,setCount,HandleDecrease,HandleIncrease} = useContext(CounterContext)

     const Card = {
      color: "white",
      backgroundColor: "DodgerBlue",
      position: "absolute",
  width: "18em",
  height: "18em",
  top: "5%",
  left:" 30%" 
    };

    const header = {
        textAlign: "center",
         fontSize:"1.25em"
    }

        const MyStyle = {
        padding:"40px",
            textAlign: "center",
        fontSize:"2em"
    };
    

    const ButtonStyle = {
        padding:"10px",
        textAlign: "center"
    };

    const ButtonGroup = {
  marginLeft:"20%"
    }

    return (
      <div style={Card}>
        <div style={header}>Simple Counter</div>
            <p style={MyStyle}>{count}</p>
            <div style={ButtonGroup}>
            <button style={ButtonStyle} onClick={HandleIncrease}>Increase</button>
                <button style={ButtonStyle} onClick={HandleDecrease}>Decrease</button>
                </div>
            </div>
  )
}

export default MyCounter;