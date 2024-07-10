function sumAll(...args) {
    return args.reduce((acc, current) => acc + current, 0);
}

// Examples
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3, 4, 5)); // 15