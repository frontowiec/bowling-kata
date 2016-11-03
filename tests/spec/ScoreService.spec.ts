/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
import {expect} from 'chai';
import ScoreService from '../../domain/ScoreService';
import FrameFactory from "../../domain/FrameFactory";

describe('ScoreService', ()=> {
    var scoreService:ScoreService,
        frameFactory:FrameFactory;

    beforeEach(()=> {
        scoreService = new ScoreService();
        frameFactory = new FrameFactory();
    });

    it('should return total count without bonus points', ()=> {
        let score:number;
        let frame1 = frameFactory.create(4, 3);
        score = scoreService.calculateTotalCount(frame1);
        expect(score).to.equal(7);
        let frame2 = frameFactory.create(7, 2);
        score = scoreService.calculateTotalCount(frame2);
        expect(score).to.equal(16);
        let frame3 = frameFactory.create(5, 4);
        score = scoreService.calculateTotalCount(frame3);
        expect(score).to.equal(25);
        let frame4 = frameFactory.create(0, 5);
        score = scoreService.calculateTotalCount(frame4);
        expect(score).to.equal(30);
    });

    it('should return total count with bonus points', ()=> {
        let score:number;
        let frame1 = frameFactory.create(6, 4);
        score = scoreService.calculateTotalCount(frame1);
        expect(score).to.equal(0);
        let frame2 = frameFactory.create(4, 3);
        score = scoreService.calculateTotalCount(frame2);
        expect(score).to.equal(21);
    });
});