<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>F2O
        <?php
            if (isset($title) && !empty($title) && $title != null) {
                echo ' | ' . $title;
            }
            else {
                echo '';
            }
        ?>
    </title>

    <!-- Font Awesome -->
    <link href="assets/framework/css/font-awesome.min.css" rel="stylesheet" />

    <!-- Bootstrap core CSS -->
    <link href="assets/framework/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Material Design Bootstrap -->
    <link href="assets/framework/css/mdb.min.css" rel="stylesheet" />

    <!-- Style -->
    <?php if (false !== strpos($_SERVER['REQUEST_URI'], '/index.php') || $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] == "localhost/"): ?>
        <link href="assets/css/home-style.css" rel="stylesheet" />
    <?php else: ?>
        <link href="assets/css/style.css" rel="stylesheet" />
    <?php endif; ?>

    <!-- Pace,js -->
    <link href="assets/css/pace.css" rel="stylesheet" />

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="assets/img/favicon/manifest.json">
    <link rel="mask-icon" href="assets/img/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="assets/img/favicon/favicon.ico">
    <meta name="apple-mobile-web-app-title" content="F2O">
    <meta name="application-name" content="F2O">
    <meta name="msapplication-config" content="assets/img/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
</head>
