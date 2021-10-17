import React from 'react'

const Error404 = (props) => {
  return (
    <div  style={{display:'grid', placeItems:'center',height:'100vh'}}>
      <img className='image404'  src="https://web.abijita.com/wp-content/uploads/2018/02/404-Error.png" alt="Page Not Found" />
      <button className='btn HomeBtn' onClick={() => props.history.push('/')}>Go Home</button>
    </div>
  )
}

export default Error404
