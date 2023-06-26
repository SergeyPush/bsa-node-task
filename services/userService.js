import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getAll() {
    return userRepository.getAll();
  }

  search(search) {
    const item = userRepository.getOne(search);

    if (!item) {
      return null;
    }
    return item;
  }

  createOne(body) {
    const item = userRepository.create(body);
    return item;
  }

  deleteOne(id) {
    userRepository.delete(id);
  }

  updateOne(id, body) {
    return userRepository.update(id, body);
  }
}

const userService = new UserService();

export { userService };
