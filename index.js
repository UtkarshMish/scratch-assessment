import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join("./frontend", "build")));
app.use(["/*"], function handleRequest(_req, res, _next) {
	return res.sendFile(join(__dirname, "./frontend/build", "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log("server strted on port: " + port));
