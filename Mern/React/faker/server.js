const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createCompany = () => {
  const company = {
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return company;
};

const createUser = () => {
  const User = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
  return User;
};

app.get("/api/users/new", (req, res) => {
  const user = createUser();
  res.json(user);
});

app.get("/api/companies/new", (req, res) => {
  const company = createCompany();
  res.json(company);
});

app.get("/api/user/company", (req, res) => {
  const user = createUser();
  const company = createCompany();
  res.json({ user, company });
});

// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
