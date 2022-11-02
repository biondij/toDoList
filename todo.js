let input = prompt("O que você gostaria de fazer?");
const todos = ["Passar aspirador no quarto", "Preparar o almoço"];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("*******************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`) // possível fazer com for each
        }
        console.log("*******************");
    } else if (input === "new") {
        const newTodo = prompt("Qual afazer você deseja adicionar?");
        todos.push(newTodo);
        console.log(`${newTodo} adicionado aos afazeres`);
    } else if (input === "delete") {
        const index = parseInt(prompt("Digite o index do afazer que você deseja deletar"));
        if (!Number.isNaN) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} deletado dos afazeres`);
        } else {
            console.log("Index inválido");
        }
    } else if (input === "editar") {
        let inputEditado = todos.replace(input, inputEditado);
        console.log(`${input} editado para ${inputEditado}`)
    }
    input = prompt("O que você gostaria de fazer?");
} console.log("Até logo!")