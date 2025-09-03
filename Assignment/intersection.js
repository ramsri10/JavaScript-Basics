function intersection(arr1, arr2) 
{
    let result =[];

    if(typeof arr1 ==='string'){
        arr1=arr1.replace(/\s/g,'').split('')
    }

    if(typeof arr2 ==='string'){
        arr2=arr2.replace(/\s/g,'').split('')
    }
    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
            result.push(arr1[i])
        }
        
    }return result
}

let array1=[1, 2, 2, 3, 4, 5];
let array2 = [3, 4, 4, 5, 6, 7];


console.log(intersection(array1,array2));
console.log(intersection(['E','N','G','L','I','S','H','i'],['E','N','G','L','i']));
console.log(intersection('H E L L O','Hello'));
