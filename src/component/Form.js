import React from 'react'



const Form = ({tasksName,setTasksName, category, setCategory, Categories ,handleAddNewTodo,inputTask,setinputTask,inp}) => {
  return (
    <div className='headTodoScr'>
      <div className='AddForm row'>
        <input className='inp inpAddress' type="text" placeholder='Address' value={tasksName} onChange={(e)=>setTasksName(e.target.value)} autoFocus/>
        <select className='selectFilter' name="cat" value={category} onChange={(e)=> setCategory(e.target.value)}>
          <option value="">Select Your Category</option>
          {Categories.map((C) => <option key={Math.random()} value={C} > {C} </option>) }
        </select>
      </div>
    
{/* FORM ADD NEW TODO */}
      <form className='formAddTodo' onSubmit={handleAddNewTodo}>
          <input 
            type="text" 
            className='inp inpAdd'
            placeholder='What needs to be done?'
            dir="auto"
            value={inputTask} 
            onChange={(e)=>setinputTask(e.target.value)} 
            ref={inp}/>
          <button type="submit" className='addBtn'>ADD</button>
        </form>
    </div>
  )
}

export default Form
