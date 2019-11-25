<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
include_once '../models/Admin.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog admin object
$admin = new Admin($db);

  // Get ID
  $data = json_decode(file_get_contents("php://input"));
  $admin->email = $data->email;
  $admin->password = $data->password;

  // Get admin
  $result = $admin->login();

  // Create array
  $post_arr = array(
    'status' => $admin->status,
    'role' => $admin->role,
  );
  // Make JSON

  // Get row count
  $num = $result->rowCount();

  if($num > 0) {
    print_r(json_encode($post_arr));
  } else {
    echo json_encode(
        array('message' => 'Email Not Exists')
    );
  }