export default class Utils {
  static delay = (milliseconds: number = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
}
