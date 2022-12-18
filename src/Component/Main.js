import React, { useState } from 'react'

const Main = () => {

    const [num, setNum] = useState(0)

    const incre=()=>{
        setNum(num+1);
    }

    const decre=()=>{
        if(num>0){
            setNum(num-1);

        }
        else{
            alert("no is reached to 0")
        }
    }

  return (
    <>
    <p style={{marginLeft:"40px"}}>{num}</p>
    <button onClick={incre}>Increment</button>
    <button onClick={decre}>Decrement</button>
    </>
  )
}

export default Main