describe("permuteChildren", function() {

    /**
     * Helper shortcut.
     *
     * @type {HTMLDocument}
     */
    var d = window.document;

    /**
     * HTML Fixture code
     *
     * @type {String}
     */
    var html = [
        '<ul id="fixture_list">',
            '<li>Apple',
                '<ul>',
                    '<li>Golden</li>',
                    '<li>Lady</li>',
                '</ul>',
            '</li>',
            '<li>Strawberry</li>',
            '<li>Lemon</li>',
            'This/these text node(s) will be removed by permuteChildren()',
        '</ul>'
    ].join();


    beforeEach(function() {
        var element = d.createElement('div');
        element.id = 'testing_placeholder';
        element.innerHTML = html;
        d.body.appendChild(element);
    });

    afterEach(function() {
        d.body.removeChild(d.getElementById('testing_placeholder'));
    });

    /**
     * shuffle @ /js/permute.js
     */
    describe("shuffle", function() {

        it("will randomize an array items order", function()
        {
            var original = [2, 5, 9, 10, 12, 14],
                subject = original.slice(0);

            var result = shuffle(subject);

            expect(result).to.not.be.eql(original);
            expect(result).to.include.members(original);
        });

        it("will work with just one item", function()
        {
            var original = [1],
                subject = original.slice(0);

            var result = shuffle(subject);

            expect(result).to.be.eql(original);
        });

        it("will not fail with an empty array", function()
        {
            var original = [],
                subject = original.slice(0);

            var result = shuffle(subject);

            expect(result).to.be.eql(original);
        });

    });

    /**
     * detachChildren @ /js/permute.js
     */
    describe("detachChildren", function() {

        it("will clean the object from its children", function()
        {
            var subject = d.getElementById('fixture_list');
            var result = detachChildren(subject);
            expect(subject.hasChildNodes()).to.be.eql(false);
        });

        it("will return all detached children that are elements", function()
        {
            var subject = d.getElementById('fixture_list');
            var result = detachChildren(subject);
            expect(result).to.have.length(3);
        });

    });

    describe("permuteChildren", function() {

        it("will return false if not an HTMLElement", function()
        {
            expect(permuteChildren('not_an_object')).to.be.eql(false);
        });

        it("will return true if succesful", function()
        {
            var subject = d.getElementById('fixture_list');

            expect(permuteChildren(subject)).to.be.eql(true);
            expect(subject.children.length).to.be.eql(3);
        });

    });
});
