const arr =[5,7,45,32,124,6]
arr.sort(comparenums);
function comparenums(firstnum ,secondnum) {
if (firstnum ===3) {
    return -1;
}
if (secondnum ==3) {
    return -1;
}

    return firstnum - secondnum;
}
console.log(arr);