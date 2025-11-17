import Express = require("express");

const app = Express();
const port = 8081;

app.get("/", (req, res) => {
  res.send("Hello, This is Hmo!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
