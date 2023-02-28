import React, { useRef, useState } from 'react'

const Form = () => {
   const[title,setTitle]=useState("");
   const[description,setDescription]=useState("");
   const[status,setStatus]=useState("");
   const[dueDate,setdueDate]=useState("");
   const options = ['Acive', 'Pending', 'delay', 'completed'];

   const handleClick=async(e)=>{
    e.preventDefault();

    const res=await fetch("/",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            description,
            status,
            dueDate
        })
        
    });
    const data =res.json();
    console.log(data);
    
   }


  return (
   <div className="container mx-auto">
    <div className="pt-20 flex justify-center items-center ">
        <form action="" method="post">
        <input type="text" name='title' value={title}  onChange={(e)=>{setTitle(e.target.value)}}  placeholder="Enter title"/>
        <input type="text" name='description' value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter descrition"/>
        <select name="select" onChange={(e)=>{setStatus(e.target.value)}}>
            <option value="">Please choose option</option>
                {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
        </select>
        <input type="Date" name='dueDate'  onChange={(e)=>{setdueDate(e.target.value)}} />       
         <input type="submit" onClick={handleClick} />
        </form>
    </div>
   </div>
    
  )
}

export default Form