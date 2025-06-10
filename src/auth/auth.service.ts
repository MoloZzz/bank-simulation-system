import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/common/dto/auth/register.dto';

@Injectable()
export class AuthService {
    constructor() {}

    async register(data: RegisterDto) {
        throw new Error('Method not implemented.');
    }

    async login(email: string, password: string) {
        throw new Error('Method not implemented.');
    }
}
