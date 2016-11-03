"use strict";
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
var chai_1 = require('chai');
var ScoreService_1 = require('../../domain/ScoreService');
var FrameFactory_1 = require("../../domain/FrameFactory");
describe('ScoreService', function () {
    var scoreService, frameFactory;
    beforeEach(function () {
        scoreService = new ScoreService_1["default"]();
        frameFactory = new FrameFactory_1["default"]();
    });
    it('should return total count without bonus points', function () {
        var score;
        var frame1 = frameFactory.create(4, 3);
        score = scoreService.calculateTotalCount(frame1);
        chai_1.expect(score).to.equal(7);
        var frame2 = frameFactory.create(7, 2);
        score = scoreService.calculateTotalCount(frame2);
        chai_1.expect(score).to.equal(16);
        var frame3 = frameFactory.create(5, 4);
        score = scoreService.calculateTotalCount(frame3);
        chai_1.expect(score).to.equal(25);
        var frame4 = frameFactory.create(0, 5);
        score = scoreService.calculateTotalCount(frame4);
        chai_1.expect(score).to.equal(30);
    });
    it('should return total count with bonus points', function () {
        var score;
        var frame1 = frameFactory.create(6, 4);
        score = scoreService.calculateTotalCount(frame1);
        chai_1.expect(score).to.equal(0);
        var frame2 = frameFactory.create(4, 3);
        score = scoreService.calculateTotalCount(frame2);
        chai_1.expect(score).to.equal(21);
    });
});
