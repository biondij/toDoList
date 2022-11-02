let input = prompt("Qual comando você gostaria de utilizar?");
const todos = ["Passar aspirador no quarto", "Preparar o almoço"];

while (input !== "quit" && input !== "q") {
    if (input === "listar") {
        console.log("*******************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`) // possível fazer com for each
        }
        console.log("*******************");
    } else if (input === "+") {
        const newTodo = prompt("Qual afazer você deseja adicionar?");
        todos.push(newTodo);
        console.log(`${newTodo} adicionado aos afazeres`);
    } else if (input === "-") {
        const index = parseInt(prompt("Digite o index do afazer que você deseja deletar"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} deletado dos afazeres`);
        } else {
            console.log("Index inválido");
        }
    } else if (input === "editar") {
        let indexEditado = prompt("Qual index você deseja editar?");
        let inputEditado = prompt("Digite seu novo afazer");
        function replace() {
            indexEditado = todos.splice(indexEditado, 1);
            todos.push(inputEditado);
        }
        replace();
        console.log(`${indexEditado} editado para ${inputEditado}`)
    }
    input = prompt("O que você gostaria de fazer?");
} console.log("Até logo!")

