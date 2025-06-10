import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    username: string;
}
