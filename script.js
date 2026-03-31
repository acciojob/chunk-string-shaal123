function stringChop(str, size) {
  // If string is null, return empty array
  if (str === null) {
    return [];
  }

  // Convert size to number
  size = Number(size);

  let result = [];

  // Loop through string in steps of size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));