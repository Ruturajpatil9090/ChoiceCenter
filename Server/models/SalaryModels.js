// Import Sequelize and the sequelize instance
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the EmployeeData model
const EmployeeData = sequelize.define('salaryData', {
 
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  totalHours: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  netRatePerHour: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  perDaySalary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  logTime1: {
    type: DataTypes.STRING, 
  },
  outTime1: {
    type: DataTypes.STRING,
  },
  logTime2: {
    type: DataTypes.STRING, 
  },
  outTime2: {
    type: DataTypes.STRING,
  },
  logTime3: {
    type: DataTypes.STRING, 
  },
  outTime3: {
    type: DataTypes.STRING,
  },
  totalMonthlySalary: {
    type: DataTypes.FLOAT,  
  },
  daysInMonth: {
    type: DataTypes.INTEGER,  
  },
  salary_no: {
    type: DataTypes.INTEGER,
    
  },
  totalDeduction: {
    type: DataTypes.FLOAT,  
  },
  Employee_name: {
    type: DataTypes.STRING,  
  },
  salaryDate: {
    type: DataTypes.STRING,  
  },
  Basic_salary: {
    type: DataTypes.FLOAT,  
  },
  totalMonthyHours: {
    type: DataTypes.FLOAT,  
  },
  totalMonthlyDeduction: {
    type: DataTypes.FLOAT,  
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },


},{
    freezeTableName: true,
    timestamps: false,
    
  });



module.exports = EmployeeData;