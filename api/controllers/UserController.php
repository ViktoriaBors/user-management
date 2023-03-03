<?php
class UserController extends Sql {

    use Sanitize;


    private static $conn;
    private static $table_name = "user";
    
    
    public static function getAllowedFields()
    {
        $result = self::conn()->query("show columns from user");
        $data = $result->fetch_all(MYSQLI_ASSOC);
        $fields = [];

        foreach ($data as $d) {
            array_push($fields, $d['Field']);
        }
        return $fields;
    }

    public static function getAllUser() {
        $result = self::conn()->query("select * from user");
        $data = $result->fetch_all(MYSQLI_ASSOC);
        return $data;
    }
    
    public static function getUserById($id) {
        $conn = self::conn(); 
        $stmt = $conn->prepare("select * from user WHERE id = ? ");
        $stmt->bind_param("i", $id);
        $stmt->execute() ; 
        $result = $stmt->get_result(); 
        $data = $result->fetch_assoc();
        
        return $data;
    }
    
    public static function createUser($user) {
        $allowedFields = self::getAllowedFields();
        foreach ($user as $key => $field) {
            if (in_array($key, $allowedFields)) {
                $user[$key] = Sanitize::sanitize($user[$key]);
            }
        }
        extract($user);

        $conn = self::conn(); 
        $sql = "INSERT INTO user 
        (first_name, last_name, email_id)
        VALUES (?, ?, ?) ;";

        $stmt = $conn->prepare($sql);

        $stmt->bind_param("sss", $first_name, $last_name, $email_id);
        $bind_success = $stmt->bind_param("sss", $first_name, $last_name, $email_id);
    
            if ($bind_success === false) {
                // bind_param failed, handle the error
                echo "bind_param error: " . $stmt->error;
            }
    
            $exec_success = $stmt->execute();
    
            if ($exec_success === false) {
                // execute failed, handle the error
                echo "execute error: " . $stmt->error;
            } else {
                return array(
                    'first_name' => $user['first_name'],
                    'last_name' => $user['last_name'],
                    'email_id' => $user['email_id']
                );
            }

        $stmt->close();
    }
    
    public static function updateUser($id, $user) {
            $allowedFields = self::getAllowedFields();
            foreach ($user as $key => $field) {
                if (in_array($key, $allowedFields)) {
                    $user[$key] = Sanitize::sanitize($user[$key]);
                }
            }
            extract($user);
    
            $conn = self::conn();
            $sql = "UPDATE user SET
                first_name = ?, last_name = ?, email_id = ? WHERE id = ?"; 
            
   
            $stmt = $conn->prepare($sql);
    
            $bind_success = $stmt->bind_param("sssi",$first_name, $last_name, $email_id , $id);

            if ($bind_success === false) {
                // bind_param failed, handle the error
                echo "bind_param error: " . $stmt->error;
            }
    
            $exec_success = $stmt->execute();
    
            if ($exec_success === false) {
                // execute failed, handle the error
                echo "execute error: " . $stmt->error;
            } else {
                return array(
                    'id' => $id,
                    'first_name' => $user['first_name'],
                    'last_name' => $user['last_name'],
                    'email_id' => $user['email_id']
                );
            }

        $stmt->close();

    }
    
    public static function deleteUser($id) {
    $conn = self::conn(); 
    $stmt = $conn->prepare("DELETE FROM user WHERE id = ? ");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        return array('success' => true);
    } else {
        return array('error' => true, 'message' => 'Error deleting user');
    }
}

}

?>