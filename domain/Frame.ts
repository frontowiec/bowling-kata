/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
export default class Frame {
    private firstThrow:number;
    private secondThrow:number = 0;

    constructor(throws:[number, number]) {
        this.firstThrow = throws[0];
        this.secondThrow = throws[1];
    }

    public isStrike() {
        return this.firstThrow === 10;
    }

    public isSpare() {
        let frameScore: number = this.firstThrow + this.secondThrow;
        return frameScore === 10;
    }

    public getValueOfFirstThrow() {
        return this.firstThrow;
    }

    getValueOfSecondThrow() {
        return this.secondThrow;
    }
}