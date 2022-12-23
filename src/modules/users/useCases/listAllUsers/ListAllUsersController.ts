import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.headers.user_id as string;
    try {
      const list = this.listAllUsersUseCase.execute({ user_id: id });

      return response.status(200).json(list);
    } catch {
      return response.status(400).json({ error: "Usuario não é admin" });
    }
  }
}

export { ListAllUsersController };
