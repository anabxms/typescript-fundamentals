// var count = 5;
// count = 'a';

let m; // Variable 'm' implicitly has an 'any' type, but a better type may be inferred from usage
m = 1;
m = true;
m = 'a';

let n:number;
let b:boolean;
let s:string;
let a:any;
let n_ar:number[] = [1,2,3];
let any: any[] = [1, true, 'a', false];

const color_red = 0;
const color_green = 1;
const color_blue = 2;

enum colors {red = 0, green = 1, blue = 2}
let bg_color = colors.red;