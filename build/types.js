// function swap<T>(num1: T, num2: T): [T, T] {
//     return [num1 , num2];
// }
// let [num1, num2] = swap(5, 10);
// console.log(num1, num2);
function assertString(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
}
try {
    assertString('Hello'); // OK
    // assertString(123);     // Bu yerda xato chiqariladi
}
catch (err) {
    if (err instanceof Error) {
        console.error('Xato:', err.message); // Error tipiga o'girib, messagega murojaat qilish
    }
    else {
        console.error("Noma'lum xato:", err);
    }
}
export {};
// function assertString(input: any): void {
//     if (typeof input !== 'string') {
//         throw new Error('Input must be a string');
//     }
// }
// try {
//     assertString('Hello'); // OK
//     assertString(123);     // Bu yerda xato chiqariladi
// } catch (error) {
//     console.error('Xato:', error.message); // Vergul bilan xatoni chiqarish
// }
//# sourceMappingURL=types.js.map