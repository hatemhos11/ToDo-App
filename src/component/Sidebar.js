import React, { useState,useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FeatherIcon from 'feather-icons-react'
import {AddCatFN, DeleteCatFN} from '../actions/catAct'
import Message from './Message'
import './styles/Sidebar.css'


const Sidebar = () => {
  const CatReducer = useSelector(state => state.CatReducer)
  const dispatch = useDispatch()
  
  const [ShowMsg, setShowMsg] = useState(false)
  const [toggleSide, setToggleSide] = useState(false)
  const [NewCategory, setNewCategory] = useState('')
  
  const successMsg =() =>{
    setShowMsg(true)
    
    setTimeout(() => {
      setShowMsg(false)
    }, 1500);
  }

  const handleChangeAddCat =(e) =>{
    e.preventDefault();
    if(NewCategory.trim() !== '' ){
      dispatch(AddCatFN(NewCategory))
      successMsg()
      setNewCategory('')
      
    }
    inp.current.focus()
  }
  const inp = useRef()
  return (
    <div className={toggleSide ? 'overlay' : ''} onClick={(e) => e.target === e.currentTarget ? setToggleSide(false) : null }>
      <div className={toggleSide ? 'sideShow Sidebar' : 'sideHide Sidebar'}  >
        <FeatherIcon className='burgerIcon' size='60px' icon={toggleSide ? 'x' : 'align-center'} onClick={() => setToggleSide(!toggleSide)} />
        {/* ADD NEW CATEGORY */}
        <h3>Add New Category</h3>
        <div className='AddCategory'>
          <i className='sideIcon addCatIcon'></i>
          <form onSubmit={handleChangeAddCat}>
            <input ref={inp} value={NewCategory} onChange={(e)=>setNewCategory(e.target.value)} type="text" autoFocus/>
            {ShowMsg ? <Message Message='A new category has been added' color="green"/>  : null}
            <input className='btn' type="submit" value='ADD' />
          </form>
        </div>

        <div className='border-sibarate'></div>
        {/* CATEGORIES CONTROL */}
        <h3>Categories</h3>
        <ul className='showCategories container'>
          {CatReducer.map((C, index) => (
            <li className='catControl' key={index}>
              <span>{C}</span> 
              <FeatherIcon className='trash' icon='trash-2' onClick={() => dispatch(DeleteCatFN(C))}/>
            </li> 
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar
