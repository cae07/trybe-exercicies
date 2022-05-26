import express, { Request, Response} from 'express';

const app = express();

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
  res.send("express + TypeScript")
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
