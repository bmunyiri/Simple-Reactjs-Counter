import React from 'react'
import MyCounter from './MyCounter'
import  CounterContextProvider  from './context/CounterContext'

const App = () => {
  return (

    <CounterContextProvider>
       <div>
           <MyCounter />
      </div>
      </CounterContextProvider>
  )
}

export default App
