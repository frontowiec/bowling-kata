"use strict";
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
var chai_1 = require('chai');
var Frame_1 = require('../../domain/Frame');
describe('Frame', function () {
    it('should return value of first throw', function () {
        var frame = new Frame_1["default"]([4, 5]);
        chai_1.expect(frame.getValueOfFirstThrow()).to.equal(4);
    });
    it('should return value of second throw', function () {
        var frame = new Frame_1["default"]([4, 5]);
        chai_1.expect(frame.getValueOfSecondThrow()).to.equal(5);
    });
    it('should return true is strike occur', function () {
        var frame = new Frame_1["default"]([10, null]);
        chai_1.expect(frame.isStrike()).to.be.true;
    });
    it('should return true is spare occur', function () {
        var frame = new Frame_1["default"]([7, 3]);
        chai_1.expect(frame.isSpare()).to.be.true;
    });
});
