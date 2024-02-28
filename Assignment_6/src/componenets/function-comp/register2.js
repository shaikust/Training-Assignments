import React, { useState } from 'react'
import './register.css'

export default function Register2() {
  const [name,setName]=useState('')
  const[age,setAge]=useState('')
  const[company,setCompany]=useState('')
  const handleclick=(e)=>{
    
    e.preventDefault()
     const data={name,age,company}
    console.log(data)

  }
  return (
    <div>
        <h2>Register Here</h2>
        <form onSubmit={handleclick}>
        <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
    <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required value={age} onChange={(e)=>setAge(e.target.value)}></input>
    </div>
    <div>
        <label htmlFor="company">Company:</label>
        <input type="text" id="company" name="company" required value={company} onChange={(e)=>setCompany(e.target.value)}></input>
    </div>
    <button type="submit">Submit</button>
        </form>
        <div>
        <h3>Data:</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Company: {company}</p>
      </div>
      
    </div>
  )
}
