export default getFilesList(require.context('./', true, /\.js$/));

function getFilesList(r) {
  return r.keys().reduce((container, path) => {
    const key = path.replace(/\.\/(.*)\.js/, '$1');
    const value = r(path).default;
    container[key] = value;
    return container;
  }, {});
}
