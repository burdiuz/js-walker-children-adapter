export const defaultGetNodeName = (node) => node.name;
export const defaultGetNodeChildren = (node) => node.children;

const createAdapter = (
  getNodeName = defaultGetNodeName,
  getNodeChildren = defaultGetNodeChildren,
) => {
  const adapter = {
    validateRoot: (item) => item,

    // list methods
    isList: (item) => item instanceof Array,
    toList: (item) => (adapter.isList(item) ? item : [item]),
    getLength: (item) => adapter.toList(item).length,
    getNodeAt: (item, index = 0) => adapter.toList(item)[index],

    // node methods
    isNode: (item) => item instanceof Object && !adapter.isList(item),
    toNode: (item) => (adapter.isList(item) ? item[0] : item),
    getName: (item) => {
      const node = adapter.toNode(item);

      return node ? getNodeName(node) : '';
    },
    hasChild: (item, name) => !!adapter.getChildrenByName(item, name).length,
    getChildren: (item) => {
      const node = adapter.toNode(item);
      return (node && getNodeChildren(node)) || [];
    },
    getChildrenByName: (item, name) =>
      adapter
        .getChildren(item)
        .filter((child) => adapter.getName(child) === name),
    getChildAt: (item, index = 0) => adapter.toNode(item).children[index],
    getNodeParent: () => {
      throw new Error('adapter.getNodeParent() is not implemented.');
    },
    getNodeRoot: () => {
      throw new Error('adapter.getNodeRoot˝() is not implemented.');
    },
  };
};

export default createAdapter;
