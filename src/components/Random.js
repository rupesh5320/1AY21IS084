import React from "react";
import { randomUrl } from "./Urls";
import { useState,useEffect } from "react";

const Random = () => {

    const [random,setRandom] = useState("");

    async function fetchData(){
        try{
          let response = await fetch(randomUrl);
          let output = await response.json();
          setRandom(output);
        }
        catch(error){
          console.error('There is a fault in fetching data');
        }
    
      }
    
      useEffect( () => {
        fetchData();
      },[]);
    
     function ClickHandler(event){
        setRandom();
        console.log(random);
     }

    return(

     <div >

     <button onClick={ClickHandler} >
        Generate Random Number
    </button>
     </div>

    )

}

export default Random;