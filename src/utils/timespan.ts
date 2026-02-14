export class TimeSpan {
    constructor(public milliseconds: number) {}

    get ms(): number {
        return this.milliseconds;
    }

    get totalSeconds(): number {
        return this.milliseconds / 1000;
    }

    get totalMinutes(): number {
        return this.totalSeconds / 60;
    }

    get totalHours(): number {
        return this.totalMinutes / 60;
    }

    get totalDays(): number {
        return this.totalHours / 24;
    }

    get seconds(): number {
        return Math.floor(this.totalSeconds) % 60;
    }
    get minutes(): number {
        return Math.floor(this.totalMinutes) % 60;
    }
    get hours(): number {
        return Math.floor(this.totalHours) % 24;
    }
    get days(): number {
        return Math.floor(this.totalDays);
    }

    static fromSeconds(seconds: number): TimeSpan {
        return new TimeSpan(seconds * 1000);
    }

    static fromMinutes(minutes: number): TimeSpan {
        return TimeSpan.fromSeconds(minutes * 60);
    }

    static fromHours(hours: number): TimeSpan {
        return TimeSpan.fromMinutes(hours * 60);
    }

    static fromDays(days: number): TimeSpan {
        return TimeSpan.fromHours(days * 24);
    }
}