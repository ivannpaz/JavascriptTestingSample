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

        it("will remove any item in A, that is also in B", function() {
            var result = array_intersect(
                [1, 2, 3, 8, 9],
                [2, 5, 9, 10, 12, 14]
            );
            expect(result).to.be.eql([1, 3, 8]);
        });

        it("will remove any item in B, that is also in A", function() {
            var result = array_intersect(
                [2, 5, 9, 10, 12, 14],
                [1, 2, 3, 8, 9]
            );
            expect(result).to.be.eql([5, 10, 12, 14]);
        });

        it("will return an empty array when all of B is present in A", function() {
            var result = array_intersect(
                [2, 5],
                [1, 2, 3, 4, 5, 6]
            );
            expect(result).to.be.eql([]);
        });

    });
});
