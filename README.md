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
This adapter is created to be used with [Tree Walker library](https://github.com/burdiuz/js-tree-walker),
check its documentation on how to specify adapter. This adapter was used in [Tree Walker Demo](https://jsfiddle.net/actualwave/6kw7z4xj/).
