import { add } from './add.js'
export const clone = () => {
    let result = add('1', '2');
    console.log(Array.from(result));
}