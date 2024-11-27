const express = require("express");
const { env } = require("process");
const path = require("path")
const routes = require("./routes/routes");

const app = express();
const PORT = env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server rodando em http://localhost:${PORT}`);
});
