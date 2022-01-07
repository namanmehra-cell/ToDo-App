import React,{useState} from "react"


export default function TextArea(props){

    const [isDone,setIsDone] = useState(false)

    function textDeco(){
        setIsDone(true)
    }
    
    return (
        <div onDoubleClick={()=>{
            props.onDouble(props.id)
        }} >
        <li onClick={textDeco} style={{textDecoration: isDone ? "line-through" : "none"}} >{props.text}</li>
        </div>
        
    )
                
           

    
}