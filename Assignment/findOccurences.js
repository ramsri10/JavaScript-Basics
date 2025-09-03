function findOccurences(num, n) {
    let count = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] == n) {
            count++

        }

    } return count 

}
console.log(findOccurences([2, 4, 5, 2, 1, 2,2], 2));


const num=[2,4,5,2,1,2]
const n=2

let count=0

for(let i=0;i<num.length;i++){
    if (num[i]==n) {
        
    
    count++
    }
} 

console.log(`The count of ${n} is present ${count} times`);

