import test from "../routers/api/v1/testRouter.mjs";

import request from "supertest";

import express from express;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/", test);

test("test route works", (done) => {
    request(app)
        .post("/test")
        .type("form")
        .send({ item: "hey" })
        .then(() => {
            request(app)
                .get("/test")
                .expect({ array: ["hey" ]}, done)
        });
        
})