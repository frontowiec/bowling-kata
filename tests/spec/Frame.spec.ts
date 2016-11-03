/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
import {expect} from 'chai';
import Frame from '../../domain/Frame';

describe('Frame', ()=> {
    it('should return value of first throw', ()=> {
        let frame = new Frame([4, 5]);
        expect(frame.getValueOfFirstThrow()).to.equal(4);
    });
    
    it('should return value of second throw', ()=> {
        let frame = new Frame([4, 5]);
        expect(frame.getValueOfSecondThrow()).to.equal(5);
    });

    it('should return true is strike occur', ()=> {
        let frame = new Frame([10, null]);
        expect(frame.isStrike()).to.be.true;
    });

    it('should return true is spare occur', ()=> {
        let frame = new Frame([7, 3]);
        expect(frame.isSpare()).to.be.true;
    });
});