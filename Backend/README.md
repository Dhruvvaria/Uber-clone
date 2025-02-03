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

# Get Coordinate Endpoint

## Endpoint: `/maps/get-coordinate`

### Method: GET

### Description:

This endpoint retrieves the coordinates (latitude and longitude) for a given address.

### Query Parameters:

- `address`: A string representing the address to get coordinates for.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `coordinates` (object):
  - `lat` (number): Latitude of the address.
  - `lng` (number): Longitude of the address.

# Get Distance and Time Endpoint

## Endpoint: `/maps/get-distance-time`

### Method: GET

### Description:

This endpoint retrieves the distance and time between an origin and a destination.

### Query Parameters:

- `origin`: A string representing the starting point.
- `destination`: A string representing the ending point.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `distanceTime` (object):
  - `distance` (object):
    - `text` (string): Distance in human-readable format.
    - `value` (number): Distance in meters.
  - `duration` (object):
    - `text` (string): Duration in human-readable format.
    - `value` (number): Duration in seconds.

# Get Suggestions Endpoint

## Endpoint: `/maps/get-suggetions`

### Method: GET

### Description:

This endpoint retrieves autocomplete suggestions for a given input.

### Query Parameters:

- `input`: A string representing the input to get suggestions for.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `suggestions` (array):
  - Each element is an object containing:
    - `description` (string): Description of the suggestion.

# Create Ride Endpoint

## Endpoint: `/rides/create`

### Method: POST

### Description:

This endpoint creates a new ride.

### Request Body:

- `pickup`: A string representing the pickup location.
- `destination`: A string representing the destination location.
- `vehicleType`: A string representing the type of vehicle (must be one of ["auto", "car", "motorcycle"]).

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `ride` (object):
  - `user` (string): User ID.
  - `pickup` (string): Pickup location.
  - `destination` (string): Destination location.
  - `fare` (number): Fare for the ride.
  - `status` (string): Status of the ride.
  - `otp` (string): OTP for the ride.

# Get Fare Endpoint

## Endpoint: `/rides/get-fare`

### Method: GET

### Description:

This endpoint retrieves the fare for a ride between a pickup and destination location.

### Query Parameters:

- `pickup`: A string representing the pickup location.
- `destination`: A string representing the destination location.

### Headers:

- `Authorization`: Bearer token

### Example Response:

- `fare` (object):
  - `auto` (number): Fare for auto.
  - `car` (number): Fare for car.
  - `motorcycle` (number): Fare for motorcycle.
