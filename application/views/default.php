<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
        <!-- Mobile Specifics -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="HandheldFriendly" content="true"/>
        <meta name="MobileOptimized" content="320"/>   
	<title>Ferro</title>
        
        <link rel="shortcut icon" href="<?php echo(IMG.'favicon.ico'); ?>" type="image/ico" />
        <link rel="stylesheet" href="<?php echo(CSS.'bootstrap.min.css'); ?>">
        <link rel="stylesheet" href="<?php echo(RS.'css/settings.css'); ?>">
        <link rel="stylesheet" href="<?php echo(CSS.'fancybox/jquery.fancybox.css'); ?>">
        <link rel="stylesheet" href="<?php echo(CSS.'fonts.css'); ?>">
         <link rel="stylesheet" href="<?php echo(CSS.'main.css'); ?>">
        <link rel="stylesheet" href="<?php echo(CSS.'shortcodes.css'); ?>">
        <link rel="stylesheet" href="<?php echo(CSS.'responsive.css'); ?>">
        <link rel="stylesheet" href="<?php echo(CSS.'custom.css'); ?>">
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic' rel='stylesheet' type='text/css'>
        
        <script src="<?php echo(JS.'modernizr.js'); ?>"></script> <!-- Default JS -->
        <script src="<?php echo(JS.'jquery-1.9.1.min.js'); ?>"></script>
        <script src="<?php echo(JS.'bootstrap.min.js'); ?>"></script>
         <script src="<?php echo(RS.'js/jquery.themepunch.revolution.min.js'); ?>"></script>
        <script src="<?php echo(RS.'js/jquery.themepunch.plugins.min.js'); ?>"></script>   
        <script src="<?php echo(JS.'jquery.superfish.min.js'); ?>"></script> <!-- Superfish -->
        <script src="<?php echo(JS.'jquery.supersubs.min.js'); ?>"></script> <!-- Supersubs -->
        <script src="<?php echo(JS.'jquery.isotope.js'); ?>"></script> <!-- Isotope Filter -->
        <script src="<?php echo(JS.'jquery.fancybox.pack.js'); ?>"></script> <!-- Fancybox -->
        <script src="<?php echo(JS.'jquery.fancybox-media.js'); ?>"></script> <!-- Fancybox for Media -->
        <script src="<?php echo(JS.'plugins.js'); ?>"></script> <!-- Contains: jQuery Easing, jQuery ScrollTo -->
        
        <script src="<?php echo(JS.'main.js'); ?>"></script> <!-- Default JS -->
        
</head>
    <body>

        <?php $this->load->view("layout/header"); ?>
        <?php $this->load->view($body); ?>
       <?php $this->load->view("layout/footer"); ?>
        
        
    </body>
</html>