<?php
    if (isset($_POST['Email'])) {

        $email_to = "dfst5@hotmail.com";
        $email_subject = "Novas submissões de formulário de contacto";

        function problem($error)
        {
            echo "Pedimos muita desculpa, mas parece que houve um problema com o formulário que submeteu.";
            echo "Os erros estão descritos abaixo.<br><br>";
            echo $error . "<br><br>";
            echo "Volte atrás e corrija os erros.<br><br>";
            die();
        }

        // validation expected data exists
        if (
            !isset($_POST['Name']) ||
            !isset($_POST['Email']) ||
            !isset($_POST['Message'])
        ) {
            problem('Pedimos desculpa, mas parece que houve um problema com o formulário que submeteu.');
        }

        $name = $_POST['Name']; // required
        $email = $_POST['Email']; // required
        $message = $_POST['Message']; // required

        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

        if (!preg_match($email_exp, $email)) {
            $error_message .= 'O endereço de Email não parece ser válido.<br>';
        }

        $string_exp = "/^[A-Za-z .'-]+$/";

        if (!preg_match($string_exp, $name)) {
            $error_message .= 'O nome introduzido não parece ser válido.<br>';
        }

        if (strlen($message) < 2) {
            $error_message .= 'A mensagem introduzida não parece ser válida.<br>';
        }

        if (strlen($error_message) > 0) {
            problem($error_message);
        }

        $email_message = "Detalhes do Formulário.\n\n";

        function clean_string($string)
        {
            $bad = array("content-type", "bcc:", "to:", "cc:", "href");
            return str_replace($bad, "", $string);
        }

        $email_message .= "Name: " . clean_string($name) . "\n";
        $email_message .= "Email: " . clean_string($email) . "\n";
        $email_message .= "Message: " . clean_string($message) . "\n";

        // create email headers
        $headers = 'From: ' . $email . "\r\n" .
            'Reply-To: ' . $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $email_subject, $email_message, $headers);
    ?>


        Obrigado por nos contactar. A equipa do Camecípare tentará responder o mais breve possível.

    <?php}
?>