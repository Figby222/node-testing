import index from "../routers/api/v1/v1Router.mjs";

const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

Test("index route works", (done) => {
    request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect({ name: "quom" })
        .expect(200, done)
})