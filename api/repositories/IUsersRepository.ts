import { Client } from '../entities/Client'

export interface IUserRepository {
  findByEmail(email: string): Promise<boolean>
  save(user: Client): Promise<boolean>
}
