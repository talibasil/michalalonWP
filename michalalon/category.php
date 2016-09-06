<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package michalalon
 */

get_header(); ?>
	
	<div class="container">
		
		<div class="row">
			<div class="col-md-12">	
				<div class="grid">
				
				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
					<?php if ( has_post_thumbnail() ) : ?>
					        <img class="imgcat" src="<?php the_post_thumbnail_url(); ?> "/>
					<?php endif; ?>
				<!-- post -->
				<?php endwhile; ?>
				<!-- post navigation -->
				<?php else: ?>
				<!-- no posts found -->
				<?php endif; ?>
				</div>
			</div>
		</div>
	</div>

	

<?php
get_footer();
