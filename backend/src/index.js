const express = require('express')
const {uuid} = require('uuidv4')

const app = express();
app.use(express.json());

const projects = [];

function logRequests(req, res, next) {
   const {method, url} = req;

   const logLabel = `[${method.toUpperCase()}] ${url}`
   console.count('️\n#️⃣ ')
   console.log(`📃 ${logLabel}`)
   console.time(`⏱`)
   next();
   console.timeEnd(`⏱`)

}

function validateId(req, res, next) {
   const {id} = req.params;

   if (!isUuid()) {
      return res.json({error:'Invalid project ID.'});
   };
   
   return next();
}

app.use(logRequests)

app.get('/projects', (req, res) => {
   const {title} = req.query

   const results = title
      ? projects.filter(project => project.title.includes(title))
      : projects;
   // Verificando a existência de projetos. Caso não exista retorna um erro.
   if (projects[0] === undefined) {
      return res.status(404).json({eror: 'Projects not found'})
   }

   // Retornando Projetos
   return res.json(results)
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
   };

   const project = {
      title, 
      owner
   };
   projects[projectIndex] = project;

   return res.json(project);
});

app.delete('/projects/:id', (req, res) => {
   const {id} = req.params;

   if (projectIndex < 0) {
      return res.status(404).json({eror: `Project with id ${id} not found`})
   };

   projects.splice(projectIndex, 1);

   return res.status(200).send();
});

app.listen(3333, () => {
   console.log('👷 Backend started!');
});