/**
 * setCursor
 * @param {HTMLNode} node input or textarea
 * @param {number} index index to set cursor
**/

function setCursor(node, index) {
  if (!node || !index) { return; }
  var r;
  if (node.setSelectionRange) {
    node.setSelectionRange(index, index);
  } else {
    r = node.createTextRange();
    r.collapse(true);
    r.select(index, index);
  }
}

