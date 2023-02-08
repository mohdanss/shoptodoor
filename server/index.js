import { createServer } from "http";
import app from "./app.js";
const server = createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT || 5000;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
