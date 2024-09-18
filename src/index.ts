import express from "express";
import routes from "./routes/index";
import errorHandler from "./middlewares/errorHandler";
import { db } from "./db/pool";
import dotenv from "dotenv";

dotenv.config(); // Загрузка переменных окружения из .env файла

const app = express();
const port = process.env.PORT || 3010;

app.use(express.json());
// Динамическое подключение маршрутов с использованием for...of
for (const { path, router } of routes) {
  app.use(path, router);
}

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    errorHandler(err, req, res, next);
  },
);

async function checkDbConnection() {
  try {
    await db.any("SELECT 1"); // Простая проверка подключения
    console.log("Database connection successful.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Завершение работы сервера при ошибке подключения
  }
}

checkDbConnection().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
