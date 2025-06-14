import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
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
}
