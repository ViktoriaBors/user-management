<?php


class RouterGet
{
    public function __construct($uri)
    {
        $url_components = parse_url($uri, PHP_URL_PATH);
        $url_path = explode("/", $url_components);

        if (isset($url_path[2])) {
            $id = $url_path[2];
            // Get a specific user by ID
            $response = UserController::getUserById($id);
            // Set the response headers and encode the response as JSON
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            // Get all user
            $response = UserController::getAllUser();
            // Set the response headers and encode the response as JSON
            header('Content-Type: application/json');
            echo json_encode($response);
        }
    }
}

?>