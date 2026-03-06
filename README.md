School Management API:

A restful API built with Node.js,Express.js and mySQL to manage school data.
API allows user to add schools and list the schools near to their latitude and longitude.

Tech Stack used:

1. Backend: Node.js
2. Framework: Express.js
3. Database: MySQL
4. API testing: Postman

setup instructions:
1. Repo Clone
    git clone https://github.com/rechuvivek/schoolManagement.git
    cd schoolManagement

2. Install dependencies:
    npm i

3. Create .env file
    DB_HOST = your_host
    DB_USER = your_user
    DB_PASSWORD = your_password
    DB_NAME = your_database
    DB_PORT = your_port //3000

    PORT

4. Run Server
    npm run dev
        Server will start at <http://localhost:3000>

List of endpoints:

1. / -> server healt test
2. POST /api/addSchool -> Used to add a School
    body:
        {
            name: "school-name",
            address: "address",
            latitude: <> //should be a real number
            longitude: <> //should be a real number
        }
3. GET /api/listSchools?latitude=<>&longitude=<> -> used to list all the schools that are in proximity to the given latitude and longitude

Deliverables:
    GitHub Repo
    https://github.com/rechuvivek/schoolManagement.git

    Live API
    https://schoolmanagement-31kn.onrender.com

    Postman Collection
    https://github.com/rechuvivek/schoolManagement.git/school-management.postman_collection.json