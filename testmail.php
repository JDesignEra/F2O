<?php
$to = 'tgm.joel@gmail.com';
$subject = 'Test email';
$message = "Hello World!\n\nThis is my first mail.";
$headers = "From: jdesignera.test@gmail.com\r\nReply-To: jdesignera.test@gmail.com";
$mail_sent = @mail( $to, $subject, $message, $headers );

echo $mail_sent ? "Mail sent" : "Mail failed";
?>
