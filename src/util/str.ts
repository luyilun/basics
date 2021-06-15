class Str {
  /**
   * 去除全部空格
   * @param val
   * @returns
   */
  static strip = function (val: string) {
    return val.replace(/\s*/g, "");
  };
  /**
   * 去除两边空格
   * @param val
   * @returns
   */
  static trim = function (val: string) {
    if(val.trim){
      return val.trim();
    }
    return val.replace(/^\s*|\s*$/g, "");  
  };
  /**
   * 去除左侧空格
   * @param val 
   * @returns 
   */
  static trimLeft = function(val: string){
    if(val.trimLeft){
      return val.trimLeft();
    }
    return val.replace(/^\s*/g, "");
  }
  /**
   * 去除右侧空格
   * @param val 
   * @returns 
   */
  static trimRight = function(val: string){
    if(val.trimRight){
      return val.trimRight();
    }
    return val.replace(/\s*$/g, "");
  }
}
export default Str;
