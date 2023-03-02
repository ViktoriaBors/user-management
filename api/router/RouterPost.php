<?php


class RouterPost
{
    public function __construct($uri)
    {
            // Add new user
            $user = json_decode(file_get_contents('php://input'), true);
            $response = UserController::createUser($user);
            // Set the response headers and encode the response as JSON
            header('Content-Type: application/json');
            echo json_encode($response);
    }
}

?>

