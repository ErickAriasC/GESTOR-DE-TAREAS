import React,{useContext} from 'react'
import './FilterTasks.css'
import { taskContext } from '../Context/Context'
import { useContext } from 'react'

export const FilterTasks = () => {

  const context=useContext(taskContext)

  const handleFilters = (event)=>{
    let currentOption=event.target.value
    if(currentOption==='Pendientes'){
      context.setFilteredTasks(context.task.filter(task=>!task.status))
    }else if(currentOption==='Realizadas'){
        context.setFilteredTasks(context.task.filter(task=>task.status))
    }else{
      context.setFilteredTasks(context.task)

    }
  }


  return (
    <div className='container-filters'>
      <label>Filtrar Por</label>
      <select onChange={handleFilters}>
        <option value="Todas" className='opt opt1'>Todas</option>
        <option value="Pendientes" className='opt opt2'>Pendientes</option>
        <option value="Realizadas" className='opt opt3'>Realizadas</option>
      </select>
    </div>
  )
}
