class Str {
  /**
   * 去除全部空格
   * @param val
   * @returns
   */
  static strip(val: string): string {
    return val.replace(/\s*/g, "");
  }
  /**
   * 去除两边空格
   * @param val
   * @returns
   */
  static trim(val: string): string {
    if (val.trim) {
      return val.trim();
    }
    return val.replace(/^\s*|\s*$/g, "");
  }
  /**
   * 去除左侧空格
   * @param val
   * @returns
   */
  static trimLeft(val: string): string {
    if (val.trimLeft) {
      return val.trimLeft();
    }
    return val.replace(/^\s*/g, "");
  }
  /**
   * 去除右侧空格
   * @param val
   * @returns
   */
  static trimRight(val: string): string {
    if (val.trimRight) {
      return val.trimRight();
    }
    return val.replace(/\s*$/g, "");
  }
}
export default Str;
