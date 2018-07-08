class CompareUtil {
    static objIsEmpty(obj) {
        if (JSON.stringify(obj) === "{}") { return true } else { return false }
    }

    static arrayIsEmpty(obj) {
        if (JSON.stringify(obj) === "[]") { return true } else { return false }
    }
}
export default CompareUtil;
