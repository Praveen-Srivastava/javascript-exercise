function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);

//In this x is undefined because javascript will break this into following
function foo() {
let x;
let y=0;
x++;
y++;
}
