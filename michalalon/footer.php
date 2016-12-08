<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package michalalon
 */

?>
	</div><!-- #content -->

	<footer id="colophon" class="site-footer conteiner-fluid" role="contentinfo" style="padding-top:10px;">
		<div class="col-md-12">
			<p style="display:inline-block">coded and disign with love by:</p>
			<img src="<?php echo get_template_directory_uri();?>/inc/diva.png" style="display:inline-block; max-height:15px;">
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
