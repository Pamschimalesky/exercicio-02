let salario = [1800, 2500, 1990, 4700, 5200, 1500, 3590, 4000, 1750, 2000]

console.log(salario);

let salarioAumento = salario.map(sal => sal <= 2000 ? sal * 1.15  :  sal * 1.1)

console.log(salarioAumento);

let salarioSuperior = salarioAumento.filter(sal => sal >= 2500 )

console.log(salSuperior)

let salarioSoma = salarioAumento.reduce((acumulador, sal) => acumulador + sal)

console.log(salarioSoma);