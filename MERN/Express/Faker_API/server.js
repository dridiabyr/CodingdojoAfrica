const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;


  const createUser = () => {
    const user = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      _id: faker.datatype.uuid(),
    };
    return user;
  };



  const CreateCompany = () => {
    const company = {
      _id: faker.datatype.uuid(),
      name: faker.company.companyName(),
      address: {
        street: faker.address.streetaddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    };
    return company;
  };

  app.get('/', (req, res) => {
    res.send('Welcome to the Faker API! Please use the following endpoints to generate new data: /api/users/new, /api/companies/new, /api/user/company');
  });
  
// route to create a new user
app.get ('api/users/new',(req,res)=> {
    const user = createUser();
    res.json(user);
}) 

app.get ('api/companies/new',(req,res)=> {
    const company = CreateCompany();
    res.json(company);
}) 

app.get ('api/users/new',(req,res)=> {
    const user = createUser();
    const company = CreateCompany();
    res.json({user,company});
}) 

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
