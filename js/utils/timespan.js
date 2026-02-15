export class TimeSpan {
    constructor(milliseconds) {
        this.milliseconds = milliseconds;
    }
    get ms() {
        return this.milliseconds;
    }
    get totalSeconds() {
        return this.milliseconds / 1000;
    }
    get totalMinutes() {
        return this.totalSeconds / 60;
    }
    get totalHours() {
        return this.totalMinutes / 60;
    }
    get totalDays() {
        return this.totalHours / 24;
    }
    get seconds() {
        return Math.floor(this.totalSeconds) % 60;
    }
    get minutes() {
        return Math.floor(this.totalMinutes) % 60;
    }
    get hours() {
        return Math.floor(this.totalHours) % 24;
    }
    get days() {
        return Math.floor(this.totalDays);
    }
    static fromSeconds(seconds) {
        return new TimeSpan(seconds * 1000);
    }
    static fromMinutes(minutes) {
        return TimeSpan.fromSeconds(minutes * 60);
    }
    static fromHours(hours) {
        return TimeSpan.fromMinutes(hours * 60);
    }
    static fromDays(days) {
        return TimeSpan.fromHours(days * 24);
    }
}
