import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const [timer,settimer]=useState(0)
    const intervalref=useRef()

    useEffect(()=>{
        intervalref.current=setInterval(()=>{
            settimer(prevtimer=>prevtimer+1)
        },1000)
    
    return ()=>{
        clearInterval(intervalref.current)
    };
},[])

  return (
    <div>
        Hook Timer- {timer}
        <button onClick={()=> clearInterval(intervalref.current)}> clear time</button>
    </div>
  )
}

export default Ref;
