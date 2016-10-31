"use strict";
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
var chai_1 = require('chai');
var Calculator_1 = require('../../domain/Calculator');
describe('Calculator', function () {
    var subject;
    beforeEach(function () {
        subject = new Calculator_1["default"]();
    });
    describe('#add', function () {
        it('should add two number together', function () {
            chai_1.expect(subject.add(5, 5)).to.equal(10);
        });
    });
});
