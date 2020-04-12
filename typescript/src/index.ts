import express from 'express'

const app = express()

app.get('/', (req, res) => {
   return res.json({message: 'Ola Leandro'})
})



app.listen(3333, () => {
   console.log('👷 Backend Iniciado')
})
