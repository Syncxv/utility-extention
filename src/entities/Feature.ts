export class Feature {
    ready: boolean;
    startFeature?: any;
    stopFeature?: any;
    constructor() {
        this.ready = false;
    }
    get color() {
        return '#EB34D9';
    }

    async _start() {
        try {
            if (typeof this.startFeature === 'function') {
                await this.startFeature();
            }

            this.log('Plugin loaded');
        } catch (e) {
            this.error('An error occurred during initialization!', e);
        } finally {
            this.ready = true;
        }
    }
    async _stop() {
        try {
            if (typeof this.stopFeature === 'function') {
                await this.stopFeature();
            }

            this.log('feature stopped');
        } catch (e) {
            this.error('welp that sucks eh', e);
        } finally {
            this.ready = false;
        }
    }
    log(...data: any[]) {
        console.log(`%c[UtilityExtention:Feature:${this.constructor.name}]`, `color: ${this.color}`, ...data);
    }

    debug(...data: any[]) {
        console.debug(`%c[UtilityExtention:Feature:${this.constructor.name}]`, `color: ${this.color}`, ...data);
    }

    warn(...data: any[]) {
        console.warn(`%c[UtilityExtention:Feature:${this.constructor.name}]`, `color: ${this.color}`, ...data);
    }

    error(...data: any[]) {
        console.error(`%c[UtilityExtention:Feature:${this.constructor.name}]`, `color: ${this.color}`, ...data);
    }
}
