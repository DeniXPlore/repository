<?php
function create_portfolio_post_type() {
    $labels = array(
        'name'               => _x( 'Portfolios', 'post type general name', 'textdomain' ),
        'singular_name'      => _x( 'Portfolio', 'post type singular name', 'textdomain' ),
        'menu_name'          => _x( 'Portfolios', 'admin menu', 'textdomain' ),
        'name_admin_bar'     => _x( 'Portfolio', 'add new on admin bar', 'textdomain' ),
        'add_new'            => _x( 'Add New', 'portfolio', 'textdomain' ),
        'add_new_item'       => __( 'Add New Portfolio', 'textdomain' ),
        'new_item'           => __( 'New Portfolio', 'textdomain' ),
        'edit_item'          => __( 'Edit Portfolio', 'textdomain' ),
        'view_item'          => __( 'View Portfolio', 'textdomain' ),
        'all_items'          => __( 'All Portfolios', 'textdomain' ),
        'search_items'       => __( 'Search Portfolios', 'textdomain' ),
        'parent_item_colon'  => __( 'Parent Portfolios:', 'textdomain' ),
        'not_found'          => __( 'No portfolios found.', 'textdomain' ),
        'not_found_in_trash' => __( 'No portfolios found in Trash.', 'textdomain' ),
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'portfolio' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'supports'           => array( 'title', 'editor', 'thumbnail' ),
        'show_in_rest'       => true, 
    );

    register_post_type( 'portfolio', $args );
}

add_action( 'init', 'create_portfolio_post_type' );


function create_portfolio_taxonomy() {
    $labels = array(
        'name'              => _x( 'Portfolio Categories', 'taxonomy general name', 'textdomain' ),
        'singular_name'     => _x( 'Portfolio Category', 'taxonomy singular name', 'textdomain' ),
        'search_items'      => __( 'Search Portfolio Categories', 'textdomain' ),
        'all_items'         => __( 'All Portfolio Categories', 'textdomain' ),
        'parent_item'       => __( 'Parent Portfolio Category', 'textdomain' ),
        'parent_item_colon' => __( 'Parent Portfolio Category:', 'textdomain' ),
        'edit_item'         => __( 'Edit Portfolio Category', 'textdomain' ),
        'update_item'       => __( 'Update Portfolio Category', 'textdomain' ),
        'add_new_item'      => __( 'Add New Portfolio Category', 'textdomain' ),
        'new_item_name'     => __( 'New Portfolio Category Name', 'textdomain' ),
        'menu_name'         => __( 'Portfolio Category', 'textdomain' ),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'portfolio-category' ),
        'show_in_rest'      => true, 
    );

    register_taxonomy( 'portfolio_category', array( 'portfolio' ), $args );
}

add_action( 'init', 'create_portfolio_taxonomy', 0 );

function register_my_menu() {
  register_nav_menus(array(
      'primary_menu' => __('Primary Menu', 'textdomain'),
  ));
}

add_action('init', 'register_my_menu');


if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
      'page_title'    => 'Theme Options',
      'menu_title'    => 'Theme Options',
      'menu_slug'     => 'theme-options',
      'capability'    => 'edit_theme_options',
      'redirect'      => false
  ));
}
?>