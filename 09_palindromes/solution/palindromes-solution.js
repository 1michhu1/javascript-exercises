const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(processedString)
  processedString.split("").reverse().join("")
  console.log(processedString)
  return processedString.split("").reverse().join("") == processedString;
};

palindromes('r3acecar')

module.exports = palindromes;
