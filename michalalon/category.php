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
						        <img class="imgcat" data-toggle="modal" data-target="#<?php the_ID();?>" src="<?php the_post_thumbnail_url(); ?> "/>
						<?php endif;?>
					<?php  endwhile;  endif; ?>
				</div>

				<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
						<?php if ( has_post_thumbnail() ) : ?>
								<div class="modal fade" id="<?php the_ID();?>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="background-color:black;">
								  <div class="modal-dialog" role="document">
								    <div class="modal-content">
								      <div class="modal-header">
								        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								        <h4 class="modal-title" id="myModalLabel"> <?php the_title();?> </h4>
								      </div>
								      <div class="modal-body">
								      	<?php $gallery_urls = get_post_gallery_images();?>
								      	<?php if (count($gallery_urls) > 0 )  {
								      		foreach ($gallery_urls as $gallery_image) {?> 
								         		<img class="imgpopup" src="<?php echo $gallery_image;?> "/>
								      		<?php }
								      	}?>
								         <img class="imgpopup" src="<?php the_post_thumbnail_url(); ?> "/>
								      </div>
								    </div>
								  </div>
								</div>
						<?php endif;?>
					<?php  endwhile;  endif; ?>

			</div>
		</div>
	</div>

<!-- Modal -->


	

<?php
get_footer();
