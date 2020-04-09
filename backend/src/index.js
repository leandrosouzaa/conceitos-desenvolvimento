const express = require('express')
const {uuid} = require('uuidv4')

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
   // Verificando a existência de projetos. Caso não exista retorna um erro.
   if (projects[0] === undefined) {
      return res.status(404).json({eror: 'Projects not found'})
   }

   // Retornando Projetos
   return res.json(projects)
});

app.post('/projects', (req, res) => {
   const {title, owner} = req.body;

   const project = {id:uuid(), title, owner};

   projects.push(project);
   
   return res.json(project)
});

app.put('/projects/:id', (req, res) => {
   const {id} = req.params;

   const projectIndex = projects.findIndex(project => project.id = id);
   const {title = projects[projectIndex].title, owner = projects[projectIndex].owner} = req.body;

   if (projectIndex < 0) {
      return res.status(404).json({eror: `Project with id ${id} not found`})
   }

   const project = {
      title, 
      owner
   }
   projects[projectIndex] = project

   return res.json(project)
});

app.delete('/projects/:id', (req, res) => {
   return res.json(['Projeto 2', 'Project 3', 'Project 4'])
});

app.listen(3333, () => {
   console.log('👷 Backend started!');
});