<?php

session_start();
// require "classes/router_get.php";
// require "classes/router_post.php";
require("config/config.php");
// ha túl sok classes van lehet használni
spl_autoload_register(function ($class) {
    $directories = array(
        'router/',
        'classes/'
    );

    foreach ($directories as $dir) {
        $file = $dir . $class . '.php';
        if (file_exists($file)) {
            require_once($file);
            return;
        }
    }
});

include_once('./controllers/UserController.php');

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');  // cache for 1 day
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');  
}


// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

}

// Get the HTTP method, request headers, and request parameters
$method = $_SERVER['REQUEST_METHOD'];
$params = $_GET;

// Define the base URL and resource name
$base_url = "/api";
$resource_name = "user";

// Define the routes for the resource
switch ($method) {
    case 'GET':
        $router = new RouterGet($_SERVER["REQUEST_URI"]);
        break;
    case 'POST':
        // Create a new user
        $router = new RouterPost($_SERVER["REQUEST_URI"]);
        break;

    case 'PUT':
        // Update an existing user
        $router = new RouterPut($_SERVER["REQUEST_URI"]);
        break;
    case 'DELETE':
        // Delete an existing 
        $router = new RouterDelete($_SERVER["REQUEST_URI"]);
        break;
/*
    default:
        // Unsupported method
        $response = array(
            'error' => true,
            'message' => 'Unsupported HTTP method: ' . $method
        );
        header('HTTP/1.1 405 Method Not Allowed');
        break;
*/
}
?>
