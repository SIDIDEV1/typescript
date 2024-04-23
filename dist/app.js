export class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
}
ga("send", {
    hitType: "event",
    eventCategory: "category",
});
