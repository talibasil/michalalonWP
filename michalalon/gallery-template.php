<?php
/**
 *Template Name: גלריות
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package michalalon
 */

get_header(); ?>

		<?php $categories = get_categories();
	 		
		 		if ( ! empty( $categories ) ) {
					foreach($categories as $category) { 
								if (function_exists('z_taxonomy_image_url')){?>
							<a href="<?php echo get_category_link($category->term_id); ?>">
								<img src="<?php echo z_taxonomy_image_url($category->term_id); ?>" />
							</a>
						<?php }
				    	echo esc_html( $category->name );   
					}
				}?>
	  </div>


 
<?php
get_footer();