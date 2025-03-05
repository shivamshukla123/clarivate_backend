# clarivate_backend

Clone the backend repository:

    git clone [Backend Repo URL]

    cd clarivate_backend

Install dependencies:

    npm install

Configure the database in db/data-source.ts file:

    type: 'mysql',
    host: 'your-host',
    port: 3306,
    username: 'your-username',
    password: 'your-password',
    database: 'MyStore',

Create the database 

    mysql -u -p

    create database MyStore;

Run database migrations:

    npm run migration:run

Start the backend server:

    npm run start:dev

The backend will run on http://localhost:4000

Database Tables (MyStore)

The database consists of the following tables:

    categories

    products


API Endpoints

Create Category

Endpoint: POST [/api/categories] (http://localhost:4000/categories)

Payload:

    {
    "CategoryName": "Electronics",
    "Description": "electric and gadget"
    }

Create Product

Endpoint: POST [/api/products] (http://localhost:4000/products)

Payload:

    {
        "ProductName": "Laptop",
        "Description": "A high-performance laptop",
        "Price": "1500.99",
        "StockQuantity": 10,
        "CategoryId": 1 
    }

Get Categories

Endpoint: GET (http://localhost:4000/categories)

Get Products

Endpoint: GET (http://localhost:4000/products)

Notes

Ensure MySQL is installed and running before starting the backend.

The frontend communicates with the backend via API calls to http://localhost:4000/api.

Happy coding! 🚀