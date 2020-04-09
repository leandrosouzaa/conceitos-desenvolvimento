import React, {useState} from 'react';

import './App.css'

import Header from './components/Header';
import backgroundImage from './assets/background.png';


export default function App() {
   const [projects, setProjects] = useState([]);

   function handleAddProject() {
      setProjects([...projects, `Novo Projeto ${Date.now()}`]);
      console.log(projects);
   }
   return (
      <>
         <Header title="Projects"/>
         
         <img width={350} src={backgroundImage} alt="projects"/>

         <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
         </ul>
         <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
      </>
   )
}