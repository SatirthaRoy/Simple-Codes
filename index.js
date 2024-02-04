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
  }
};

module.exports = simpleCodes;
