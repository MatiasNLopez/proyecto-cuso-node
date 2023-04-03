'use strict'

require('dotenv').config()
const { faker } = require('@faker-js/faker'),
    employees = [];

for (let i = 0; i < process.env.CANT_EMPLOYEES; i++) {
    let name = faker.name.firstName(),
        lastname = faker.name.lastName()
    
    const employee = {
        name,
        lastname,
        age: faker.mersenne.rand(18, 60) ,
        birthday: faker.date.birthdate({ min: 1900, max: 2000, mode: 'year' }), // 1940-08-20T08:53:07.538Z
        phoneNumber:Number.toString(faker.phone.number('+48 91 ### ## ##')),
        email:faker.internet.email(name, lastname, 'gmail.com'),
        city:faker.address.cityName(),
        state:faker.address.state(),
        streetAddress: faker.address.streetAddress(true),
        jobArea: faker.name.jobArea(),
        jobDescriptor: faker.name.jobDescriptor(),
        jobTitle: faker.name.jobTitle(),
        jobType:  faker.name.jobType(),
        experience:faker.mersenne.rand(1, 30), 
        decription:faker.lorem.paragraph(1),
        avatar:faker.internet.avatar(),
        createdAt: new Date(),
        updatedAt: new Date()
    }
    employees.push(employee)
}

module.exports = employees

