const ulTag = require('../module/ul_hy');

const string = {
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

let a = ulTag('<li></li>');

let test = string.main(a, './li_hy.ts');

// console.log(test);

module.exports = string;
