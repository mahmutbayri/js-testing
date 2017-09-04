import Player from '../js/Player';

//http://www.syntaxsuccess.com/viewarticle/writing-jasmine-unit-tests-in-es6
describe("explore setup teardown", function () {

    // var a = 0;
    // var b = 0;
    //
    // it("test 1", function () {
    //     console.log(a, 's');
    //     a++;
    // })

    it("basic function", function () {
        let result = someFunction();
        expect(result).toBe(2);
    })

    it("test es 2016", function () {

        let result = (new Player).say();

        expect(result).toBe("hellow");
    })
});
