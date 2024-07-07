# Users CRUD on ExpressJS

## About

The functionality of the project is the same as in my
[users-crud](github.com/kvitee/users-crud) repo.
But this is implemented using Express.js.

## Configuration

Configuration variables are stored in `.env` file. `.template.env` is its template:

```sh
cp .template.env .env
```

Variables description:

- `PORT` - Port on which server will listen for requests. Default is `3000`.
- `PGHOST` - Hostname or address of Postgres server. Default is `127.0.0.1`.
- `PGPORT` - Port of Postgres server. Default is `5432`.
- `PGDATABASE` - Name of Postgres database. Default is name of user used
  to connect.
- `PGUSER` - User of Postgres which will be used to connect.
  Does not have default value and must be set.
- `PGPASSWORD` - Password for Postgres user. Does not have default value
  and must be set.

## Installation

Install dependencies:

```sh
npm i
```

Build project:

```sh
npm run build
```

Run server:

```sh
npm run start
```

### For development

Run server for development (nodemon will automatically restart it
after code change).

```sh
npm run dev
```

## API specification

### Create user

**Request**: `POST /users`.

Request body must contain a data of new user:

```js
{
  name: string,
  age: number
}
```

**Responses**:

- `201 User Created` - Returned if user was created successfully.
  Response body contains generated ID of created user:

  ```js
  {
    id: number
  }
  ```

- `422 Property Required` - Returned if request body does not contain
  enough data (name or age of user was not provided).

### Get all users

**Request**: `GET /users`.

**Response**: `200 OK`. Response body contains array with data of users:

```js
[
  {
    id: number,
    name: string,
    age: number
  },
  ...
]
```

### Get user by ID

**Request**: `GET /users/:id`, for example, `GET /users/123`.

**Responses**:

- `200 OK`. Response body contains data of requested user:

  ```js
  {
    id: number,
    name: string,
    age: number
  }
  ```

- `404 User Not Exist` - Returned if user with the given ID is not exist.

### Update user

**Request**: `PUT /users/:id`, for example, `PUT /users/123`.

Request body must contain a new data of user including those that
will not changed:

```js
{
  name: string,
  age: number
}
```

**Responses**:

- `204 User Updated` - Returned if user was updated successfully.

- `404 User Not Exist` - Returned if user with the given ID is not exist.

- `422 Property Required` - Returned if request body does not contain
  enough data (name or age of user was not provided).

### Delete user

**Request**: `DELETE /users/:id`, for example, `DELETE /users/123`.

**Responses**:

- `204 User Deleted` - Returned if user was deleted successfully.

- `404 User Not Exist` - Returned if user with the given ID is not exist.
