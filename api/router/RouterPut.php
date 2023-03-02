<?php


class RouterPut
{
    public function __construct($uri)
    {
        $url_components = parse_url($uri);
        $query = parse_str($url_components['query'], $params);
        $id = $params['id'];

        $user = json_decode(file_get_contents('php://input'), true);
        $response = UserController::updateUser($id, $user);
        // Set the response headers and encode the response as JSON
        header('Content-Type: application/json');
        echo json_encode($response);
    }
}
?>