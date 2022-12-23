import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existUser = this.usersRepository.findByEmail(email);

    if (existUser) throw new Error("Usuario ja existe");

    const user = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
