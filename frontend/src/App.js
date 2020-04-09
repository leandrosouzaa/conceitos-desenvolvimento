import React, {useState} from 'react';

import Header from './components/Header'

import './App.css'

export default function App() {
   const [projects, setProjects] = useState([])

   function handleAddProject() {
      setProjects([...projects, `Novo Projeto ${Date.now()}`]);
      console.log(projects)
   }
   return (
      <>
         <Header title="Projects"/>
         <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
         </ul>
         <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      </>
   )
}