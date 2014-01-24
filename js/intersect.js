/**
 * Filter an array returning only the values marked as
 * true by the provided method callback.
 *
 * @param  {array}      array
 * @param  {function}   method
 * @return {array}
 */
function filter(array, method)
{
    var selected = [];

    for (var i = 0; i <= array.length - 1; i++) {
        if (method(array[i])) {
            selected.push(array[i]);
        }
    }

    return selected;
}

/**
 * Remove from a, all items present in b.
 *
 * @param  {array} a        Base Operand.
 * @param  {array} b        Substracted Operand.
 * @param  {array} sorted   Perform sorted optimization.
 * @return {array}
 */
function array_intersect(a, b, sorted)
{
    return filter(a, function(item){
        for (var i = 0; i <= b.length - 1; i++) {
            if (item == b[i]) {
                return false;
            }
        }
        return true;
    });
}
