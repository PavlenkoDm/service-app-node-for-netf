const app = require("./src/app");

const { PORT } = process.env;

try {
  app.listen(PORT, () => {
    console.log(`Server is running... Use API on port: ${PORT}`);
  });
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
