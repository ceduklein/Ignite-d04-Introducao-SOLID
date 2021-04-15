import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || user.admin === false) {
      throw new Error("Unauthorized user.");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
