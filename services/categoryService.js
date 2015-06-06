"use strict";

var CategoryRepository = require('../repositories/categoryRepository');

class CategoryService{
    constructor() {
        this._categoryRepository = new CategoryRepository();
    }

    getById(id){
        let that = this;
        return new Promise(function(resolve, reject) {
            for (let i = 0; i < that._categories.length; i++) {
                let category = that._categories[i];
                if (category.id === id){
                    resolve(category);
                }
            }
            resolve(null);
        });
    }

    getAll() {
        return this._categoryRepository.getCategoryList();
    }

    insert(category) {

        if (!category) {
            return Promise.reject('Nothing to insert');
        }

        if (!category.title || category.title.length <= 0) {
            return Promise.reject('Title can not be empty');
        }

        return this._categoryRepository.insertCategory(category);
    }
}

//remove when Object.assign is implemented
let clone = function(src) {
    let dst = {};
    Object.keys(src).forEach(function(k) {
        dst[k] = src[k];
    });
    return dst;
};

module.exports = CategoryService;
