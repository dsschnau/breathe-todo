import { BreathState } from "./breath-state";

///
/// Unwind.
///
export class RelaxingBreath {
    public breathState: BreathState = {
        fullness: 0
    };

    public start(): void {
        this.inhale(4);
    }

    protected hold(seconds: number) {
        setTimeout(() => {
            if (this.breathState.fullness <= 0) {
                this.inhale(4);
            } else {
                this.exhale(8);
            }
        }, 1000 * seconds);
    }

    protected inhale(seconds: number): void {
        this.breathState.fullness = 0;
        let interval = 10 / seconds;
        let intervalId = setInterval(() => {
            this.breathState.fullness += interval;
            if (this.breathState.fullness > 100) {
                clearInterval(intervalId);
                this.hold(7);
            }
        }, 100)
    }

    protected exhale(seconds: number): void {
        this.breathState.fullness = 100;
        let interval = 10 / seconds;
        let intervalId = setInterval(() => {
            this.breathState.fullness -= interval;
            if (this.breathState.fullness < 0) {
                clearInterval(intervalId);
                this.inhale(4);
            }
        }, 100)
    }
}