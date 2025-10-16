const palindromes = function (str) {
  const text = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return text === text.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
