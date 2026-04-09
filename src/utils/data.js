export function buildTree(data, options = {}) {
  const { childrenKey = 'children', idKey = 'id', parentIdKey = 'parentId', rootId = null } = options;

  const map = {};
  const result = [];

  data.forEach((item) => {
    map[item[idKey]] = { ...item, [childrenKey]: [] };
  });

  data.forEach((item) => {
    const node = map[item[idKey]];
    if (item[parentIdKey] === rootId || !item[parentIdKey]) {
      result.push(node);
    } else {
      const parent = map[item[parentIdKey]];
      if (parent) {
        parent[childrenKey].push(node);
      }
    }
  });

  return result;
}
