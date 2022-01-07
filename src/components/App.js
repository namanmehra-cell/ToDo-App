import Header from './header';
import Footer from './footer';
import TextArea from './textarea';
import '../App.css';
import React,{useState} from 'react';


function App() {

  const [theme,setTheme] = useState("light")
  const [title,setTitle]= useState("Switch to Dark")
  const [inputText,setInputText]= useState("")
  const [items,setItem]  = useState([])

  function inputChange(event){
    setInputText(event.target.value)
  }

  function addInput(){
    setItem((prev)=>{
      return [...prev,inputText]
    });
    setInputText("")
  }

 
  function colorSet(){
    setTheme(
    ()=>{
      if(theme==="dark"){
        setTheme("light")
        setTitle("Switch To Dark")
        document.body.style.backgroundColor="white"
        
      }
      else{
        setTheme("dark")
        setTitle("Switch To Light")
        document.body.style.backgroundColor="#322F3D"
      }
}
    )
  }

  function deleteIt(id){
    setItem((prevValues)=>{
      return prevValues.filter(
        (itemInIt,index)=>{
          return index !== id

        }
      )
    })
  }

  return (

<>
<Header
theme={theme}
click={colorSet}
title={title}/>

<div className="container fix">
<div className="heading">
  <h1>To-Do List</h1>
</div>
<div className="form">
  <input name="tasks" value={inputText} onChange={inputChange} type="text" />
  <button onClick={addInput}>
    <span>Add</span>
  </button>
</div>
<div>
  <ul>
      {
        items.map((todoList,index)=>{
          return (
           <TextArea text={todoList} 
           key={index}
           id={index}
           onDouble={deleteIt}
           />
        )
        })
      }
  </ul>
</div>
</div>

<Footer theme={theme}/>

</>



  );


}

export default App;
