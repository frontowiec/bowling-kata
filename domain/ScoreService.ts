import Frame from "./Frame";
export default class ScoreService {

    private totalScore: number = 0;

    public calculateTotalCount(frame:Frame) {
        let frameScore = frame.getValueOfFirstThrow() + frame.getValueOfSecondThrow();
        return this.totalScore += frameScore;
    }
}