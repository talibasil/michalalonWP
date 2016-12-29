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
			<div class="col-md-offset-1 col-md-4 col-sm-6 col-xs-12 logo">
				<div class="row">
					<?php the_header_image_tag('class=col-xs-3');?>
					<div class="col-xs-9">
						<a href="<?php echo home_url(); ?>">
							<h1> <b> Michal Alon </b> </h1> 
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<nav class="col-sm-12">
				<div class="col-md-1 hidden-sm hidden-xs"></div>
				<?php wp_nav_menu(
					array(
						'container' => '',
						'menu_class' => 'nav navbar-nav col-md-11 col-sm-12'
					)
				); ?>
			</nav>
		</div>
	</header>
	
	<div id="content">
