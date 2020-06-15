import express from 'express';
import routes from './routes';
import path from 'path'
import cors from 'cors';
import {errors  } from 'celebrate'

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..','uploads')));

app.use(errors());

app.listen(3333);


    //Rota = endereço da requisição http://localhost:3333/users 
    //Recurso = entidade acessada (users) usado abaixo

    //Metodos HTTP >>>
    //GET: buscar informações no banco(back-end) no Insomnia : 
    //POST: criar uma nova informação no banco(back-end)
    //PUT: atualizar uma informação existente 
    //DELETE: remover uma informação 

    //No Insomnia >>
    //GET http://localhost:3333/users : lista todos os usuarios da lista 
    //GET http://localhost:3333/users/3 : busca o dado do usuario com id 3 
    //POST http://localhost:3333/users  : cria um novo usuario 



    //Parametros >>>
    //Request  param: solicitar um 'id' especifico da rota
    //Query param : buscar determinados dados na lista de usuarios
    //Request body : usado para criação/atualização de parametros

