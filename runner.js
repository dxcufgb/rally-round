process.env.DEBUG = "tkidman:*";
if (process.argv.length < 3) {
  require("dotenv").config();
}
if (process.argv[2] && process.argv[3]) {
  process.env.DIRT_USERNAME = process.argv[2];
  process.env.DIRT_PASSWORD = process.argv[3];
}

if (process.argv[4]) {
  process.env.CLUB = process.argv[4];
}
process.env.LOCALE = "se";
const { processAllDivisions } = require("./src");

processAllDivisions();
