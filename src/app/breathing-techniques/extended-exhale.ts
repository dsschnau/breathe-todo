import { BreathState } from "./breath-state";

///
/// Relieve Stress.
///
export class ExtendedExhale {
    public breathState: BreathState = {
        fullness: 0
    };

    public start(): void {
        this.inhale(4);
    }

    protected inhale(seconds: number): void {
        this.breathState.fullness = 0;
        let interval = 10 / seconds;
        let intervalId = setInterval(() => {
            this.breathState.fullness += interval;
            if (this.breathState.fullness > 101+interval) {
                clearInterval(intervalId);
                this.exhale(6);
            }
        }, 100)
    }

    protected exhale(seconds: number): void {
        this.breathState.fullness = 100;
        let interval = 10 / seconds;
        let intervalId = setInterval(() => {
            this.breathState.fullness -= interval;
            if (this.breathState.fullness < -1-interval) {
                clearInterval(intervalId);
                this.inhale(4);
            }
        }, 100)
    }
}