import { assignments } from '../models/assignmentDB';
import express from 'express';

const routes = express.Router();

routes.get( '/', ( req, res ) => {
    res.render( 'index' );
} );

routes.get( '/', ( req, res ) => {
    res.render( 'homepage', assignments );
} );

export default routes;