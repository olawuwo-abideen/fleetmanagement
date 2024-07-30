Backend to fleet management app

Installation

- clone the repository


`git clone git@github.com:olawuwo-abideen/fleetmanagement.git`


- navigate to the folder


`cd fleetmanagement-main.git`

To run the app in development mode

Open a terminal and enter the following command to install all the  modules needed to run the app:

`npm install`


Create a `.env` file with

`MONGODB_URI= mongodb://localhost:27017/fleetmanagement`

Enter the following `npm start` command to Command Line Interface to Start the app

This will start the app and set it up to listen for incoming connections on port 3000. 

Use Postman to test the endpoint

API Endpoints

The following API endpoints are available:

- BaseUrl https://localhost:3000/

- `POST /sensor-data` - Create Sensor Data

{
  "vehicle_id": "V123",
  "sensor_type": "GPS",
  "sensor_value": "12.345,67.890"

}

* Response: 200 OK on success, 400 Bad Request on failure.

- `GET /sensor-data` - Get a sensor by query params 


GET http://localhost:3000/sensor-data?vehicle_id=V127899999

GET http://localhost:3000/sensor-data?sensor_type=Speed

GET http://localhost:3000/sensor-data?timestamp=2024-07-28T07:23:53.244Z


* Response: 200 OK on success, 404 Not Found



Production Endpoint

GET https://fleetmanagement-seven.vercel.app/sensor-data

GET https://fleetmanagement-seven.vercel.app/sensor-data?vehicle_id=V127899999

GET https://fleetmanagement-seven.vercel.app/sensor-data?sensor_type=Speed

GET https://fleetmanagement-seven.vercel.app/sensor-data?timestamp=2024-07-29T14:38:56756Z
