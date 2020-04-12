import {Request, Response} from 'express'
import createUser from './services/CreateUser'

export default function helloWorld(req: Request, res:Response) {
   const user = createUser({
      email: 'leandror@dev.gmail.com',
      password: '123',
      techs: [
         'ReactJS',
         
         {
            title: 'Javascript',
            experience: 100
         }
      ]
   });
   
   return res.json({message:'Hello World'})
}