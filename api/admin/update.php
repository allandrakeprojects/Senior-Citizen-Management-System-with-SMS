<?php 
  // Headers
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
  $admin->full_name = $data->full_name;
  $admin->contact_number = $data->contact_number;
  $admin->address = $data->address;
  $admin->gender = $data->gender;
  $admin->dob = $data->dob;
  $admin->age = $data->age;
  $admin->civil_status = $data->civil_status;
  $admin->brgy = $data->brgy;
  $admin->email = $data->email;
  $hash = password_hash($data->password, PASSWORD_BCRYPT);
  $admin->password = $hash;
  $admin->status = $data->status;

  if($admin->update()) {
    echo json_encode(
      array('status' => 'ok')
    );
  } else {
    echo json_encode(
      array('status' => 'failed')
    );
  }