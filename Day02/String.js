//=== strict equality compare values & data types. Preferred ,== compares values only

const { log } = require("console")

let name ="chrome"

let sname= new String("chrome")
let browser=new String("chrome")
let browsername = "chrome"
let browsername1 = "Chrome"

console.log(sname === browser)// false every time new creates new memory or objects in heap
console.log(name === browsername) // true compares strings bcz will compare only chars
console.log(sname==name)// compares characters true
console.log(sname==browsername1)//case sensitive so false

console.log(browser.length)

console.log(browser.indexOf('m'))

console.log(browser.replaceAll("o","a"))

console.log("Launch the " +browser + " browser")

console.log(`Launch the  ${browser}  browser`)

let rev =''
for(let i =name.length-1;i>=0;i--){
     rev +=  name.charAt(i)
}
console.log(rev)
console.log();
