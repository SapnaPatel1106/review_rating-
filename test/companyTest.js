let server = require("../index");
let chaiHttp = require("chai-http");
var chai = require("chai");
const utils = require("../models/compModelSchema");
let routes = require("../Routers/companyRoutes");

chai.should();
chai.use(chaiHttp);

// describe("Add Company API", () => {
//     describe("POST/api/company", () => {
//         it("IT should return company added successfully" , (done)=>{
//             const data={
//                 companyName:"Codiant",
//                 companyId:"codiant@gmail.com",
//                 location:"IT park",
//                 city:"Indore",
//                 foundedOn:"01/01/2010",
//                 userId:"63cf590a6b54d65d485560b8",    
//             };
//             chai
//                 .request(server)
//                 .post("/company/addCompany/63cf590a6b54d65d485560b8")
//                 .set("Content-Type","application/x-www-form-urlencoded")
//                 .field(data)
//                 .attach("company_logo","/Users/patel/OneDrive/Pictures/sapna pic.jpeg","sapna pic.jpeg")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(201);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Company added successfully");
//                 done();
//             })
//         })

//     })
// });

// describe("Company list API", () => {
//     describe("GET/api/company", () => {
//         it("IT should return company list are displayed" , (done)=>{
//             const data ={

//             };
//             chai
//                 .request(server)
//                 .get("/company/getCompanyList")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Company list are displayed");
//                 done();
//             })
//         })

//     })
// });

// describe("Comapany detail API", () => {
//     describe("GET/api/company", () => {
//         it("IT should return company detail are displayed" , (done)=>{
//             const data ={

//             };
//             chai
//                 .request(server)
//                 .get("/company/companyDetail/63d371ddccaf5a195f76692f")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 done();
//             })
//         })

//     })
// });

// describe("Company list API", () => {
//     describe("GET/api/company", () => {
//         it("IT should return search company" , (done)=>{
//             const data ={
//                 city:"rewa"
//             };
//             chai
//                 .request(server)
//                 .get("/company/search")
//                 .send(data)
//                 .end((err, res) => {
//                 res.should.have.status(200);
//                 res.should.be.a("object");
//                 res.body.should.have.property("success").eq(true);
//                 res.body.should.have.property("message").eq("Company list are");
//                 done();
//             })
//         })
//     })
// })