import React from "react"
import { Typography, Divider } from "@material-ui/core";


const Timer:React.FC = ()=>{

    const [time,setTime]=React.useState({minute:1,seconds:0})
    React.useEffect(()=>{
        const timer=setInterval(() => {
           if(time.seconds>0){
               setTime({...time,seconds:time.seconds-1})
           }
           if(time.seconds===0){
               if(time.minute===0){
                clearInterval(timer)
               }else{
                   setTime({minute:time.minute-1,seconds:59})
               }
           }
          }, 1000);

          return () => clearTimeout(timer);
    })
    return <> <Typography component="h1" variant="h5">
    { time.minute === 0 && time.seconds === 0
                    ? <>Busted!</>
                    : <>Time Remaining: {time.minute}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</>
                }
  </Typography> 

   </>
}

export default Timer