// const object = { a: 1, b: 2, c: 3, d: 4 };
// function filterProps(obj, ...propsToFilter) {
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key]) => !propsToFilter.includes(key))
//     );
// }

// // Example
// console.log(filterProps(object,'b','d')); // { a: 1, c: 3 }



// const object = { a: 1, b: 2, c: 3, d: 4 };
// function filterProps(obj,...propsToFilter){
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key])=>{
//             return !propsToFilter.includes(key);
//         })
//     );
// }
// console.log(filterProps(object,'b','d'));


















const object = { a: 1, b: 2, c: 3, d: 4 };
function filterProps(obj,...propsToFilter){
    return Object.fromEntries(
        Object.entries(obj).filter(([key])=>{
            return !propsToFilter.includes(key); 
        })
    )
}
console.log(filterProps(object,'b','d'));