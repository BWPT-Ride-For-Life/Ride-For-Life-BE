# Ride-For-Life-BE
---


## Deployed Server

The server is deployed to heroku at the url [https:\/\/ride-for-life-bw.herokuapp.com/](https://ride-for-life-bw.herokuapp.com/).

## Endpoints

### POST `/api/auth/register-driver`

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `name` | string | Required |
| `location_id` | integer | Must reference the id of a location, Required |
| `phoneNumber` | string | N/A, Optional |
| `price` | integer | Required |
| `email` | string | Must be unique to a single account, Required |
| `password` | string | Required |

Locations currently stored in database
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

The driver will match the following shape

| Key | Value type |
| --- | --- |
| `id` | integer |
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
    location_id: 1, // must choose 1, 2, or 3
    price: 100, // note that this currency is in shllings 
    phoneNumber: 555-555-5555 // This is part of stretch. If implempted, this would have to be a working phone number. A fake number or null is okay for now. 
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
| `name` | string | Required |
| `email` | string | Must be unique to a single account, Required |
| `password` | string | Required |

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
| `id` | integer |
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
| `email` | string | Required |
| `password` | string | Required |

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
### GET `/api/drivers`

Possible Status Codes
* 200 - Successfully and returns a list of drivers 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success an array of drivers will be returned 
Example - 

```json
[
  {
    "name": "Mutumba",
    "email": "mutumba@email.com",
    "price": 100,
    "location": "Kampala",
    "phoneNumber": "713-456-7784",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg",
    "created_at": "2019-06-23T09:17:09.028Z",
    "updated_at": "2020-02-03T07:38:26.328Z"
  },
  {
    "name": "Natukunda",
    "email": "natu@email.com",
    "price": 100,
    "location": "Kampala",
    "phoneNumber": "070-337-2845",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spbroma/128.jpg",
    "created_at": "2019-08-23T10:58:53.749Z",
    "updated_at": "2020-02-03T05:39:34.811Z"
  },
  {
    "name": "Abbo",
    "email": "abbo1@email.com",
    "price": 100,
    "location": "Kampala",
    "phoneNumber": "376-920-8530",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kikillo/128.jpg",
    "created_at": "2019-06-23T09:17:09.028Z",
    "updated_at": "2020-02-03T07:38:26.328Z"
  },
  {
    "name": "Mukisa",
    "email": "Mus@5email.com",
    "price": 200,
    "location": "Kampala",
    "phoneNumber": "259-841-2607",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/francis_vega/128.jpg",
    "created_at": "2019-09-25T09:41:17.745Z",
    "updated_at": "2020-02-02T23:52:41.940Z"
  },
  {
    "name": "Akiki",
    "email": "akiki@email.com",
    "price": 200,
    "location": "Kampala",
    "phoneNumber": "531-450-6666",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/plbabin/128.jpg",
    "created_at": "2019-08-13T03:39:08.634Z",
    "updated_at": "2020-02-02T22:38:31.214Z"
  },
  ...

```

### GET `/api/drivers/:id`

Possible Status Codes
* 200 - Successfully and returns a object with driver info and reviews for each driver 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

Example of a successful response 
```json
{
  "id": 2,
  "name": "Florence",
  "email": "fl@email.com",
  "price": 200,
  "location": "Nansana",
  "phoneNumber": "587-485-0147",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jervo/128.jpg",
  "created_at": "2019-03-23T06:18:01.929Z",
  "updated_at": "2020-02-03T12:41:16.324Z",
  "reviews": [
    {
      "driver_id": 2,
      "review": "Driver just drove and did not try to make small talk.",
      "user": "Kevin"
    },
    {
      "driver_id": 2,
      "review": "This driver got us to the hospital and I delivered a healthy baby boy. Thank you so much, would highly recommend",
      "user": "Bevis"
    },
    {
      "driver_id": 2,
      "review": "Waited for over half a hour. Then driver showed up with and made up for being late",
      "user": "Butthead"
    }
  ]
}
```

