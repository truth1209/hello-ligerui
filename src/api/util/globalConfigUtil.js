class GlobalConfigUtil {
    static getGlobalConfig() {
        try {
            let btn = document.getElementById('hidGlobalConfig')
            let globalConfig = JSON.parse(btn.value);
            return globalConfig;
        }
        catch (e) {
            return {}
        }
    }
}
export default GlobalConfigUtil;
