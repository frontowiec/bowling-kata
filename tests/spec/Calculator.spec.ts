/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
/// <reference path="../../typings/tsd.d.ts" />
import {expect} from 'chai';
import Calculator from '../../domain/Calculator';

describe('Calculator', () => {
    var subject: Calculator;

    beforeEach(function () {
        subject = new Calculator();
    });

    describe('#add', () => {
        it('should add two number together', () => {
            expect(subject.add(5,5)).to.equal(10);
        });
    });
});