'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const defaultGetNodeName = node => node.name;
const defaultGetNodeChildren = node => node.children;

const createAdapter = (getNodeName = defaultGetNodeName, getNodeChildren = defaultGetNodeChildren) => {
};

exports.defaultGetNodeName = defaultGetNodeName;
exports.defaultGetNodeChildren = defaultGetNodeChildren;
exports.default = createAdapter;
//# sourceMappingURL=index.js.map
