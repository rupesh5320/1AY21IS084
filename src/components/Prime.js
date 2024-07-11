import React from "react";
import { primeUrl } from "./Urls";
import { useState,useEffect } from "react";

const Prime = () => {

    const [prime,setPrime] = useState("");

    async function fetchData(){
        try{
          let response = await fetch(primeUrl);
          let output = await response.json();
          setPrime(output);
        }
        catch(error){
          console.error('There is a fault in fetching data');
        }
    
      }
    
      useEffect( () => {
        fetchData();
      },[]);
    
     function ClickHandler(event){
        setPrime();
        console.log(prime);
     }

    return(

     <div >

     <button onClick={ClickHandler}
     className="flex justify-center items-center" >
        Generate Prime Number
    </button>
     </div>

    )

}

export default Prime;