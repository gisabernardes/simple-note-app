$(document).ready(function(){

  var noteCount = 0;
  var activeNote = null;

  $('.color-box').click(function(){
    var color = $(this).css('background-color');
    $('#body-field').css('background-color', color);
  })

  $('#btn-save').click(function(){
    var body = $('#body-field').val();
    if (body === '') {
      alert ('Please write a note.');
      return;
    }
    var color = $('#body-field').css('background-color');
    var id = noteCount + 1;
    if (activeNote) {
      $('#' + activeNote)[0].children[0].children[0].innerHTML = body;
      $('#' + activeNote)[0].children[0].style.backgroundColor = color;
      document.getElementById("btn-icon").classList.remove("fa-remove");
      document.getElementById("btn-icon").classList.add("fa-eraser");
      activeNote = null;
    } else {
      $('#listed').append('<div id="note' + id + '" class="card shadow-sm rounded">'
                        +   '<div style="background-color: ' + color + '">'
                        +     '<div class="card-text p-3">' + body + '</div>'
                        +   '</div>'
                        + '</div>');
      noteCount++;
    };
    $('#body-field').val('');
    $('#body-field').css('background-color', 'white');
  });

  $('#btn-delete').click(function(){
    if (activeNote) {
      $('#' + activeNote)[0].remove();
      document.getElementById("btn-icon").classList.remove("fa-remove");
      document.getElementById("btn-icon").classList.add("fa-eraser");
      activeNote = null;
    }
      $('#body-field').val('');
      $('#body-field').css('background-color', 'white');
  });

  $('#listed').click(function(e){
    var id = e.target.parentElement.parentElement.id;
    var color = e.target.parentElement.style.backgroundColor;
    activeNote = id;
    var bodySel = $('#' + id)[0].children[0].children[0].innerHTML;
    $('#body-field').val(bodySel);
    $('#body-field').css('background-color', color);
    document.getElementById("btn-icon").classList.remove("fa-eraser");
    document.getElementById("btn-icon").classList.add("fa-remove");
  });

})
