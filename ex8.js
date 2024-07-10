const num = [1, 2, 3, 4, 1, 2, 5, 7, 8];

const countOccurrences = num.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

for (const [key, value] of Object.entries(countOccurrences)) {
    console.log(`${key}: ${value}`);
}