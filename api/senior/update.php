<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/Senior.php';

  $database = new Database();
  $db = $database->connect();

  $senior = new Senior($db);

  $data = json_decode(file_get_contents("php://input"));
  $senior->id = $data->id;
  $senior->full_name = $data->full_name;
  $senior->contact_number = $data->contact_number;
  $senior->address = $data->address;
  $senior->gender = $data->gender;
  $senior->dob = $data->dob;
  $senior->age = $data->age;
  $senior->occupation = $data->occupation;
  $senior->civil_status = $data->civil_status;
  $senior->brgy = $data->brgy;
  $senior->status = $data->status;
  
  // $hash = password_hash($data->password, PASSWORD_BCRYPT);
  // $senior->password = $hash;

  if($senior->update()) {
    echo json_encode(
      array('status' => 'ok')
    );
  } else {
    echo json_encode(
      array('status' => 'failed')
    );
  }