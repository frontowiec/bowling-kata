"use strict";
var ScoreService = (function () {
    function ScoreService() {
        this.totalScore = 0;
    }
    ScoreService.prototype.calculateTotalCount = function (frame) {
        var frameScore = frame.getValueOfFirstThrow() + frame.getValueOfSecondThrow();
        return this.totalScore += frameScore;
    };
    return ScoreService;
}());
exports.__esModule = true;
exports["default"] = ScoreService;
