const request = require("supertest");
const db = require("../../data/dbConfig");
const Users = require("./auth-model");
const server = require("../server");

describe("auth-router", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
  
    describe("POST /register", () => {
      it("expect 201", async () => {
          await request(server)
            .post("/api/register")
            .send({ username: "asdasdas", password: "notpassword", email: "nice@try.com" })
            .then(res => {
              expect(res.status).toBe(201);
            });
      });
    });
  
    describe("POST /login", () => {
      it("expect 401 with no token", async () => {
        await Users.add({ username: "asdasdsa", password: "notpassword" });
  
        await request(server)
          .post("/api/login")
          .send({ username: "asdasdsa", password: "notpassword" })
          .then(res => {
            expect(res.status).toBe(401);
          });
      });
  
      it("should return JSON", async () => {
        await Users.add({ username: "xcvxvxc", password: "notpassword" });
  
        await request(server)
          .post("/api/login")
          .send({ username: "xcvxvxc", password: "notpassword" })
          .then(res => {
            expect(res.type).toMatch(/json/i);
          });
      });
    });
  });