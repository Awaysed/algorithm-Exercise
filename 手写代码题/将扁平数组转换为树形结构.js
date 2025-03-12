function flatArrayToTree(arr) {
  const root = []; // 保存根组件
  const map = new Map(); // 储存树节点
  for (let item of arr) {
    const node = { ...item, children: [] };
    map.set(node.id, node); // 保存每一项数据
  }
  arr.forEach((item) => {
    const node = map.get(item.id) // 取出相应的值
    const parentId = node.parentId; // 
    if (parentId && map.get(parentId)) {
      const parent = map.get(parentId); // 有父元素就加入它的节点
      parent.children.push(node);
    } else {
      root.push(node); // 没有就加入根元素
    }
  });
  return root;
}

// 测试示例
const flatData = [
  { id: 1, parentId: null, name: "Root" },
  { id: 2, parentId: 1, name: "Child 1" },
  { id: 3, parentId: 1, name: "Child 2" },
  { id: 4, parentId: 2, name: "Grandchild" },
  { id: 5, parentId: 10, name: "Orphan" }, // 测试孤儿节点（parentId 不存在）
];

console.log(flatArrayToTree(flatData));
