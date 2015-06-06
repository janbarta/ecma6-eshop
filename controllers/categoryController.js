"use strict"

var services = require('../services');

class CategoryController{
    constructor() {
    }

    getAll(request, reply) {
        services.categories.getAll().then(function(categories){
            reply(categories);
        });
    }

    insert(request, reply) {

        var category = {
            title: request.payload.title
        };

        services.categories.insert(category).then(function(category) {
            reply(category).code(201);
        }, function(err) {
            reply(err).code(500);
        });
    }
}

module.exports = CategoryController;
