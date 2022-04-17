import { useState } from "react"
export const Form =()=>{
    const[formData, setFormData]=useState({
        username :"",
        age :"",
        email:"",
        address:""
    });
    const handleChange=(e)=>{
        const[id, value]=e.target
            setFormData({
                ...formData,
                [id]:value
            });
           
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        fetch("http://localhost:8080/users",{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(formData)
                })
    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} id="username" type="text" placeholder="Enter text"/>
            <input onChange={handleChange} id="age" type="number" placeholder="Enter age"/>
            <input onChange={handleChange} id="email" type="text" placeholder="Enter email"/>
            <textarea onChange={handleChange} id="address" type="text" placeholder="Enter address"/>
            <input type="submit" value="submit" />
        </form>
    )
}