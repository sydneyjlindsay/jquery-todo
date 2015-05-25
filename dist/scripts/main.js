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

        var listHtml = render(list); 
        $list.html(listHtml); 

    }

    $list.on('click', function(){
        $("#list li").wrap("<strike>");
        $("#list").fadeOut("slow");
    });


    function render(todoList) {
        return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
    }
}

