import adapter from './index';

export const {
  validateRoot,
  isList,
  toList,
  getLength,
  getNodeAt,
  isNode,
  toNode,
  getName,
  hasChild,
  getChildren,
  getChildrenByName,
  getChildAt,
  getNodeParent,
  getNodeRoot,
} = adapter;

export default adapter;
