$(document).ready(function(){
    $('#on').hide();
    $('#light-on').hide();

    $('#off').click(function(){
        $('#on').show()
        $('#off').hide()
        $('#light-on').show()
        $('#light-off').hide()
    })

    $('#on').click(function(){
        $('#off').show()
        $('#on').hide()
        $('#light-off').show()
        $('#light-on').hide()
    })
})