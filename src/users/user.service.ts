import { Service } from 'typedi'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Service()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async save(user) {
        return await this.userRepository.save(user)
    }
    async get(name) {
        return await this.userRepository.find({ firstName: name })
    }
}