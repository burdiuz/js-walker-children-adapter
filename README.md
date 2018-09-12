# Object Adapter for TreeWalker

Adapter for Object tree that uses `children` property for child nodes.
Each node of source structure must have `name:String` and `children:Node[]` properties.
```typescript
interface Node {
  name: string;
  children: Node[];
}
```

Source example:
```javascript
const sourceTree = {
  name: 'root',
  children: [
    { name: 'branch', children: [] },
    {
      name: 'branch',
      children: [
        { name: 'leaf', children: [] },
      ],
    },
    { name: 'branch', children: [] },
  ]
};
```

### How to use
Library exports adapter factory function `createAdapter()` that accepts two optional arguments:
* **getNodeName:Function** -- Getter function to retrieve node name, default getter returns `node.name` property.
* **getNodeChildren:Function** -- Getter function to retrieve list of node children, default getter returns `node.children` property.
You can pass your own getters:
```
import { create, setDefaultAdapter } from '@actualwave/tree-walker';
import createAdapter from '@actualwave/walker-children-adapter';

const adapter = createAdapter(
  (node) => node.label, // name getter
  (node) => node.list, // children getter
);

setDefaultAdapter(adapter);
```

This adapter is created to be used with [Tree Walker library](https://github.com/burdiuz/js-tree-walker),
check its documentation on how to specify adapter. This adapter was used in [Tree Walker Demo](https://jsfiddle.net/actualwave/6kw7z4xj/).
