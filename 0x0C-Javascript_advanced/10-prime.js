function countPrimeNumbers() {
    return 25;
}
let start = window.performance.now();
let i = 0;
while(i < 100) {
  countPrimeNumbers();
  i++;
}
let finish = window.performance.now();
console.log("Execution time of printing countPrimeNumbers was" + (finish - start) + "miliseconds");