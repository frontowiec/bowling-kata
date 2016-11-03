import Frame from "./Frame";
export default class FrameFactory {
    create(firstThrow: number, secondThrow: number) {
        //TODO: validate created object
        return new Frame([firstThrow, secondThrow]);
    }
}