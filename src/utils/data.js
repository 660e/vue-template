import { is } from './is';

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

function flattenObjectTree(data, childrenKey) {
  const source = [data];
  const result = [];

  while (source.length) {
    const node = source.shift();
    const { [childrenKey]: children = [], ...rest } = node;
    source.unshift(...(children ?? []));
    result.push(rest);
  }

  return result;
}

function flattenArrayTree(data, childrenKey) {
  return data.flatMap((node) => flattenObjectTree(node, childrenKey));
}

export function flattenTree(data, options = {}) {
  const { childrenKey = 'children' } = options;

  if (is.array(data)) {
    return flattenArrayTree(data, childrenKey);
  }

  return flattenObjectTree(data, childrenKey);
}
