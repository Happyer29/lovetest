
function call() {
    var msg   = $('#form-feedback').serialize();
    $.ajax({
        type: 'POST',
        url: 'http://in-contri.ru/wp-content/themes/incontri/feedback-form.php',
        data: msg,
        success: function(data) {
            $('#results').html(data);
            $('.form-feedback-name').val('');
            $('.form-feedback-story').val('');
        },
        error:  function(xhr, str){
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });

}


