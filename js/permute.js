/**
 * Remove all non-ELEMENT nodes from parent
 * and shuffle the first level order of the ones
 * left.
 *
 * @param  {HTMLElement} parent
 * @return {Boolean}
 */
function permuteChildren(parent)
{
    if (!parent || parent.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }

    var children = detachChildren(parent);

    shuffle(children).forEach(function(el){
        parent.appendChild(el);
    });

    return true;
}

/**
 * Detach and retrieve all children from element.
 *
 * @param  {HTMLElement} element
 * @return {Array}
 */
function detachChildren(element)
{
    var children = [],
        child;

    while (element.firstChild) {
        child = element.removeChild(element.firstChild);
        if (child.nodeType == Node.ELEMENT_NODE) {
            children.push(child);
        }
    }

    return children;
}

/**
 * Shuffle an array elements randomly modifying the original
 * array.
 *
 * Fisher-Yates shuffle implementation (via S.O.)
 *
 * @param  {Array}  array
 * @return {Array}
 */
function shuffle(array)
{
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
