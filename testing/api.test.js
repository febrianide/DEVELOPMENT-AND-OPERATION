const request = require("supertest");
const app = require("../source/application");

describe("API Root Test", () => {

  test("should return CI message", async () => {

    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Node CI Pipeline Active");

  });

});