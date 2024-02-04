const simpleCodes = {
  isString(s) {
    return typeof s === 'string';
  },

  capitalizeFirstLetter(s) {
    const a = s.split(' ');
    const b = a.map(word => {
      return word.replace(word[0], word[0].toUpperCase());
    });
    return b.join(' ');
  },

  removeDuplicates(a) {
    return a.filter((item,i)=>a.lastIndexOf(item)==i);
  },

  sortAscend(a) {
    return a.sort((a,b)=> a-b);
  },
  
  sortDescend(a) {
    return a.sort((a,b)=> b-a);
  },

  sumOfAllNums(a) {
    return a.reduce((initial, value) => initial + value,0);
  }
};

console.log(simpleCodes.sumOfAllNums([1,2,3,4,5]));

module.exports = simpleCodes;
