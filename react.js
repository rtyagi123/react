import React from 'react';
import ReactDOM from 'react-dom/client';
/*
const parent=React.createElement("h1",{},"I am react");

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
*/


//react element
//const heading=(<h1>React in jsx</h1>);
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);


//react component-function

const Headingcomp2=()=>(
     <h1>I am second comp</h1>
);

const Headingcomp= ()=>(
    <div id="cont">
      <Headingcomp2/> 
      
      {Headingcomp2()}
      

       <h1>I am react component</h1>
    </div>   
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomp/>);

