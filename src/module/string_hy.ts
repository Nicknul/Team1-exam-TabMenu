import ul from '../module/ul_hy';

const string = {
  /**
   * * 24.07.03 (Wed) 정호연
   * * HTML 구조 모듈화
   * @param content <ul>, <li> tag
   * @param src ./dist/module/???.js
   * @returns HTML 구조
   */
  main: (content: string, src: string) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MAIN</title>
  </head>
  <body>
    <div id="root">
      ${content}
    </div>
  </body>
  <script src="${src}"></script>
</html>
`;
  },
};

let a = ul('<li></li>');
let test = string.main(a, './li_hy.ts');

// console.log(test);

module.exports = string;
