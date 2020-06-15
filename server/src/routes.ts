import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import knex from './database/connection';
import PointController from './controllers/PointsControllers';
import ItemsController from  './controllers/ItemsControllers';
import {celebrate, Joi} from 'celebrate'

const routes = express.Router();
const upload = multer(multerConfig);


const itemsController = new ItemsController();
const pointController = new PointController();


routes.get('/items',itemsController.Index);



routes.get('/points',pointController.index);
//Index , show , create , Update , delete  >> Comandos para o pointController
routes.get('/points/:id',pointController.show);



routes.post(
    '/points',
     upload.single('image') ,
     celebrate({
         body: Joi.object().keys({
             name: Joi.string().required(),
             email : Joi.string().required().email(),
             whatsapp: Joi.number().required(),
             latitude: Joi.number().required(),
             longitude: Joi.number().required(),
             city : Joi.string().required(),
             uf : Joi.string().required().max(2),
             items : Joi.string().required(),

         })
     },{abortEarly: false}),
     pointController.create
     );

export default routes;