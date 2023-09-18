import { add } from './add.js'
export const clone = () => {
    let result = add('1', '21');
    console.log(Array.from(result));
}