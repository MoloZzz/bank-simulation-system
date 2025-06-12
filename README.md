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

- trades 

## *TradeEntity* з'єднує логіку:

- Хто з ким уклав угоду

- Яку пропозицію виконано

- Скільки продали

- По якій ціні

- З якою транзакцією пов’язано

## Загальна логіка роботи
Користувач має гаманці → в них кошти.

Гаманці надсилають один одному транзакції.

Є активи (AssetEntity) — це ресурси, предмети, тощо.

Користувачі можуть створювати пропозиції (MarketOfferEntity) на купівлю або продаж активів.

Інші можуть приймати ці пропозиції, ініціюючи:

- списання коштів (через TransactionEntity),

- оновлення MarketOfferEntity (кількість, статус),

- можливо — переміщення активу (якщо він персональний).

## Авторизація (JWT) настпуні кроки
- Логін (JWT генерація)

- Захист ендпоінтів (LoggedInGuard)

- Збереження токенів у Redis

- Refresh токени

- Email-інтеграція

- Forgot password (опційно)

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

## TypeORM instructions
* Create a new entity in [directory](/src/common/entities)
* Add a new entity to [import array](/src/common/entities/index.ts)
* Generate a new migration for this entity

```bash
$ yarn run typeorm:migration:generate ./src/common/migrations/{name}
# example
$ yarn run typeorm:migration:generate ./src/common/migrations/create-users
```