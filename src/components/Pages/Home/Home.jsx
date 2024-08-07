import {React,useContext} from "react"
import { Header } from "../../Layouts/Header/Header"
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTasks/ContainerTasks";
import { ItemTask } from "../../ItemTask/ItemTask";
import { taskContext } from "../../Context/Context";
import {NewTask} from "../../NewTask/NewTask"
import { InfoTasks } from "../../Layouts/InfoTasks/InfoTasks";
import './Home.css'


export const Home = () => {
  
  const context= useContext(taskContext)
  return (
    <div className="home">

      <Header>
        <h1>Gestor De Tareas</h1>
      </Header>
      <div className="container">
        <div className="container-info-new"> 
          <NewTask/>
          <InfoTasks/>
        </div>
        <Main>
          <ContainerTasks>
            <h2>Tareas</h2>
            {
              context.filteredTasks.map(task => <ItemTask key={task.id} idTask={task.id} content={task.description} titleTask={task.title}></ItemTask>)
            }
          </ContainerTasks>
        </Main>
      </div>
    </div>
    
  )
}
