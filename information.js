const myObject = {
    name: 'adele',
    campus: 'bordeaux',
}

console.log(myObject.name);
console.log(myObject.campus);

module.exports = {
    name: myObject.name,
    campus: myObject.campus,
};