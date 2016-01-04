'use strict';

var shortid = require('shortid');

exports.getData = function(request, response) {
    var count = request.params.count || 500,
        responseObj = {
            data: []
        },
        name = ['Tom', 'Sam', 'Alex', 'Bob', 'Peter', 'Jon', 'John', 'Max', 'Bill', 'Bonney'],
        lastName = ['Mc Donald', 'Jhonson', 'Martin', 'Patel', 'Bush', 'Doe', 'Hanks', 'Yu', 'Hog', 'Singh'];
    for(var i=0; i<count; i++) {
        var d = new Date(),
            startDate = i%4==0 ? new Date(d.setDate(d.getDate() - Math.round(Math.random()*10))) : new Date(d.setDate(d.getDate()-Math.round((Math.random() * 50) + 50))),
            endDate = new Date(startDate.getTime());

        endDate = i%4==0 ? null : new Date(endDate.setDate(endDate.getDate() + Math.round(Math.random()*10)));
        responseObj.data.push({
            name: 'Mr. ' + name[Math.round(10 * Math.random()) -1] + ' ' + lastName[Math.round(10 * Math.random()) -1],
            age: Math.round(100 * Math.random()),
            MRN: shortid.generate(),
            roomNumber: Math.round(500 * Math.random()),
            inDate: startDate.getTime(),
            outDate: endDate ? endDate.getTime() : endDate,
            vitals: {
                heartRate: 60 + Math.round(80 * Math.random()),
                bloodPressureSystolic: 90 + Math.round(80 * Math.random()),
                bloodPressureDiastolic: 50 + Math.round(70 * Math.random())
            }
        })
    }

    response.send(responseObj);
};