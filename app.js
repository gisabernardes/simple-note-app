$(document).ready(function () {

  var noteCount = 0;
  var activeNote = null;
  var clickButton = (function () {
    var body = $('#input-field').val();
    if (body === '') {
      alert('Please write a note.');
      return;
    }
    var color = $('#input-field').css('background-color');
    var id = noteCount + 1;
    if (activeNote) {
      $('#' + activeNote)[0].children[0].textContent = body;
      $('#' + activeNote)[0].children[0].style.backgroundColor = color;
      document.getElementById("btn-icon").classList.remove("fa-remove");
      document.getElementById("btn-icon").classList.add("fa-eraser");
      activeNote = null;
    } else {
      $('#listed').append('<div id="note' + id + '" class="card shadow-sm rounded" style="background-color: ' + color + '">'
        + '<div class="card-text p-3">' + body + '</div>'
        + '</div>');
      noteCount++;
    };
    $('#input-field').val('');
    $('#input-field').css('background-color', 'white');
  });

  $('.color-box').click(function () {
    var color = $(this).css('background-color');
    $('#input-field').css('background-color', color);
  });

  $('#input-field').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      clickButton();
    }
  });

  $('#btn-save').click(clickButton);

  $('#btn-delete').click(function () {
    if (activeNote) {
      $('#' + activeNote)[0].remove();
      document.getElementById("btn-icon").classList.remove("fa-remove");
      document.getElementById("btn-icon").classList.add("fa-eraser");
      activeNote = null;
    }
    $('#input-field').val('');
    $('#input-field').css('background-color', 'white');
  });

  $('#listed').click(function (e) {
    var id = e.target.parentElement.id;
    var color = e.target.style.backgroundColor;
    activeNote = id;
    var bodySel = e.target.textContent;
    $('#input-field').val(bodySel);
    $('#input-field').css('background-color', color);
    document.getElementById("btn-icon").classList.remove("fa-eraser");
    document.getElementById("btn-icon").classList.add("fa-remove");
  });

});
