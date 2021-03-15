const ExtraTestConfig = {
  useNgBullet: true,
  cleanStylesAfterAll: true,
};

export default ExtraTestConfig;

export function cleanStylesFromDom(): void {
  const head: HTMLHeadElement = document.getElementsByTagName('head')[0];
  const styles: HTMLCollectionOf<HTMLStyleElement> | [] = head.getElementsByTagName('style');
  for (let i = 0; i < styles.length; i++) {
    head.removeChild(styles[i]);
  }
}
