<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header>
    <nav>
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary_menu', 
            'container'      => false,         
            'menu_class'     => 'nav-menu',      
        ));
        ?>
    </nav>

    <?php
    
    $logo = get_field('logo', 'option'); 

    if ($logo): ?>
        <a href="<?php echo home_url(); ?>" class="site-logo">
            <img src="<?php echo esc_url($logo['url']); ?>" alt="<?php echo esc_attr($logo['alt']); ?>" />
        </a>
    <?php else: ?>
        <a href="<?php echo home_url(); ?>" class="site-logo">
            <img src="<?php echo get_template_directory_uri(); ?>/images/default-logo.png" alt="Default Logo" />
        </a>
    <?php endif; ?>
</header>

<?php wp_footer(); ?>
</body>
</html>

