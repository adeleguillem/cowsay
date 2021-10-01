const cowsay = require("cowsay");

const myInfos = require('./information');

console.log(myInfos);



console.log(cowsay.say({
    text : `Hello I m ${myInfos.name} from ${myInfos.campus}`,
    e : "oO",
    T : "U "
}));