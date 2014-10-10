/**
 * Builds a hierarchy starting at the given parent. 
 * Returns an array of the non-leaf nodes in the hierarchy.
 */

function buildHierarchy(Model, Parent, KeyField, ParentKeyField) {
  var lNodes = new OrderedHashtable();

  // Grab all the parents current children before we start rearranging them
  for (var i = 0; i < Parent.getChildren().length; i++) {
    var lChild = Parent.getChildren()[i];
    var lKey = Model.getValue(KeyField);

    if (lKey === null) {
      lKey = new Object();
    }

    if (lKey in lNodes) {
      throw "Node with non-unique key: " + lKey;
    } else {
      lNodes[lKey] = lChild;
    }
  }

  // Return just the values of the lNodes hashtable
  var lNodeArray = lNodes.map(function(item) { return item.name });
  var lParents = new Array();

  for (var i = 0; i < lNodeArray.length - 1; i >= 0; i--) {
    var lNode = lNodeArray[i];
    var lParentKey = Model.getValue(lNode, ParentKeyField);
    var lKey = Model.getValue(lNode, KeyField);
    var lParent = null;

    if (lParentKey != null && lNodes.containsKey(lParentKey)) {
      lParent = lNodes.get(lParentKey);
      Model.insertNode(lNode, lParent);
      if (!lParents.contains(lParent)) {
        lParents.push(lParent);
      }
    } else {
      Model.insertNode(lNode, Parent);
    }
  }

  return lParents;
}
