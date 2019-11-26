<?php
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
  $result = $senior->read_single();
  $num = $result->rowCount();
  
  if($num > 0) {
    $senior_arr = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $senior_item = array(
        'id' => $id,
        'image' => 'images/senior/'.$image.'',
        'full_name' => $full_name,
        'contact_number' => $contact_number,
        'address' => $address,
        'gender' => $gender,
        'dob' => $dob,
        'age' => $age,
        'occupation' => $occupation,
        'civil_status' => $civil_status,
        'brgy' => $brgy,
        'blood_type' => $blood_type,
        'emer_name' => $emer_name,
        'emer_relationship' => $emer_relationship,
        'emer_address' => $emer_address,
        'emer_contact_number' => $emer_contact_number,
        'status' => $status,
      );
      array_push($senior_arr, $senior_item);
    }
    echo json_encode($senior_arr);
  } else {
    echo json_encode(
      array('message' => 'No Senior Found')
    );
  }