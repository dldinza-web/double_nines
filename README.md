# DoubleNines Reservation Dashboard

Reservation Management Tool to create, read, edit and remove reservatiions.

**Description:**
The React application is connected to a real backend server. The database is SQLite 3 and the API is GraphQL.

## Installation

### Technical Requirements

- `ruby-3.0.0`: Install through RVM: `rvm install 3.0.0`
- `node v16.17.0`: Install through NVM: `nvm install 16.17.0`

**Note:**
Install Ruby Version Manager RVM: `\curl -sSL https://get.rvm.io | bash -s stable --ruby`
Install Node Version Manager NVM: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash`

### Steps

1. Clone or download the repository: `git clone git@github.com:dldinza-web/double_nines.git`. **Author:** Dennys Lopez Dinza *@dldinza-web*
2. Go to the project directory: `cd double_nines`
3. Execute the installation process: `sh ./bin/install.sh`

#### Troubleshooting
Open the file `./bin/install.sh` and execute each command one by one.

### Run Application
1. Execute the application: `npm run start` and open http://localhost:3000/
2. `Ctrl + C` to close the application

**Note:**
The application shows a form to create Vehicle Reservations. All reservations created are present in a list. User can edit or remove reservations.

### Steps

- Unit Tests TDD: `npm run test`
- Automation Tests BDD: `npm run it`
  - (optional) Run Cypress to run **e2e** Integration Tests manually: `npm run e2e`



## Author
Dennys Lopez Dinza
*@dldinza-web*
