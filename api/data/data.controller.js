'use strict';

var shortid = require('shortid');

exports.getData = function(request, response) {
    var count = request.params.count,
        responseObj = {
            data: []
        },
        name = ['Tom', 'Sam', 'Alex', 'Bob', 'Peter', 'Jon', 'John', 'Max', 'Bill', 'Bonney'],
        lastName = ['Mc Donald', 'Jhonson', 'Martin', 'Patel', 'Bush', 'Doe', 'Hanks', 'Yu', 'Hog', 'Singh'];
    for(var i=0; i<count; i++) {
        responseObj.data.push({
            name: 'Mr. ' + name[Math.round(10 * Math.random()) -1] + ' ' + lastName[Math.round(10 * Math.random()) -1],
            age: Math.round(100 * Math.random()),
            MRN: shortid.generate(),
            roomNumber: Math.round(500 * Math.random()),
            vitals: {
                heartRate: 60 + Math.round(80 * Math.random()),
                bloodPressureSystolic: 90 + Math.round(80 * Math.random()),
                bloodPressureDiastolic: 50 + Math.round(70 * Math.random())
            }
        })
    }

    response.send(responseObj);
};