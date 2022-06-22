export class Settings {
    async get(key: string, defaultVal: any) {
        const value = (await chrome.storage.sync.get(key))[key]
        if (null == value) return defaultVal
        return value
    }

    async set(key: string, value: any) {
        await chrome.storage.sync.set({ [key]: value })
    }
}

const settings = new Settings()
export default settings
