<?php 
/**
* Plugin Name: Front-end Builder
* Plugin URI: https://www.github.com/andgasper
* Description: Triggers a static build
* Version: 0.1.0
* Author: Dre
* Text Domain: front-end-builder
* Domain Path: languages 
*/


add_action( 'save_post', 'build_update_post' );
function build_update_post( $post_id ) {
    $post_type = get_post_type($post_id);
    error_log('build function', 3);
}