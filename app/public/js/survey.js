$(function () {
  const validate = function () {
    let isValid = true;

    $('input').each(function () {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    $('.custom-select').each(function (i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const displayWinner = function (data) {
    $('#pair-name').text(data.name);
    $('#pair-img').attr('src', data.photo);
    $('#results-modal').modal('show');
  };

  const submit = function () {
    event.preventDefault();
    if (validate()) {
      const userData = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [
          $('#1').val(),
          $('#2').val(),
          $('#3').val(),
          $('#4').val(),
          $('#5').val(),
          $('#6').val(),
          $('#7').val(),
          $('#8').val(),
          $('#9').val(),
          $('#10').val()
        ]
      };
      console.log(userData); 
      $.post('/api/employees', userData)
        .then(displayWinner);
    }
    else {
      $('#error')
        .text('Uh oh, please check your answers before submitting')
        .addClass('alert alert-warning');
    }
  };
  $("#submit").on('click', submit);
});