/** @format */

import routes from "./routes/index.js";
import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", routes);

app.use((err, request, response, _) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Todo arriba en el puerto: ${port}`);
});
export default app;
