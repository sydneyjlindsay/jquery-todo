$(document).ready(start);

function start(e) {

    var $inputBox = $('#todo-input');

    var $todoButton = $('#add-todo-button');
    

    var $todoForm = $('#todo-form');
    var $list = $('#list');
    var list = [];


    $todoForm.on('submit', addTodo);

    function addTodo(e) {
        e.preventDefault();

        list.push($inputBox.val());
        $inputBox.val('');
        $inputBox.focus();

        var listHtml = render(list); 
        $list.html(listHtml); 
    }

    $('#list').on('click', 'li', check);

    function check() {
        $(this).toggleClass('strikethrough');
    }

    function render(todoList) {
        return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
    }
}

