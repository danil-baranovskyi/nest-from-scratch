import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scryptSync } from 'crypto';

const CRYPT_KEY_LEN = 32;

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async signup(email: string, pass: string) {
    const users = await this.usersService.find(email);

    if (users.length) {
      throw new BadRequestException('Email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = scryptSync(pass, salt, CRYPT_KEY_LEN) as Buffer;

    const cryptoPass = salt + '.' + hash.toString('hex');

    return await this.usersService.create(email, cryptoPass);
  }

  async signin(email: string, pass: string) {
    const [user] = await this.usersService.find(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = scryptSync(pass, salt, CRYPT_KEY_LEN) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Wrong password');

    }

    return user;
  }
}
