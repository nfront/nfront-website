let count = 0;
const foo = () => { count++; if(count < 3) foo(); console.log(count); count--; }
foo();
// Logs 3, 2, 1, showing that steps after the recursive function call (eg the log statement) are executed for the last recursive call first.
// Then it continues with the second call, and finally the first call.
// It happens that way because the call stack is LIFO.
