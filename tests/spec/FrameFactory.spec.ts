/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
import {expect} from 'chai';
import FrameFactory from "../../domain/FrameFactory";
import Frame from "../../domain/Frame";

describe('FrameFactory', () => {
    var frameFactory:FrameFactory;

    beforeEach(() => {
        frameFactory = new FrameFactory();
    });

    it('should create new frame object', ()=> {
        let usualFrame = frameFactory.create(1, 2);
        let strikeFrame = frameFactory.create(10, null);
        let spareFrame = frameFactory.create(5,5);
        expect(usualFrame instanceof Frame).to.be.true;
        expect(strikeFrame instanceof Frame).to.be.true;
        expect(spareFrame instanceof Frame).to.be.true;
    });

    //TODO: could validate created object
});