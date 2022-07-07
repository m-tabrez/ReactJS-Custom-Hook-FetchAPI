import React, {useEffect, useState} from 'react'

const useCounter = (forward = true) => {
  
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        const timer = setInterval( () => {
            if(forward){
                setCounter(preVal => preVal + 1)
            }else{
                setCounter(preVal => preVal - 1)
            }
            
        }, 1000)
        
        return () => { clearInterval(timer)}
    }, [forward])

    console.log(counter)

  return counter;
}

export default useCounter