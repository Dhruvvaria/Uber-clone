# User Register Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters.
- `email`: A valid email address.
- `password`: A string with a minimum length of 6 characters.

### Example Response:

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
  - `token` (String): JWT Token

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:

This endpoint authenticates an existing user. It validates the credentials and returns an authentication token along with the user details.

### Request Body:

The request body should be a JSON object with the following fields:

- `email`: A valid email address
- `password`: A string with a minimum length of 6 characters

### Example Response:

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
  - `token` (String): JWT Token

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:

This endpoint retrieves the profile of the authenticated user.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name.
    - `lastname` (string): User's last name.
  - `email` (string): User's email address.

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:

This endpoint logs out the authenticated user by clearing the authentication token.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `message` (string): "Logged out successfully!"

# Captain Register Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:

This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns an authentication token along with the captain details.

### Request Body:

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).
  - `email` (string): Captain's email address (must be a valid email).
  - `password` (string): A string with a minimum length of 6 characters.
  - `vehicle` (object):
    - `color` (string): Vehicle color (minimum 3 characters).
    - `plate` (string): Vehicle plate (minimum 3 characters).
    - `capacity` (number): Vehicle capacity (minimum 1).
    - `vehicleType` (string): Vehicle type (must be one of ["car", "motorcycle", "auto"]).

### Example Response:

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).
  - `email` (string): Captain's email address (must be a valid email).
  - `vehicle` (object):
    - `color` (string): Vehicle color (minimum 3 characters).
    - `plate` (string): Vehicle plate (minimum 3 characters).
    - `capacity` (number): Vehicle capacity (minimum 1).
    - `vehicleType` (string): Vehicle type (must be one of ["car", "motorcycle", "auto"]).
  - `token` (string): JWT Token

# Captain Login Endpoint

## Endpoint: `/captains/login`

### Method: POST

### Description:

This endpoint authenticates an existing captain. It validates the credentials and returns an authentication token along with the captain details.

### Request Body:

- `email`: A valid email address
- `password`: A string with a minimum length of 6 characters

### Example Response:

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).
  - `email` (string): Captain's email address (must be a valid email).
  - `vehicle` (object):
    - `color` (string): Vehicle color (minimum 3 characters).
    - `plate` (string): Vehicle plate (minimum 3 characters).
    - `capacity` (number): Vehicle capacity (minimum 1).
    - `vehicleType` (string): Vehicle type (must be one of ["car", "motorcycle", "auto"]).
  - `token` (string): JWT Token

# Captain Profile Endpoint

## Endpoint: `/captains/profile`

### Method: GET

### Description:

This endpoint retrieves the profile of the authenticated captain.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).
  - `email` (string): Captain's email address (must be a valid email).
  - `vehicle` (object):
    - `color` (string): Vehicle color (minimum 3 characters).
    - `plate` (string): Vehicle plate (minimum 3 characters).
    - `capacity` (number): Vehicle capacity (minimum 1).
    - `vehicleType` (string): Vehicle type (must be one of ["car", "motorcycle", "auto"]).
  - `token` (string): JWT Token

# Captain Logout Endpoint

## Endpoint: `/captains/logout`

### Method: GET

### Description:

This endpoint logs out the authenticated captain by clearing the authentication token.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `message` (string): "Logged out successfully!"
