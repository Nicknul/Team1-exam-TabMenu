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

// console.log(string.main('정호연'));

module.exports = string;
