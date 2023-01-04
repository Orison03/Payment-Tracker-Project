import React, { useEffect } from 'react'

function Alert({msg,removeAlert,tracks}) {
    useEffect(()=>{
    const timeout = setTimeout(()=>{
       removeAlert()
       return () => clearTimeout(timeout)
    },4000)
    },[tracks])
  return (
    <>
      <h5 className="alert">{msg}</h5>
    </>
  );
}

export default Alert