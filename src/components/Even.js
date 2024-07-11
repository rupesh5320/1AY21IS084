import React from "react";
import { evenUrl } from "./Urls";
import { useState,useEffect } from "react";


const Even = () => {

    const [even,setEven] = useState("");

    async function fetchData(){
        try{
          let response = await fetch(evenUrl);
          let output = await response.json();
          setEven(output);
        }
        catch(error){
          console.error('There is a fault in fetching data');
        }
    
      }
    
      useEffect( () => {
        fetchData();
      },[]);
    
     function ClickHandler(event){
        useEffect( () => {
            fetchData();
          },[]);

        }  
     }

    return(

     <div >

     <button onClick={ClickHandler} >
        Generate Even Number
    </button>

    <div>
        {even}
    </div>
     </div>

    )



export default Even;