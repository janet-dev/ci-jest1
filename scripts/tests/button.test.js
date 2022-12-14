/**
 * @jest-environment jsdom
 */

// Mocking
 const buttonClick = require("../button");

 beforeAll(() => {
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });