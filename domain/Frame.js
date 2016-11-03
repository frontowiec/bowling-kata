"use strict";
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var Frame = (function () {
    function Frame(throws) {
        this.secondThrow = 0;
        this.firstThrow = throws[0];
        this.secondThrow = throws[1];
    }
    Frame.prototype.isStrike = function () {
        return this.firstThrow === 10;
    };
    Frame.prototype.isSpare = function () {
        var frameScore = this.firstThrow + this.secondThrow;
        return frameScore === 10;
    };
    Frame.prototype.getValueOfFirstThrow = function () {
        return this.firstThrow;
    };
    Frame.prototype.getValueOfSecondThrow = function () {
        return this.secondThrow;
    };
    return Frame;
}());
exports.__esModule = true;
exports["default"] = Frame;
