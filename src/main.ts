import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // then validator will strip validated object of any properties that do not have any decorators (ValidatorOptions)
            transform: true, // allow automatic transformation of incoming data (ValidationPipeOptions)
            transformOptions: {
                enableImplicitConversion: true, // enable transformation of data types (ClassTransformOptions)
            },
        }),
    );

    const configService = app.get(ConfigService);
    if (configService.get<string>('NODE_ENV') === 'development') {
        const config = new DocumentBuilder()
            .setTitle('economic simulation system documentation')
            .setDescription('Development API documentation for economic simulation system')
            .setVersion('1.0')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api-docs', app, document);
    }
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
