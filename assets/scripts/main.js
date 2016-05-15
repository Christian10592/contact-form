$(document).ready(function(){
  //==================== Selectors ===============//
  var contactFormSelector   = $('#contact-form');
  var contactButtonSelector = $('#contact-form button');
  var messageSent           = $('.message-sent');
  var closeMessageSent      = messageSent.find('i');

  //========== Inputs ==========//
  var contactFormInput    = $('#contact-form .input');
  var contactFormMessage  = $('#contact-form .message');

  //==================== Contact Form ===========//

  //TODO:
    //Better error messages
    //Message grows with typing
    //documentation
    //clean up
    //submit focus input with error

  //Add attr('name') as a class
  contactFormInput.each(function(){
    var attrName = $(this).attr('name');
    $(this).addClass(attrName);
  });

  function validateEmail(inputValue, selector) {
    var errorMessageEmail = 'Please enter a valid email address';
    var emailSymbol = '@';
    var emailSymbolDot = '.';
    if (inputValue.indexOf(emailSymbol) == -1) {
      selector.val(errorMessageEmail);
      selector.addClass('email-error');
    } else if (inputValue.indexOf(emailSymbolDot) == -1) {
      selector.val(errorMessageEmail);
      selector.addClass('email-error');
    } else {
      selector.removeClass('email-error');
    }
  }

  function validateForm(inputValue, selector) {
    var errorMessage = 'This input is required';
    if (
        (inputValue != 'Name') &&
        (inputValue != 'Email') &&
        (inputValue != 'Subject') &&
        (inputValue != 'Message') &&
        (inputValue.length > 4)
    ) {
      selector.removeClass('error');
    } else {
      selector.val(errorMessage);
      selector.addClass('error');
    }
  }

  contactFormInput.blur(function(){
    var inputValue = $(this).val();
    var selector   = $(this);
    if (selector.hasClass('email')) {
      validateEmail(inputValue, selector);
    }
    validateForm(inputValue, selector);
  });

  contactFormInput.focus(function(){
    var inputValue = $(this).val();
    if (($(this).hasClass('error')) ||
        ($(this).hasClass('email-error')) ||
        (inputValue == 'Name') ||
        (inputValue == 'Email') ||
        (inputValue == 'Subject') ||
        (inputValue == 'Message')
    ) {
      $(this).val('');
      $(this).removeClass('error').removeClass('email-error');
    } if ($(this).hasClass('message')) {
      $(this).addClass('grow');
    }
  });

  closeMessageSent.click(function(){
    messageSent.fadeOut('fast');
    contactFormSelector.fadeIn();
  });

  contactButtonSelector.click(function(e){
    var checkInputError = contactFormInput.hasClass('error');
    var checkEmailError = contactFormInput.hasClass('email-error');
    if (checkInputError || checkEmailError) {
      checkInput.focus();
      e.preventDefault();
    } else {
      contactFormSelector.fadeOut('fast');
      messageSent.fadeIn();
      e.preventDefault();
    }
  });
//End Document.ready
});
