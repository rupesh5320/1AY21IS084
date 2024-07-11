import React from "react";
import { fiboUrl } from "./Urls";
import { useState,useEffect } from "react";

const Fibonacci = () => {

    const [fibo,setFibo] = useState("");

    async function fetchData(){
        try{
          let response = await fetch(fiboUrl);
          let output = await response.json();
          setFibo(output);
        }
        catch(error){
          console.error('There is a fault in fetching data');
        }
    
      }
    
      useEffect( () => {
        fetchData();
      },[]);
    
     function ClickHandler(event){
        setFibo();
        console.log(fibo);
     }

    return(

     <div >

     <button onClick={ClickHandler} >
        Generate Fibonacci Number
    </button>
     </div>

    )

}

export default Fibonacci;