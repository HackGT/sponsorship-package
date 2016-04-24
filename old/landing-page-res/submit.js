$(document).ready(function() {
  var emailTypingTimer;

  $('#email').keydown(function(e) { clearTimeout(emailTypingTimer); });
	$('#email').keyup(function(e)
	{
    clearTimeout(emailTypingTimer);
  
    emailTypingTimer = setTimeout(function()
    {
      if(!$('#email').attr('readonly'))
      {
        var toast = new iqwerty.toast.Toast();
        toast.setText('Just press enter').show();
      }
    }, 700);

		if(e.keyCode == 13) // enter
		{
			submit();
		}
	});

	$('#submit').click(function(e)
	{
		submit();
  });

  function submit() {
    if(isValidEmail($("#email").val()))
    {
      $.ajax({ url: 'landing-page-res/registerUser.php',
        data: {email: $("#email").val()},
        type: 'POST',
        success: function(output) {
          $('#email').val('Thanks, and stay tuned.');
          $('#email').attr('readonly', '');
          $('#submit').attr('disabled', '');
        }
      });
    }
    else
    {
      $('#email').blur();
      $('#email').attr('placeholder', 'Please enter a valid email address');
      $('#email').val('');
    }
  }
});

function isValidEmail(email)
{
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}