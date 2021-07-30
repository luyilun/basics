class Check {
  /**
   * 是不是对象？
   * @param {any} obj
   * @returns {boolean}
   */
  static isPlainObject(obj: any): boolean {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  /**
   * 是不是数组？
   * @param {any} arr
   * @returns {boolean}
   */
  static isArray(arr: any): boolean {
    return Object.prototype.toString.call(arr) === "[object Array]";
  }
}
export default Check;
