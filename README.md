# My JS API

This is a simple JavaScript API built with Node.js and MongoDB. It uses Jest for testing and an in-memory MongoDB database for integration tests.

## Installation

Before you start, make sure you have Node.js and npm installed on your machine.

1. Clone this repository:

```bash
git clone https://github.com/yourusername/my-js-api.git
```

2. Navigate to the project directory:

```bash
cd my-js-api
```

3. Install the dependencies:

```bash
npm install
```

## Running the Application

To run the application, use the following command:

```bash
npm start
```

The application will start and listen on port 3000.

## Testing

This project uses Jest for testing. There are two types of tests: unit tests and integration tests.

To run the unit tests, use the following command:

```bash
npm run test:unit
```

To run the integration tests, use the following command:

```bash
npm run test:integration
```

## API Endpoints

The application has the following endpoints:

- `GET /`: Returns a welcome message.
- `POST /data`: Creates a new data entry.
- `GET /data`: Returns all data entries.
- `GET /data/:id`: Returns a specific data entry.
- `PUT /data/:id`: Updates a specific data entry.
- `DELETE /data/:id`: Deletes a specific data entry.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)