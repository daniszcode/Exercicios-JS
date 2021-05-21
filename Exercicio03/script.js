let preco = 0
let quantidadeMaca = 12
if (quantidadeMaca < 12) {
    preco = 1.30 * quantidadeMaca

} else {
    preco = 1.00 * quantidadeMaca
}

console.log(` ${quantidadeMaca} maçãs custam: ${preco.toFixed(2)} R$`)