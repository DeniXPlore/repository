<?php
get_header();
?>

<main>
    <h1>Welcome to My Empty Theme!</h1>

    <?php    
    if ( have_posts() ) : 
        while ( have_posts() ) : the_post();            
            the_content(); 
            if ( have_rows('content') ): 
                while ( have_rows('content') ) : the_row(); 
                    
                    if ( get_row_layout() == 'content_block' ): 
                        ?>
                        <div class="content-block">
                            <?php 
                           
                            $title = get_sub_field('title'); 
                            if ($title) {
                                echo '<h2>' . esc_html($title) . '</h2>';
                            }
                            ?>
                            
                            <?php                             
                            $selected_posts = get_sub_field('selected_posts'); 
                            if ($selected_posts): 
                                echo '<ul>';
                                foreach ($selected_posts as $post): 
                                    setup_postdata($post);
                                    ?>
                                    <li>
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </li>
                                    <?php
                                endforeach;
                                wp_reset_postdata();
                                echo '</ul>';
                            endif;
                            ?>
                        </div>
                        <?php
                    endif;

                endwhile;
            endif;

        endwhile; 
    endif;
    ?>
</main>

<?php
get_footer();
?>
