import { describe, it } from 'mocha'
import { expect } from 'chai'
import capitalize from '../index.js'

describe("capitalize", function () {
    it("capitalizes single words", function () {
        expect(capitalize("express")).to.equal("Express");
        expect(capitalize("cat")).to.equal("Cat");
    });

    it("makes the rest od the string is lowercase", function () {
        expect(capitalize("ExpRess")).to.equal("Express");
        expect(capitalize("cat")).to.equal("Cat");
    })

    it("leaves empty strings alone", function () {
        expect(capitalize("")).to.equal("");
    })

    it("leaves capitalized words alone", function () {
        expect(capitalize("Express")).to.equal("Express");
    })

    it("Capitalize string object", function () {
        let str = new String("i love express, kinda.")
        expect(capitalize(str.valueOf())).to.equal("I love express, kinda.");
    })
})