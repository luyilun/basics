class Check {
    /**
     * 是不是对象？
     * @param obj
     * @returns
     */
    static isPlainObject(obj: any) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }
    /**
     * 是不是数组？
     * @param arr
     * @returns
     */
    static isArray(arr: any) {
        return Object.prototype.toString.call(arr) === "[object Array]";
    }
}
export default Check;
