$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novaLinha = $('<li></li>');
//Esta adicionando o '<li></li>' mas não adiciona o valor colocado no formulário
        $(novaTarefa).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
        $('#tarefa').val('');
    })
})