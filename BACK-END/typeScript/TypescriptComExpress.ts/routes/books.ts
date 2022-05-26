import { Router, Request, Response } from 'express';
import { read } from "../helpers";

const router = Router();

const NotFoundMessage = "Livro não encontrado.";

router.get("/books", async (req: Request, res: Response) => {
  const books = await read();

  return res.status(200).json(books);
});

router.get("/books/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;

  const books = await read();

  const book = books.find((book) => book.isbn === isbn);

  if (!book) return res.status(404).send(NotFoundMessage);

  return res.status(200).json(book);
});

router.post("/books", (req: Request, res: Response) => {

});

router.put("/books/:isbn", (req: Request, res: Response) => {

});

router.delete("/books/:isbn", (req: Request, res: Response) => {

});

export default router;
