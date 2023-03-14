let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/reviewModelSchema");
let routes = require("../Routers/reviewRoutes");

chai.should();
chai.use(chaiHttp);

// describe("Add Review API", () => {
//     describe("POST/api/review", () => {
//         it("IT should return review added successfully" , (done)=>{
//             const data={
//                 enterYourReview:"Good evening",
//                 rating:"5",
//                 userId:"63ce126045c416b45d74702b",
//                 company_id:"63d371ddccaf5a195f76692f",
//             };
//             chai
//                 .request(server)
//                 .post("/review/addReview")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Review added successfully");
//                 done();
//             })
//         })

//     })
// });

// describe("Update Review API", () => {
//     describe("PATCH/api/review", () => {
//         it("IT should return review deleted successfully" , (done)=>{
//             const data={
//                 enterYourReview: "Good environment and",
//                 rating : "5",
//                 company_id:"63d371ddccaf5a195f76692f",
//                 userId :"63d0b8b7b1eb61a4a4afb087",
//             };
//             chai
//                 .request(server)
//                 .patch("/review/updateReview/63dccd273e90682b659635ec")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(202);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Review update successfully");
//                 done();
//             })
//         })

//     })
// });

// describe("Delete Review API", () => {
//     describe("DELETE/api/review", () => {
//         it("IT should return review deleted successfully" , (done)=>{
//             const data={
                
//             };
//             chai
//                 .request(server)
//                 .delete("/review/deleteReview/64103e0ebc745f9ec19e649c")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq("success");
//                 res.body.should.have.property("message").eq("Review delete successfully");
//                 done();
//             })
//         })

//     })
// });

describe("List Review API", () => {
    describe("GET/api/review", () => {
        it("IT should display review list" , (done)=>{
            const data={
                
            };
            chai
                .request(server)
                .get("/review/listReview/63d371ddccaf5a195f76692f")
                .send(data)
                .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Review list are displayed");
                done();
            })
        })

    })
});

describe("Detail Review API", () => {
    describe("GET/api/review", () => {
        it("IT should display review details" , (done)=>{
            const data={
                
            };
            chai
                .request(server)
                .get("/review/reviewDetail/63dba0d4bcf4b7f2fd1df881")
                .send(data)
                .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("success").eq("success");
                res.body.should.have.property("message").eq("Here is the review");
                done();
            })
        })

    })
});
