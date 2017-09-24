export default getFilesList(require.context('./', true, /\.vue$/));

function getFilesList(r) {
  return r.keys().reduce((container, path) => {
    const key = path.replace(/\.\/(.*)\.vue/, '$1');
    const value = r(path).default;
    container[key] = value;
    return container;
  }, {});
}
