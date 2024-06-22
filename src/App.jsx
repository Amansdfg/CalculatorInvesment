import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx"
import Result from "./components/Result.jsx";
import {useState} from "react";

function App(){
  const[userInput,setUserInput]=useState(
    {
        initialInvestment:1500,
        annualInvestment:500,
        expectedReturn:5.5,
        duration:10,
    }
   )
   const isValid=userInput.duration>=1;
   function change(name,newValue){
    setUserInput((prevUserInput=>{
        return{
            ...prevUserInput,
            [name]:+newValue
        }
    }))
   }
  return(
    <>
      <Header/>
      <Main change={change}/>
      {!isValid && <p className="center">Please enter a duration greater than zero</p>}
      {isValid&&<Result userInput={userInput}/>}
    </>
  )
}
export default App;