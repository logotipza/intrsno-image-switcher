<?php
/*
Plugin Name: Image Switcher Block
Description: A Gutenberg block to switch between two images with a link on the second image.
Version: 1.0
Author: intrsno
*/

function image_switcher_block_init() {
    wp_register_script( 
        'image-switcher-block-editor',
        plugins_url('block-editor.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-block-editor')
    );    

    wp_register_style(
        'image-switcher-block-editor',
        plugins_url('block-editor.css', __FILE__),
        array()
    );

    wp_register_style(
        'image-switcher-block',
        plugins_url('block.css', __FILE__),
        array()
    );

    register_block_type('image-switcher-block/image-switcher', array(
        'editor_script' => 'image-switcher-block-editor',
        'editor_style' => 'image-switcher-block-editor',
        'style' => 'image-switcher-block',
    ));
}

function image_switcher_block_enqueue_scripts() {
    wp_enqueue_script(
        'image-switcher',
        plugins_url('image-switcher.js', __FILE__),
        array('jquery'),
        '1.0',
        true
    );
}

add_action('wp_enqueue_scripts', 'image_switcher_block_enqueue_scripts');


add_action('init', 'image_switcher_block_init');
