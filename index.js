const express = require("express");
const cron = require("node-cron");
const axios = require("axios");

const app = express();
const port = 3000;
const token_line = "LMRFWxEzwOtpAtooVZEJvhEoo3KMYeaoVPPUYYDXV4t"; // 1on1

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const BASE_URL = "https://notify-api.line.me/api/notify";
let config = {
  headers: {
    Authorization: `Bearer ${token_line}`,
  }
}

let data = {
  message: 'something you would like to push',
};
const notiLine = async (message) => {
  console.log(message);
  // try {
  //   const response = await axios.post(`${BASE_URL}?message=ssss`,{},config);

  //   const todoItems = response.data;

  //   console.log(`GET: Here's the list of todos`, todoItems);
  //   return todoItems;
  // } catch (errors) {
  //   console.error(errors);
  // }
};

cron.schedule("*/1 * * * *", function () {
  try {
    notiLine();
  } catch (err) {
    console.log(err);
  }
});
