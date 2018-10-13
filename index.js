fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFunction) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i];
          callbackFunction(item, i, collection);
        }
      } else {
        for (const key in collection) {
          const item = collection[key];
          callbackFunction(item, key, collection);
        }
      }
      return collection;
    },
 
    map: function(collection, callbackFunction) {
      let result = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i];
          const mappedValue = callbackFunction(item, i, collection);
          result.push(mappedValue);
        }
      } else {
        for (const key in collection) {
          const item = collection[key];
          const mappedValue = callbackFunction(item, key, collection);
          result.push(mappedValue);
        }
      }
      return result;
    },

    reduce: function(collection, callbackFunction, acc = 0) {
      for (i = 0; i < collection.length; i++) {
        element = collection[i]
        acc = callbackFunction(acc, element, collection);
      }
      return acc  
    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i];
          
          if (predicate(item)) {
            return item
          }
        } 
    },

    filter: function(collection, predicate) {
      let result = []
      for (let i = 0; i < collection.length; i++) {
        const item = collection[i];
        
        if (predicate(item)) {
          result.push(item)
        }
      } return result
    },

    size: function(collection) {
      return (Array.isArray(collection)) ? collection.length : Object.keys(collection).length
    },
    
    first: function(array, n=1) {
      if (n > 1) {
        return array.slice(0, n)
      } 
      else {
        return array[0]
      }
    },

    last: function(array, n = 1) {
      if (n > 1) {
        return array.slice(-(n))
      } 
      else {
        return array.slice(-1)[0]
      }
    },

    compact: function(array) {
      let goodArray = []
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item) {
          goodArray.push(item)
        } 
      } return goodArray
    },

    sortBy: function(array, callback) {
      newArray = [...array]
      return newArray.sort(function (a, b) {
        return callback(a) - callback(b)
      })
    },

    uniq: function() {

    },

    keys: function(object) {
      return Object.keys(object)
    },
    values: function(object ) {
      return Object.values(object)
    },
    functions: function(object) {
      let functionArr = []
      for (const key in object) {
        if (typeof object[key] === 'function') {
          functionArr.push(key)
        }
      } return functionArr.sort()
    },


  }
})()

fi.libraryMethod()
