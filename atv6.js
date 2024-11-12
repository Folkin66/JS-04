let idades = [16, 48, 23, 22, 45, 8, 12]

let maior18 = idades.filter( idade => idade > 18)

console.log(maior18);

idades.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
    
});