let nota_str = 'F';
let nota_int;

switch(nota_str){
    case 'A+':
        nota_int = 10; break;
    case 'A':
        nota_int = 9; break;
    case 'B+':
        nota_int = 8; break;
    case 'B':
        nota_int = 7; break;
    case 'C+':
        nota_int = 6; break
    case 'C':
        nota_int = 5; break
    case 'D+':
        nota_int = 4; break
    case 'D':
        nota_int = 3; break
    case 'E+':
        nota_int = 2; break
    case 'E':
        nota_int = 1; break
    case 'F':
        nota_int = 0; break
}

console.log(`A nota e ${nota_int}`);