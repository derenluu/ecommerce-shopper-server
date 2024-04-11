import 'dotenv/config';

import exitHook from 'async-exit-hook';
import cors from 'cors';
import express from 'express';
import { env } from '~/configs/environment';
import { corsOptions } from '~/configs/cors';
import { CLOSE_DB, CONNECT_DB } from '~/configs/mongodb';
import { RouterAPIs } from '~/routes';
// import { createJWT } from './middlewares/jwtAction';

const START_SERVER = () => {
  const app = express();

  // Cấu hình CORS
  app.use(cors(corsOptions));

  // Cấu hình template engine
  // configViewEngine(app);

  // Enable req.body json data
  app.use(express.json());

  // Middlewares
  // app.use(errorHandlingMiddleware);

  app.use('/api', RouterAPIs);

  if (process.env.BUILD_MODE === 'production') {
    app.listen(env.APP_PORT, () => {
      console.log(`>>> Backend Server running successfully at PORT: ${env.APP_PORT}`);
    });
  } else {
    app.listen(env.APP_PORT, () => {
      console.log(
        `>>> Backend Server running successfully at: http://${env.APP_HOST}:${env.APP_PORT}`
      );
    });
  }

  exitHook(() => {
    console.log('>>> Backend Server is shuting down');
    CLOSE_DB();
    console.log('-> Disconnected from MongoDB');
  });
};

CONNECT_DB()
  .then(() => console.log('-> Connected to database MongoDB'))
  .then(() => START_SERVER())
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
