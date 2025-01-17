send_email.php
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "fraity1987@gmail.com";
    $subject = "Nowa wiadomość od $name";
    $body = "Imię i nazwisko: $name\nEmail: $email\n\nWiadomość:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Wiadomość została wysłana.";
    } else {
        echo "Wystąpił problem z wysłaniem wiadomości.";
    }
}
?>
