import { FeatureManager } from './featureManager'
import { Settings } from './settings'

class UtilityExtention {
    settings: Settings
    featureManager: FeatureManager
    constructor() {
        this.settings = new Settings()
        this.featureManager = new FeatureManager()
    }
}

export const utilityExtention = new UtilityExtention()
