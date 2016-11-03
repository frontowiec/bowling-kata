"use strict";
/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
var chai_1 = require('chai');
var FrameFactory_1 = require("../../domain/FrameFactory");
var Frame_1 = require("../../domain/Frame");
describe('FrameFactory', function () {
    var frameFactory;
    beforeEach(function () {
        frameFactory = new FrameFactory_1["default"]();
    });
    it('should create new frame object', function () {
        var usualFrame = frameFactory.create(1, 2);
        var strikeFrame = frameFactory.create(10, null);
        var spareFrame = frameFactory.create(5, 5);
        chai_1.expect(usualFrame instanceof Frame_1["default"]).to.be.true;
        chai_1.expect(strikeFrame instanceof Frame_1["default"]).to.be.true;
        chai_1.expect(spareFrame instanceof Frame_1["default"]).to.be.true;
    });
    //TODO: could validate created object
});
