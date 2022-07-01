function topThreeWords(text) {
  // returns an empty array if the given value is empty
  if (text.length === 0) return [];

  // object could have also be used, i like the map approach
  let map = new Map();  
  modifiedText = text
  .toLowerCase()
  .split(' ')
  // replaces all commas and dots from array values
  .map(item => item.replace(/[,.#/\\]/g,''))
  // now deletes words that equal '
  .map(item => item === "'" ? delete item : item)
  .filter(Boolean)
  // adding array values according to their frequency
  .forEach(key => map.has(key) ? map.set(key, map.get(key) + 1): map.set(key, 1));
  
  // the first variant to sort a map according to values
  // const sortStringValues = function([,a], [,b]) {
  //   String(a).localeCompare(b);
  //   if (a > b) return -1
  //   else if (a < b) return 1;
  //   return 0;
  // }
    
  // the second one
  let sortedMap = new Map(Array
    .from(map)
    // 0 is a key, 1 is a value
    .sort((a, b) => b[1] - a[1])
  );

  // adding only the first 3 most frequent values to a variable
  let values = Array
  .from(sortedMap.keys())
  .slice(0, 3);

  return values;
}

// returns [ 'a', 'of', 'on' ];
console.log(topThreeWords(`In a village ' of La ' Mancha, the ' name of which I have no desire to call tomind, there lived not long since one of those gentlemen that keep a lancein the lance-rack, an old buckler, a lean hack, and a greyhound forcoursing. An olla of rather more beef than mutton, a salad on mostnights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extraon Sundays, made away with three-quarters of his income.`));
