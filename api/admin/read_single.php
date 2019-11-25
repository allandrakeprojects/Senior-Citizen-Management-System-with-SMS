<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/Admin.php';

  $database = new Database();
  $db = $database->connect();

  $admin = new Admin($db);
  $data = json_decode(file_get_contents("php://input"));
  $admin->id = $data->id;
  $result = $admin->read_single();
  $num = $result->rowCount();
  
  if($num > 0) {
    $admin_arr = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $admin_item = array(
        'id' => $id,
        'full_name' => $full_name,
        'contact_number' => $contact_number,
        'address' => $address,
        'gender' => $gender,
        'dob' => $dob,
        'age' => $age,
        'civil_status' => $civil_status,
        'brgy' => $brgy,
        'email' => $email,
        'password' => $password,
        'status' => $status,
      );
      array_push($admin_arr, $admin_item);
    }
    echo json_encode($admin_arr);
  } else {
    echo json_encode(
      array('message' => 'No Admin Found')
    );
  }