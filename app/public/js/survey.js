$('document').ready(function (){
  const formValidation = function () {
    let valid = true;
    const alarm = function () {
      alert('Uh oh, something happened. Please check your answers and re-submit.');
    };
    if ($('#name').val()) {
      valid = false;
      alarm();
    }
    else if ($('#pic').val()) {
      valid = false;
      alarm();
    }
    else if ($('.custom-select').val(NaN)) {
      valid = false;
      alarm();
    }
    else {
      valid = true;
      const submit = function () {
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
        const displayWinner = function(data) {
          $('#pair-name').text(data.name);
          $('#pair-img').attr('src', data.photo);
          $('#results-modal').modal('toggle');
        };
        $.post('/api/employees', userData, displayWinner);
      };
      
      

      $("#submit").on('click', submit);

    }

  };
  formValidation();
});