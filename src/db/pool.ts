import pgp from "pg-promise";
import dotenv from "dotenv";

dotenv.config();
// Инициализация опций
const initOptions = {
  // Обработка ошибок
  error(error: any, e: any) {
    if (e.cn) {
      console.error("CN:", e.cn);
      console.error("EVENT:", error.message || error);
    }
  },
};

// Конфигурация подключения
const cn = {
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_LOGIN,
  password: process.env.DB_PASSWORD,
};

// Создание экземпляра pg-promise
const pgpInstance = pgp(initOptions);
const db = pgpInstance(cn);

export { db };
