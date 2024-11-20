import React, {useState} from "react";

const trafficLight = () => {
     const [ color, setColor] = useState("red");
     
     
     return (
         <div className="traffic-light bg-dark">
            <div 
            onClick={() => setColor("red")}
            className={"light red " + (color === "red" ? "glow" : "")}>
            </div> 
            
            <div 
            onClick={() => setColor("yellow")}
            className={"light yellow " + (color === "yellow" ? "glow" : "")}> 
            </div>
            
            <div 
            onClick={() => setColor("green")}
            className= {"light green " + (color === "green" ? "glow" : "")}>
            </div>
        </div>
             
         
     );  
 };
 export default trafficLight;
