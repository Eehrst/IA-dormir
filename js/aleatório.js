const nomes = ["karol", "Giuliana", "Maria Eduarda", "Marcelo",
    "Amanda", "Gustavo", "Bianca"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
 