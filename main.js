$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novaLinha = $('<li></li>');

        $(`<a>${novaTarefa}</a>`).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
        $('#tarefa').val('');
    })
})