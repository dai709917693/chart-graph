export const ObjForEach = function(obj, callback) {
  var propertys = Object.keys(obj);
  propertys.forEach((v) => {
    callback(obj[v], v)
  })
}
export const ObjMap = function(obj, callback) {
  var propertys = Object.keys(obj);
  var newObj = {};
  propertys.forEach((v) => {
    newObj[v] = callback(obj[v], v)
  })
  return newObj
}