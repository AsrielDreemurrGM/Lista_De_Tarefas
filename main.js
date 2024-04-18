$(document).ready(function(){
    //Adicionar Nova Tarefa
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novaLinha = $('<li></li>');

        $(`<a>${novaTarefa}</a>`).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
        $('#tarefa').val('');
    })
    //Fim da Função Para Adicionar Nova Tarefa
    //inicio da Função Para Marcar Tarefa Como Concluida
    $('ul').on('click', 'li', function() { //Encontra o 'ul', e quando um 'li' é clicado segue com o código
        $(this).find('a').toggleClass('tarefa-concluida'); //".find" procura o 'a' especifico do 'li' clicado
    })
})