<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Contact Form</title>
    <!-- import css -->
    <link rel="stylesheet" href="assets/style/css/style.min.css" >
    <!-- import scripts -->
    <script type="text/javascript" src='assets/scripts/jquery.2.2.3.min.js'></script>
    <script type="text/javascript" src='assets/scripts/main.min.js'></script>
  </head>
  <body>
    <div class='container form-wrapper'>
      <?php
      $action=$_REQUEST['action'];
      if ($action == '') {
      ?>
      <form id='contact-form' class='contact-form' action='' method='POST'>
        <input type="hidden" name="action" value="submit">
        <input type='text' name='name' class='input required' placeholder='Name'>
        <input type='text' name='email' class='input required' placeholder='Email'>
        <input type='text' name='subject' class='input required' placeholder='Subject'>
        <textarea name="message" class='input textarea required'>Message</textarea>
        <button type="submit" name="submit" class='ghost-button-blue'>Send</button>
      </form>
      <?php
      } else {
          $name = $_REQUEST['name'];
          $subject = $_REQUEST['subject'];
          $email = $_REQUEST['email'];
          $message = $_REQUEST['message'];

          $from="From: $name<$email>\r\nReturn-path: $email";
          mail("christian@propellerideas.com", $subject, $message, $from);
      ?>
      <div class='message-sent'>
        <p class='cursive'>Thank you!</p>
        <p class='note'>I have received your message and I will get back to you as soon as possible</p>
      </div
      <?php
        }
      ?>
    </div>
  </body>
</html>
