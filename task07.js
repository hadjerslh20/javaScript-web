// 1. Create variable name (fruit) store "Banana".
// 2. If case is "Banana" print "Banana is good!".
// 3. If case is "Orange" print "I am not a fan of Orange".
// 4. If case is "Apple" print "How you like them apples ?".
// 5. Default "I have never heard of that fruit".
let fruit = "Banana";
switch(fruit) {
    case "Banana":
        console.log(`${fruit} is good!`);
        break;
    case "Orange":
        console.log(`I am not a fan of ${fruit}`);
        break;
    case "Apple":
        console.log(`How you like them ${fruit}s ?`);
        break;
    default:
        console.log("I have never heard of that fruit");
}



