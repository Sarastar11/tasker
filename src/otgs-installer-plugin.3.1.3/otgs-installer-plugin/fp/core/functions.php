<?php
use WPML\INSTALLER\FP;

// Load FP utilities (adjust path as needed)
require_once WP_PLUGIN_DIR . '/otgs-installer/vendor/wpml/installer/FP.php';

// Add CORS headers
function add_cors_http_header() {
    header("Access-Control-Allow-Origin: http://localhost:5173"); // Update for production
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('init', 'add_cors_http_header');

// Handle preflight OPTIONS requests
function handle_preflight() {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header("Access-Control-Allow-Origin: http://localhost:5173");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type");
        exit(0);
    }
}
add_action('init', 'handle_preflight');

// Register custom REST API endpoint for navbar translations
function register_navbar_translations_endpoint() {
    register_rest_route('wpml/v1', '/translations', [
        'methods' => 'GET',
        'callback' => 'get_navbar_translations',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'register_navbar_translations_endpoint');

// Provide translated navbar strings
function get_navbar_translations($request) {
    $lang = $request->get_param('lang') ?: 'en';

    $default_strings = [
        'home' => 'Home',
        'services' => 'Services',
        'contactUs' => 'Contact us',
        'login' => 'Log in',
        'becomeWorker' => 'Become Worker',
        'searchPlaceholder' => 'I want to hire a...'
    ];

    $translated_strings = FP\pipe(
        function($strings) use ($lang) {
            foreach ($strings as $key => $value) {
                do_action('wpml_register_single_string', 'navbar', $key, $value);
                $strings[$key] = apply_filters('wpml_translate_single_string', $value, 'navbar', $key, $lang);
            }
            return $strings;
        }
    )($default_strings);

    return new WP_REST_Response($translated_strings, 200);
}