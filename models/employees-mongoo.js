'use strict';

const mongoose = require('mongoose'),
    config = require('../config/config'),
    Schema = mongoose.Schema,
    
    EmployeesSchemaa = new Schema({
        name: {
            type: String,
            required: true
          },
          lastname: {
            type: String,
            required: true
          },
          age:{
            type: Number,
            allowNull:false
          },
          birthday: {
            type: Date,
            required: true
          },
          phoneNumber: {
            type: String,
            required: true
          },
          email:{
            type: String,
            required: true,
            unique: true
          },
          city:{
            type: String,
            required: true
          },
          state: {
            type: String,
            required: true
          },
          streetAddress: {
            type: String,
            required: true
          },
          jobArea: {
            type: String,
            required: true
          },
          jobDescriptor: {
            type: String,
            required: true
          },
          /* jobTitle: {
            type: String,
            required: true
          }, */
          jobType: {
            type: String,
            required: true
          },
          experience:{
            type: Number,
            required: true
          },
         /*  decription:{
            type: String,
            required: true
          }, */
          avatar:{
            type: String,
            required: true
          },
         /*  createdAt:{ 
            type: Date,
            required: true
          },
          updatedAt:{ 
            type: Date,
            required: true
          } */
        },
        {
          timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
        },
        {
            collection: config.dbConnection.dbCollection
        }
        ),
    EmployeesModel = mongoose.model(config.dbConnection.dbCollection, EmployeesSchemaa)
    mongoose.connect(config.dbConnection.host, {useNewUrlParser: true});
    mongoose.set('toJSON', {
      virtuals: true,
      transform: (doc, converted) => {
        delete converted._id;
      }
    });
    
module.exports = EmployeesModel