/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
'use strict';

var GroceryList = require(process.cwd() + '/src/model/grocery-list');
var assert = require('assert');
var expect = require('chai').expect;

module.exports = function () {
    
    var myList,
        listItem = 'apple';
    
    this.Given(/^I have an empty grocery list$/, function (callback) {
        myList = GroceryList.create();
        callback();
        // callback(null, 'pending');
    });

    this.When(/^I add an item to the list$/, function (callback) {
        myList.add(listItem);
        callback();
        // callback(null, 'pending');
    });

    this.Then(/^The grocery list contains a single item$/, function (callback) {
        expect(myList.getAll().length).to.equal(1);
        callback();
    });

    this.Then(/^I can access that item from the grocery list$/, function (callback) {
        expect(myList.getItemIndex(listItem)).to.not.equal(-1);
        callback();
    });

};