const alunos = [
    {nome:'Kaio', nota: 3,notaComplementar: 2},
    {nome:'Kauane',nota: 10,notaComplementar: 0},
    {nome:'Camilly',nota: 5,notaComplementar: 1},
    {nome:'Rafaela',nota: 4,notaComplementar: 0},
    {nome:'João Paullo',nota: 8, notaComplementar: 2}
]

function filtraAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota + aluno.notaComplementar >= 6);
}

function filtraReprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota + aluno.notaComplementar < 6);
}

const alunosAprovados = filtraAprovados(alunos);
const alunosReprovados = filtraReprovados(alunos);

console.log("--- Nota Final de Todos os Alunos ---");
alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota + aluno.notaComplementar} `);
});

console.log("--- Alunos Aprovados ---");
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota + aluno.notaComplementar}`);
});

console.log("--- Alunos Reprovados ---");
alunosReprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota + aluno.notaComplementar}`);
});



