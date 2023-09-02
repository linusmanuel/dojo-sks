let a = 1;
let b = 2;
let c = 3;
let d = 10;

let teste1 = d + a < c + 4;
console.log(teste1);
if (d + a < c + 4) {
	const res = a + b + c + d;
	console.log(`Valor de R é: ${res}`);
} else {
	const res = a - b + c - d;
	console.log(`Valor de R é: ${res}`);
}
