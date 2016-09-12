<?php
/**
 *Template Name: גלריות
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package michalalon
 */

get_header(); ?>
	<main class="container-fluid">
		<?php $categories = get_categories();?>
 		<div class="accordion">
	 		<?php if ( ! empty( $categories ) ) {
				foreach($categories as $category) { 
					if (function_exists('z_taxonomy_image_url')){?>
						<div class="item">
							<a href="<?php echo get_category_link($category->term_id); ?>">
								<img src="<?php echo z_taxonomy_image_url($category->term_id); ?>" />
				    			<p><?php echo esc_html( $category->name );?></p>
							</a>
						</div>
					<?php }
				}
			}?>
  		</div>
	</main>


 
<?php
get_footer();