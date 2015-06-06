"use strict";

var BaseRepository = require('./baseRepository');


class CategoryRepository extends BaseRepository{

	constructor() {

		super();
		this._Category = this._db.model('Category', { title: String });
	}

	insertCategory(category) {

		var dbCategory = new this._Category(category);
		dbCategory._id = this.getObjectId();

		return dbCategory.saveQ();
	}

	getCategoryList() {
		return this._Category.findQ();
	}
}

module.exports = CategoryRepository;
