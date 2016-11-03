"use strict";
var Frame_1 = require("./Frame");
var FrameFactory = (function () {
    function FrameFactory() {
    }
    FrameFactory.prototype.create = function (firstThrow, secondThrow) {
        //TODO: validate created object
        return new Frame_1["default"]([firstThrow, secondThrow]);
    };
    return FrameFactory;
}());
exports.__esModule = true;
exports["default"] = FrameFactory;
