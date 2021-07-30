import Str from "./str";
class Util {
  /**
   * 柯里化字符串或数字叠加
   * @returns
   */
  static currying(): object {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    const _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    const _adder = function () {
      _args.push(...arguments);
      return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    };
    return _adder;
  }
  /**
   * compose函数
   * @returns
   */
  static compose(): object {
    const args = [].slice.apply(arguments);
    return function (x: any) {
      return args.reduceRight((res, cb: any) => cb(res), x);
    };
  }
}
export default Util;
export { Str };
