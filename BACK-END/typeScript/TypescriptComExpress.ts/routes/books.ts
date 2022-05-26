import { Router, Request, Response } from 'express';
import fs from 'fs/promises';
import Book from "../interfaces/Book";

const router = Router();

router.get("/books", async (req: Request, res: Response) => {
  const data = await fs.readFile("./books.json", "utf8");

  const books: Book[] = JSON.parse(data);

  return res.status(200).json(books);
});

router.get("/books/:isbn", (req: Request, res: Response) => {

});

router.post("/books", (req: Request, res: Response) => {

});

router.put("/books/:isbn", (req: Request, res: Response) => {

});

router.delete("/books/:isbn", (req: Request, res: Response) => {

});

export default router;
