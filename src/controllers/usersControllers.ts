import { Request, Response, NextFunction } from "express";
import Users from "../services/usersServices"; // Убедитесь, что имя соответствует
const users = new Users(); // Создание экземпляра класса

class usersController {
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await users.getUserById(req.params.id);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async listUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await users.getAllUsers();
      res.json(user);
    } catch (e) {
      next(e);
    }
  }
}

export default usersController;
