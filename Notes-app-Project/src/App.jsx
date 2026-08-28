import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';



const App = () => {
const [title, setTitle] = useState('') 
const [details, setDetails] = useState('')

const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(title,details)

    const workTask = [...task]

    workTask.push({title,details})

    setTask(workTask)
    console.log(workTask);
    
    
    setTitle('')
    setDetails('')
  }

  const deleteNote =(idx) =>{
    const workTask = [...task]
    // console.log(workTask[idx]);
    workTask.splice(idx,1)

    setTask(workTask)
    
  }

  return (
    <div className='h-screen  lg:flex bg-black text-white'>
      <form onSubmit={(e) =>{
        submitHandler(e)
      }}

      className='flex p-10 lg: w-1/2 gap-4 flex-col items-start'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
      
        <input 
        type='text' 
        placeholder='Enter notes Heading'
        className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
        value={title}
        onChange={(e) => {
           setTitle(e.target.value)
        }}
        />

        <textarea 
        type='text'  
        placeholder='Write details'
        className='px-5 h-30 py-2 w-full border-2 font-medium outline-none rounded'
        value={details}
        onChange={(e) =>{
          setDetails(e.target.value)
          // console.log(e.target.value)
        }}
        />
        

        <button className='bg-white w-full active:bg-gray-400  active:scale-95 text-black outline-none px-5 py-2 rounded'>Add Notes</button>
        {/* <img className='h-60' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbXfQpqB0f6eKPLkI5nq5hOZhu6KsJRHwpF_s_4XUPw&s=10"></img> */}
      
      </form>
      
      <div className='lg: w-full lg:border-l-2 p-10'>
        
        <h1 className='text-3xl font-bold'>Recets notes</h1>
       
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
       
        {task.map(function(elem,idx){

          return <div key ={idx} className=" flex justify-between flex-col items-start relative h-52 w-42 rounded-2xl py-9 pb-4 px-5 text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
            {/*<h2 className='absolute top-5 right-1 active:scale9 bg-red-500 p-0.3 rounded-full text-xs'><X /></h2> */}
            <div>
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight text-xs font-medium text-gray-500'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }}
            className='bg-red-600 w-full py-1 rounded cursor-pointer active:scale-95 font-bold text-white text-xs'>Delete</button>
          </div>
        })}
       
        </div>

      </div>
    </div>
  )
}

export default App
