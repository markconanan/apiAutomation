# API Automation
This repo contains an automation framework for API Automation Tests using jest and supertest

# Requirements
* Node.js - This project is created using Node version 18, it may not work properly with future version as of latest code published.

# Test Data
The set of tests uses a random generator to create pet IDs, with the pet ID being used throughout the test created during the first test case. It is therefore advised to run all the tests chronologically as it can be considered an end to end test.

# Installation
To run the tests, clone or download the zip of this repo then install the node modules using ```npm install``` in the terminal in the folder. 

# Execution
To execute the tests, enter ```npm test``` in the terminal. 

# Report
There is spec report available in the terminal. There is also a test-report.html that will be generated after running the tests which will include a failure message for each failed test if any. To open the report, run ```open test-report.html``` in terminal after the test.
