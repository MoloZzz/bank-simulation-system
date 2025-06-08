import * as Joi from 'joi';

export const validationSchema = Joi.object({
    PORT: Joi.number().required(),
    NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_DB_NAME: Joi.string().required(),
    POSTGRES_IS_LOGGING_ENABLED: Joi.string().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.number().required(),
    POSTGRES_PASS: Joi.string().required(),
});
