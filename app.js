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
      alert ('Please add a title or body to your note.');
      return;
    }
    var color = $('#body-field').css('background-color');
    var id = noteCount + 1;
    if (activeNote) {
      $('#' + activeNote)[0].children[0].innerHTML = body;
      $('#' + activeNote)[0].style.backgroundColor = color;
      activeNote = null;
    } else {
      $('#listed').append('<div id="note' + id + '" style="background-color: ' + color + '"><div class="list-text">' + body + '</div></div>');
      noteCount++;
    };
    $('#body-field').val('');
    $('#body-field').css('background-color', 'white');
  });

  $('#btn-delete').click(function(){
    if (activeNote) {
      $('#' + activeNote)[0].remove();
      activeNote = null;
    }
      $('#body-field').val('');
      $('#body-field').css('background-color', 'white');
  });

  $('#listed').click(function(e){
    var id = e.target.parentElement.id;
    var color = e.target.parentElement.style.backgroundColor;
    activeNote = id;
    var bodySel = $('#' + id)[0].children[0].innerHTML;
    $('#body-field').val(bodySel);
    $('#body-field').css('background-color', color);
  })

})
