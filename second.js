// start 1
let i = 0;
while (7 >= i) {
    console.log(i);
    i++;
}
// end 1

// start 2
let i_2 = 10;
do {
    console.log(i_2);
    i_2++;
} while (i_2 < 3);
// end 2

// start 3
for (let i_3 = 0; i_3 <= 10; i_3++) {
    console.log(i_3);
}
// end 3

// start 4
let i_4 = 0;

for (; i_4 <=5; i_4++) {
    console.log(i_4);
}
// end 4

// start 5
let i_5 = 0;

for (; i_5 <= 2;) {
    console.log(i_5++);
}
// end 5

// start 6
let i_6 = 0;
for (; i_6 <= 6; i_6++) {
    console.log (i_6);
    if (i_6 == 3) break;
}
console.log(`Конец цикла, break на ${i_6}`);    
// end 6