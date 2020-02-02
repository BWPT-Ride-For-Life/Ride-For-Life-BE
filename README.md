# Ride-For-Life-BE
---


## Deployed Server

The server is deployed to heroku at the url [https:\/\/ride-for-life-bw.herokuapp.com/](https://ride-for-life-bw.herokuapp.com/).

## Endpoints

### POST `/api/auth/register-driver`

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `name` | string | N/A |
| `location` | integer | Must reference the id of a location |
| `price` | integer | N/A |
| `email` | string | Must be unique to a single account |
| `password` | string | N/A |

Locations that's stored in database
--
| id | Location |
|----|----------|
| 1  | Kampala  |
| 2  | Nansana  |
| 3  | Kira     |


Possible Status Codes
* 201 - Successfully created driver
* 400 - Bad request (There will be a message field in the return type with more
    information about the error)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success the endpoint will return an object with a `token`, and `driver` inside. The token
should be saved to local storage, and sent with all further requests in the
request header as an `authorization`.

The user will match the following shape

| Key | Value type |
| --- | --- |
| `name` | string |
| `email` | string |

Example

```js

fetch('https://ride-for-life-bw.herokuapp.com/api/auth/register-driver', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Kevin',
    email: 'kevcarr@example.com',
    password: 'anunsafepassword',
    location: 1, // must choose 1, 2, or 3
    price: 100 // note that this currency is in shllings 
  })
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', JSON.stringify(data.token));

    // This is where you could redirect the user on a succesful register
    // ...
  })
  .catch(err => {
    // This is where you would handle any errors
  });

```

### POST `/api/auth/register-user`

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `name` | string | N/A |
| `email` | string | Must be unique to a single account |
| `password` | string | N/A |

Possible Status Codes
* 201 - Successfully created user
* 400 - Bad request (There will be a message field in the return type with more
    information about the error)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success the endpoint will return an object with a `token`, and `user` inside. The token
should be saved to local storage, and sent with all further requests in the
request header as an `authorization`.

The user will match the following shape

| Key | Value type |
| --- | --- |
| `name` | string |
| `email` | string |

Example

```js

fetch('https://ride-for-life-bw.herokuapp.com/api/auth/register-user', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Kevin',
    email: 'kevcarr@example.com',
    password: 'anunsafepassword',
  })
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', JSON.stringify(data.token));

    // This is where you could redirect the user on a succesful register
    // ...
  })
  .catch(err => {
    // This is where you would handle any errors
  });

```

### POST `/api/auth/login`

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `email` | string | N/A |
| `password` | string | N/A |

Possible Status Codes
* 201 - Successfully logged in
* 401 - Unauthorized (The username or password are incorrect)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success a `token` and a `user` object will be returned. 

The user will match the following shape.

| Key | Value type |
| --- | --- |
| `name` | string |
| `email` | string |

```js

// This example shows a what a successful login would look like
// assuming that a user with an email `kevcarr@example.com` exists
// and their password is `anunsafepassword`.
fetch('https://ride-for-life-bw.herokuapp.com/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    email: 'kevcarr@example.com',
    password: 'anunsafepassword',
  })
})
  .then(res => res.json())
  .then(data => {
    localStorage.setItem('token', JSON.stringify(data.token));

    // This is where you could redirect the user on a succesful login
    // ...
  })
  .catch(err => {
    // This is where you would handle any errors
  });

```
