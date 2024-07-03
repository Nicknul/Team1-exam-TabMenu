const string = {
  main: (content: string) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MAIN</title>
  </head>
  <body>
    <div id="root">
      <h1>${content}</h1>
    </div>
  </body>
</html>
`;
  },
};

// console.log(string.main('정호연'));

module.exports = string;
