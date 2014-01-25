describe("Array Intersection", function() {

    describe("filter", function() {

        it("will return all integers bigger than 5", function() {
            var base = [1, 2, 3, 8, 9];
            var result = filter(base, function(item) {
                return item > 5;
            });
            expect(result).to.be.eql([8, 9]);
        });

        it("will return an empty array", function() {
            var base = [1, 2, 3, 8, 9];
            var result = filter(base, function(item) {
                return false;
            });
            expect(result).to.be.eql([]);
        });

        it("will return the same exact array", function() {
            var base = [1, 2, 3, 8, 9];
            var result = filter(base, function(item) {
                return true;
            });
            expect(result).to.be.eql(base);
        });

    });

    describe("array_intersect", function() {

        var setA = [1, 2, 3, 8, 9],
            setB = [2, 5, 9, 10, 12, 14],
            setC = [2, 5],
            setD = [2, 3, 4, 5];

        var expectedAminusB = [1, 3, 8],
            expectedBminusA = [5, 10, 12, 14];

        it("will remove any item in setA, that is also in setB", function()
        {
            var result = array_intersect(setA, setB);
            expect(result).to.be.eql(expectedAminusB);
        });

        it("will remove any item in setB, that is also in setA", function()
        {
            var result = array_intersect(setB, setA);
            expect(result).to.be.eql(expectedBminusA);
        });

        it("will return an empty array when all of B is present in A", function()
        {
            var result = array_intersect(setC, setD);
            expect(result).to.be.eql([]);
        });

    });
});
