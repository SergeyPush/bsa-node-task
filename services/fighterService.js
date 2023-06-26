import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters

  getAll() {
    return fighterRepository.getAll();
  }

  getOne(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  createOne(body) {
    const fighter = fighterRepository.create(body);
    return fighter;
  }

  delteOne(id) {
    const fighter = fighterRepository.delete(id);
    return fighter;
  }

  updateOne(id, body) {
    return fighterRepository.update(id, body);
  }
}

const fighterService = new FighterService();

export { fighterService };
