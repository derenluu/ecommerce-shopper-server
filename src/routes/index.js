import express from 'express';
import upload from '~/middlewares/multer';
import uploadController from '~/controllers/uploadController';

// const registerAPIs = require('./registerRoutes');
// const StatusCodes = require('http-status-codes');

const Router = express.Router();

// Router.post('/upload', (req, res) => {
//   res.status(StatusCodes.OK).json('Upload successfully');
// });
Router.post('/upload', upload.single('image'), uploadController);

// Router.get('/status', (req, res) => {});
// Router.use('/register', registerAPIs);
// Router.use('/user', userAPIs);

export const RouterAPIs = Router;
