# bank-simulation-system
Just practice to do transactions system

# Основна ідея системи
Економічна симуляція з гравцями, які мають баланси, можуть купувати/продавати товари на ринку.
## Базові ентиті (PostgreSQL)

- users — користувачі, першочергово - гравці (агенти)

- products — товари, якими можна торгувати (в майбутньому конкретизуємо)

- market_offers — пропозиції купівлі/продажу 

- transactions — історія транзакцій

- wallets — баланс гравця (можна окремо від users для гнучкості)
## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```