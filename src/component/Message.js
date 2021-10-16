import React from 'react'

const Message = (props) => {
  return (
    <div>
      <div style={{textAlign:'center', color: props.color }}>{props.Message}</div>
    </div>
  )
}

export default Message
