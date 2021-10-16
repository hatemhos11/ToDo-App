import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Item from './Item'
import '../styles/Items.css'

const Items = () => {
  const [filterCat, setFilterCat] = useState('')
  const blocks = useSelector(state => state.TodosReducer)
  const CatReducer = useSelector(state => state.CatReducer)

  function filtering(cat){
    let FilteredBlock;
    if(cat === '') {
      FilteredBlock = blocks
    }else{
      FilteredBlock = blocks.filter((block) => block.category === cat )
    }
    return FilteredBlock
  }
  return (
    <div className='container'>
      {/* Filter Blocks */}
      <select className='selectFilter' value={filterCat} onChange={(e) => setFilterCat(e.target.value)}>
        <option value='' >All Todos</option>
        {CatReducer.map((b) => {
          return <option key={Math.random()} value={b}> {b} </option>
        })}
      </select>
      
      

      {/* pinned items */}
      <div style={{textAlign:'center',color:'#ddd'}}>{blocks.find((b)=> b.isPin) && filterCat === '' ? 'Pinned' : ''}</div>
      <div className='row'>
        {filtering(filterCat).map((block) => block.isPin === true ? <Item block={block} key={block.id}/> : null) }
      </div>

        {blocks.find((b)=> b.isPin) && filterCat === ''? <div className='border-sibarate'></div> : null}
      {/* unpinned items */}
      <div className='row'>
        {filtering(filterCat).length > 0 ? filtering(filterCat).map((block) => block.isPin === false ? <Item block={block} key={block.id}/> : null)
        : <h2 style={{textAlign:'center', color:'#ddd' , marginTop:'8px'}} >No Tasks...</h2>
        }
      </div>
    </div>
  )
}

export default Items
