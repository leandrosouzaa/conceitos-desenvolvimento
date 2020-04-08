const express = require('express')

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (req, res) => {
   
   // Verificando a existência de projetos. Caso não exista retorna um erro.
   if (projects) {
      return res.status(404).json({eror: 'Projects do not exist'})
   }

   // Retornando Projetos
   return res.json(projects)
});

app.post('/projects', (req, res) => {
   return res.json(['Projeto 1', 'Projeto 2', 'Project 3', 'Project 4'])
});

app.put('/projects/:id', (req, res) => {
   return res.json(['Projeto 5', 'Projeto 2', 'Project 3', 'Project 4'])
});

app.delete('/projects/:id', (req, res) => {
   return res.json(['Projeto 2', 'Project 3', 'Project 4'])
});

app.listen(3333, () => {
   console.log('👷 Backend started!');
});