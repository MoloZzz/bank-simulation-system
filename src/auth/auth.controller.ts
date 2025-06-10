import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from 'src/common/dto/auth';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('login')
    @ApiOperation({ summary: 'User login' })
    async login(@Body() body: LoginDto) {
        return this.service.login(body.email, body.password);
    }

    @Post('register')
    @ApiOperation({ summary: 'User registration' })
    async register(@Body() body: RegisterDto) {
        return this.service.register(body);
    }
}
