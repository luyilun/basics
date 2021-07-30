import check from "./check";
class Obj {
  /**
   * 深度复制对象
   * @param source
   * @param target
   * @param isDeep
   */
  static extend(
    source: object | any,
    target: object | any,
    isDeep: boolean
  ): void {
    let key: string = "";
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        if (
          isDeep &&
          (check.isPlainObject(source[key]) || check.isArray(source[key]))
        ) {
          // source[key] 是对象，而 target[key] 不是对象， 则 target[key] = {} 初始化一下，否则递归会出错的
          if (
            check.isPlainObject(source[key]) &&
            !check.isPlainObject(target[key])
          ) {
            target[key] = {};
          }
          // source[key] 是数组，而 target[key] 不是数组，则 target[key] = [] 初始化一下，否则递归会出错的
          if (check.isArray(source[key]) && !check.isArray(target[key])) {
            target[key] = [];
          }
          // 执行递归
          this.extend(target[key], source[key], isDeep);
        }
        // 不满足以上条件，说明 source[key] 是一般的值类型，直接赋值给 target 就是了
        else if (source[key] !== undefined) {
          target[key] = source[key];
        }
      }
    }
  }
  /**
   * 可复制一个或多个对象到一个新对象中
   * @returns
   */
  static extends(): object {
    let target: object = {};
    let isDeep = false,
      args: Array<any> = [].slice.call(arguments, 0);

    //第一个参数为boolean值时，表示是否深度合并
    if (typeof args[0] === "boolean") {
      isDeep = args.shift();
      //target取第二个参数
      target = args.shift();
    }
    // 遍历后面的参数，都合并到target上
    args.forEach((arg) => {
      this.extend(target, arg, isDeep);
    });
    return target;
  }
}
export default Obj;
