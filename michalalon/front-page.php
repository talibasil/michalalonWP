<?php
/**
 * The Front Page to be shown no matter if static page or post archive.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package michalalon
 */

get_header(); ?>

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <!-- <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
  </ol> -->
  <div class="carousel-inner" role="listbox">
    <?php $query_args = array(
    	'post_type'              => 'slider',
    );
    $query = new WP_Query( $query_args ); ?>

    <ol class="carousel-indicators">
      <?php $counter = 0;?>
      <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
              <li data-target="#carousel-example-generic" data-slide-to="<?php echo $counter;?>" class="<?php if($counter == 0){echo 'active';}?>"> </li>
        <?php $counter= $counter+1;?>
        <?php endwhile; endif; ?>
    </ol>

    <?php $first = true;?>
    <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>

       			 <div class="item <?php if($first){echo 'active';}?> " style="background-image:url( <?php echo the_post_thumbnail_url( 'slider' ); ?>); background-repeat: no-repeat; background-size: cover; background-position: 50%; ">
        		</div>

        		<?php if($first){$first=false;}?>

    <?php endwhile; endif; ?>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<?php $categories = get_categories();?>
<?php if ( ! empty( $categories ) ) {?>
<main class="container">
  <h2 class="text-center"> galleries </h2>
  <div class="accordion">
    <?php foreach($categories as $category) { 
      if (function_exists('z_taxonomy_image_url')){ ?>
        <div class="item">
          <a href="<?php echo get_category_link($category->term_id); ?>">
            <img src="<?php echo z_taxonomy_image_url($category->term_id); ?>" />
              <p><?php echo esc_html( $category->name );?></p>
          </a>
        </div>
      <?php }
      }?>
    </div>
</main>
  <?php }
  
get_footer();
