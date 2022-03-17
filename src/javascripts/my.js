// export default function() { ↓同じ意味
export default () => {
    const obj = { a: 1, b: 2 };
    const newObj = { ...obj, c: 3 };
    console.log('this is module', newObj);
}
