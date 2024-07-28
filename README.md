Backend to fleet management app

## Installation

- clone the repository

```sh
git clone git@github.com:olawuwo-abideen/fleetmanagement.git
```

- navigate to the folder

```sh
cd fleetmanagement-main.git
```

## Run the app in development mode

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the Node modules needed to run the app:

```sh
npm install

```

After doing an `npm install` 


Create a .env file with

DB_URI = Database Name OR URL


Enter the following `npm start` command to CLI:

```sh

npm start

```

This will start the app and set it up to listen for incoming connections on port 3000. Use Postman and  to test the endpoint

```sh

http://localhost:3000

```

to start using the app.

## API Endpoints

The following API endpoints are available:

- BaseUrl https://localhost:3000/

## User Route


- `POST /sensor-data` - Create Sensor Data

{
  "vehicle_id": "V123",
  "sensor_type": "GPS",
  "sensor_value": "12.345,67.890"

}
* Response: 200 OK on success, 400 Bad Request on failure.

- `GET /sensor-data` - Get a sensor by query params 


GET http://localhost:3000/sensor-data?vehicle_id=V123

GET http://localhost:3000/sensor-data?sensor_type=Speed

GET http://localhost:3000/sensor-data?timestamp=2024-07-28T07:23:53.244Z


* Response: 200 OK on success, 404 Not Found .
