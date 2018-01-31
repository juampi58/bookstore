var Request = require("request");

describe("Server", () => {
    var server;
    beforeEach(() => {
        server = require("../server");
    });
    // afterEach(() => {
    //     server.close();
    // });
    describe("GET /", () => {
        var data = {};
        beforeEach((done) => {
            Request.get("http://localhost:8080/book", (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        // it("Body", () => {
        //     expect(data.body).toBe();
        // });
    });
    // describe("GET /test", () => {
    //     var data = {};
    //     beforeAll((done) => {
    //         Request.get("http://localhost:3000/test", (error, response, body) => {
    //             data.status = response.statusCode;
    //             data.body = JSON.parse(body);
    //             done();
    //         });
    //     });
    //     it("Status 200", () => {
    //         expect(data.status).toBe(500);
    //     });
    //     it("Body", () => {
    //         expect(data.body.message).toBe("This is an error response");
    //     });
    // });
});