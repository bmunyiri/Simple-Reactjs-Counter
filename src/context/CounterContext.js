import {useState, createContext} from 'react'

export const CounterContext = createContext();
 


 function CounterContextProvider(props) {

        const [ count, setCount ] = useState( 0 )

   const HandleIncrease = () => {
        setCount(count+5)
    }

  const HandleDecrease = () => {
        setCount(count-5)
    }

    const value={count,setCount,HandleDecrease,HandleIncrease}
    
    return (
        <CounterContext.Provider value={value}>
            {props.children}
       </CounterContext.Provider> 
    )
}

export default CounterContextProvider;









