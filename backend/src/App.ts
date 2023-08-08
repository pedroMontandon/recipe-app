import * as express from 'express';
import router from './routes';
import * as cors from 'cors';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.app.get('/', (_req, res) => res.status(200).json('APP is runnning'));
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };
    
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: number | string): void {
    this.app.listen(PORT, () => console.log(`App is running in port ${PORT}`));
  }
}

const app = new App();

export { app };
