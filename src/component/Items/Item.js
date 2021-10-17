import React, {useState} from 'react'
import { withRouter } from 'react-router'
import {useDispatch} from 'react-redux'
import FeatherIcon from 'feather-icons-react'
import {DeleteBlockFN , PinnedBlockFN} from '../../actions/TodosAct'

const Item = (props) => {
  
  const dispatch = useDispatch()
  const [IsPin, setIsPin] = useState(props.block.isPin)

  const handlePinBlock = ()=> {
    setIsPin(!IsPin)
    dispatch(PinnedBlockFN(props.block.id, !IsPin))
  }

  // Sound Effect when [ Open || Delete ]
  const openS = new Audio('./pop.mp3');
  const deleteS = new Audio('./trash.wav');
  const OpenItem = () => {
    openS.play()
    openS.currentTime = 0 
    props.history.push(('/Todo:'+props.block.id))
  }
  const deleteSound = () => {
    deleteS.play()
    deleteS.currentTime = 0
  }
  // ================================= RETURN ================================================
  return (
    <div className='item col-3-large'>
      <div className='viewTodos' onClick={(e) => e.target !== e.currentTarget ? null : OpenItem() }>

        {props.block.todoes.slice(0,6).map((T) => (
          <div className='ViewTodosText' key={Math.random()} >
            <FeatherIcon style={{color: T.done ? 'green' : '',marginRight:'5px'}} icon={T.done ? 'toggle-right': 'toggle-left'}/>
            <span>{T.todoText}</span>
          </div>
        ))}
        <div className='ViewTodosText' >...</div>
        {/* =============== icons */}
          <i title='Delete This Item' className='delBtn'><FeatherIcon icon='trash-2' onClick={(e)=>{
              dispatch(DeleteBlockFN(props.block.id))
              deleteSound() }}/>
          </i>
          <i title='Pin This Item' className='pinBtn'><FeatherIcon  icon={props.block.isPin ? 'lock' : 'unlock'} onClick={()=> handlePinBlock() } /></i>
      </div>
      <h3 className='item-name'>{props.block.name}</h3>
      <div>
        <div>{new Date(props.block.modify).toLocaleTimeString()}</div> 
        <div>{new Date(props.block.modify).toLocaleDateString()}</div> 
      </div>
    </div>
  )
}

export default withRouter(Item)
