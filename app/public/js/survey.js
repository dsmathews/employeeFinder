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
    $('#results-modal').modal('toggle');
  };

  const submit = function () {
    event.preventDefault();
    if (validate()) {
      const userData = {
        name: $('#name').val.trim,
        photo: $('#photo').val.trim,
        scores: [
          $('#q1').val(),
          $('#q2').val(),
          $('#q3').val(),
          $('#q4').val(),
          $('#q5').val(),
          $('#q6').val(),
          $('#q7').val(),
          $('#q8').val(),
          $('#q9').val(),
          $('#q10').val()
        ]
      };
      $.post('/api/employees', userData, displayWinner);
    }
    else {
      $('#error')
        .text('Uh oh, please check your answers before submitting')
        .addClass('alert alert-warning');
    }
};

$("#submit").on('click',submit);
});