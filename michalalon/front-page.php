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
      <?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"> </li>
<?php endwhile; ?>
</ol>
<!-- post navigation -->
<?php else: ?>
<!-- no posts found -->
<?php endif; ?>

<?php $first = true;?>
<?php if ( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>

   			 <div class="item <?php if($first){echo 'active';}?> " style="background-image:url( <?php echo the_post_thumbnail_url( 'slider' ); ?>); background-repeat: no-repeat; background-size: cover; background-position: 50%; ">
    		</div>

    		<?php if($first){$first=false;}?>

<?php endwhile; ?>
<!-- post navigation -->
<?php else: ?>
<!-- no posts found -->
<?php endif; ?>
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
<?php
get_footer('front');
