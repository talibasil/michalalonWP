<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package michalalon
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<header class="container-fluid head">
		<div class="row">
			<?php the_header_image_tag('class=col-md-1 col-md-offset-1 col-xs-4');?>
			<div class="col-md-3 col-xs-8 logo">  <h1> <b> Michal Alon </b> </h1> </div>
		</div>
		<div class="row">
			<nav class="col-md-12">
				<?php wp_nav_menu(); ?>
			</nav>
		</div>
	</header>
	
	<div id="content">
