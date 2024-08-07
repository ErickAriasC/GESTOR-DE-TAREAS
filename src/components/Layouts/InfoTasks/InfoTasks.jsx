import './infoTasks.css'
import { useContext, useEffect } from 'react'
import { taskContext } from '../../Context/Context'


export const InfoTasks = () => {

  const context =useContext(taskContext)

  useEffect(() => {
    
    let pending = context.tasks.filter(tasks=>tasks.status===false)
    let resolve = context.tasks.filter(tasks=>tasks.status===true)

    context.setPendingTasks(pending.length)
    context.setDoneTasks(resolve.length)
 
  }, [context.tasks])
  
  return(
    <>  
    <h2 className='resum-tasks'>Resumen Tareas</h2>
    <h2 className='info-tasks'><span className='task-pending'>{context.pendingTasks}</span><br></br> Pendientes<br></br> <br></br><span className='task-done'>{context.doneTasks}<br></br> </span>Terminadas</h2>  
    </>
  )
} 
