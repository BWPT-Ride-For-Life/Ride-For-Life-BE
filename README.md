# Ride-For-Life-BE
---

## Deployed Server

The server is deployed to heroku at the url [https:\/\/ride-for-life-bw.herokuapp.com/](https://ride-for-life-bw.herokuapp.com/).

## Auth Endpoints

### POST `/api/auth/register-driver`

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `firstName` | string | Required |
| `lastName` | string | Required |
| `location_id` | integer | Must reference the id of a location, Required |
| `phoneNumber` | string | Required, must conform to this format 4098856312 - no dashes  |
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
    firstName: 'Kevin',
    lastName: 'Carr',
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
## Driver CRUD Endpoints

### GET `/request-driver/:id` 
Note that you must be logged in as a user to access this endpoint. If not will recieve 401 back from server!

 Here the :id is the drivers id to send a text message to requesting a ride

Possible Status Codes
* 200 - Successful 
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On successful response the server sends back a json object of the following shape

```json

 {
  "message": "Message was sent sucessfully"
  }

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
  "firstName": "Florence",
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
### DELETE `/api/drivers/:id` 
Note that you must be logged in as a driver to access this endpoint. If not will recieve 401 back from server!

Possible Status Codes
* 200 - Successful 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success an json object with the message "The driver has been successfully deleted"

```js
fetch('https://ride-for-life-bw.herokuapp.com/api/drivers/1', {
  method: "DELETE",
  headers: {
    Authorization: token, // (this token could come from localStorage)
  }
})
  .then(res => res.json())
  .then(wasSuccessful => {
      // if this was successful you will recieve a json message saying driver was deleted successfully
  })
  .catch(err => {
    // This is where you would handle any errors
  });
```
### PUT `/api/drivers/:id`
Note that you must be logged in as a driver to access this endpoint. If not will recieve 401 back from server!

Possible Status Codes
* 200 - Successful 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success returns driver object with the updated changes like below

```json
  "firstName": "Jimbo",
  "lastName": "jones",
  "email": "mutum2ba@aol23.com",
  "location": "Kampala",
  "price": 100,
  "phoneNumber": "7134567784",
  "created_at": "2019-05-19T19:30:15.650Z",
  "updated_at": "2020-02-06T01:07:42.000Z",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ffbel/128.jpg"
```

## Reviews CRUD Endpoints

### POST `/api/drivers/:id/reviews`
Note that you must be logged in as a user to access this endpoint. If not will recieve 401 back from server!

Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `review` | string | N/A |

Possible Status Codes
* 200 - Successful 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On success the database returns the number of rows updated which will always be the number 1 or 0. 1 meaning 1 review was successfully added and 0 meinging the review was not added. (should always return 1, if not let me know becasue somthing is wrong)

```js
// This example shows a what a successful post would look like

fetch('https://ride-for-life-bw.herokuapp.com/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({
    review: 'Really awsome driver!'
    
  })
})
  .then(res => res.json())
  .then(data => {
    // This is where you check the response for a 0 or 1
    // ...
  })
  .catch(err => {
    // This is where you would handle any errors
  });

```

### PUT `/api/drivers/:id/reviews/review_id` 
Note that you must be logged in as a user to access this endpoint. If not will recieve 401 back from server!
 Here the :id is the drivers id and the review_id is the id of the review you want to update
 
Expects an object with the following keys with the following constraints:

| Field | Type | Other Constraints |
| ---- | --- | --- |
| `review` | string | N/A |

Possible Status Codes
* 200 - Successful 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On successful response the server sends back a json object of the following shape

```json

 "id": 31,
  "review": "Here is a edited review",
  "customer_id": 5,
  "driver_id": 19

```
### DELETE `/api/drivers/:id/reviews/review_id` 
Note that you must be logged in as a user to access this endpoint. If not will recieve 401 back from server!
 Here the :id is the drivers id and the review_id is the id of the review you want to delete

Possible Status Codes
* 200 - Successful 
* 401 - Unauthorized (invalid token)
* 400 - Bad Request (not logged in)
* 500 - Internal server error (You shouldn't be getting these. If you are, let
    me know because something isn't working as expected)

On successful response the server sends back a json object of the following shape

```json

 {
  "message": "Review was successfully deleted"
  }

```
## Setting up the project locally

1. `git clone https://github.com/BWPT-Ride-For-Life/Ride-For-Life-BE.git`
2. `cd Ride-For-Life-BE`
3. `npm install`
4. `cp .env.example .env`
5. Set up a test and development postgres database ( `createdb <database>` )
6. Update the data in your `.env` file
7. `npm up:latest`
8. `npm seed:all`
9. Enjoy


