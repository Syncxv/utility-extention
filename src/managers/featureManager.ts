import { Feature } from '../entities/Feature'
import { utilityExtention } from './utilityExtention'

//heavly inspired from powercord :)
export class FeatureManager {
    features: Map<string, Feature>
    constructor() {
        this.features = new Map()
    }

    get(pluginID: string) {
        return this.features.get(pluginID)
    }

    async isEnabled(plugin: string) {
        return !(await utilityExtention.settings.get('disabledPlugins', [])).includes(plugin)
    }
    async mount(featureID: string) {
        try {
            const bruh = (await import(`../features/${featureID}`)).default
            Object.defineProperty(bruh.prototype, 'entityID', {
                value: featureID,
                writable: false
            })
            this.features.set(featureID, new bruh())
            return bruh
        } catch (err) {
            console.error(err)
        }
    }

    async startAllFeatures() {
        await Promise.all(this.getFeatureIds().map(async id => await this.mount(id))) //mount them all: ;
        for (const feature of [...this.features.values()]) {
            if ((await utilityExtention.settings.get('disabledFeatures', [])).includes(feature.entityID)) {
                continue
            }
            this.load(feature.entityID)
        }
    }

    load(featureID: string) {
        const feature = this.get(featureID)
        if (!feature) {
            throw new Error(`THIS ONE DOESNT EXIST (${feature})`)
        }
        if (feature.ready) {
            return console.error(` (${featureID}) IS ALREAYD STARTED idk`)
        }

        feature._start()
    }

    unload(featureID: string) {
        const feature = this.get(featureID)
        if (!feature) {
            throw new Error(`THIS ONE DOESNT EXIST (${feature})`)
        }
        if (!feature.ready) {
            return console.error(` (${featureID}) IS ALREAYD STOPPED idk`)
        }

        feature._stop()
    }

    async enable(featureID: string) {
        if (!this.get(featureID)) {
            throw new Error(`doenst exist fam (${featureID})`)
        }

        await utilityExtention.settings.set(
            'disabledFeatures',
            (await utilityExtention.settings.get('disabledFeatures', [])).filter((p: string) => p !== featureID)
        )

        this.load(featureID)
    }

    async disable(featureID: string) {
        const feature = this.get(featureID)

        if (!feature) {
            throw new Error(`DOESNT EXIST (${featureID})`)
        }

        // Don't attempt to disable plugins twice
        if (!(await this.isEnabled(featureID))) {
            return
        }

        await utilityExtention.settings.set('disabledFeatures', [
            ...(await utilityExtention.settings.get('disabledFeatures', [])),
            featureID
        ])

        this.unload(featureID)
    }

    getFeatureIds() {
        return (
            require
                .context('../features', true, /\.ts$/)
                .keys()
                //returns array of ts files eg ["./nsfwBlocker/index.ts", "./osuCollector/index.ts", ...]
                .map(path =>
                    path
                        .split('/')
                        //get the folder name
                        .filter(s => !s.includes('.'))
                        .join('')
                )
        )
    }
    async disableFeature() {}
}
