export default class Utils {
  static delay = (milliseconds: number = 1000) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  static shuffleList(list: []) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }
}
