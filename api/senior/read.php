<?php 
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/Senior.php';

  $database = new Database();
  $db = $database->connect();
  $senior = new Senior($db);
  $result = $senior->read();
  $num = $result->rowCount();
  
  if($num > 0) {
    $senior_arr = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      if($civil_status == 0) {
        $civil_status = 'Single';
      } else if($civil_status == 1) {
        $civil_status = 'Married';
      } else if($civil_status == 2) {
        $civil_status = 'Widowed';
      } else if($civil_status == 3) {
        $civil_status = 'Separated';
      } else if($civil_status == 4) {
        $civil_status = 'Divorced';
      }
      
      $senior_item = array(
        'id' => $id,
        'image' => '<img src="images/senior/'.$image.'" style="width: 100px; height: 100px; border-radius: 0" alt="Not Found"/>',
        'full_name' => $full_name,
        'contact_number' => $contact_number,
        'address' => $address,
        'gender' => ($gender == '0') ? 'Male' : 'Female',
        'dob' => $dob,
        'age' => $age,
        'occupation' => $occupation,
        'civil_status' => $civil_status,
        'brgy' => $brgy,
        'status' => ($status == '1') ? '<label class="badge badge-success">Active</label>' : '<label class="badge badge-danger">Inactive</label>',
      );
      array_push($senior_arr, $senior_item);
    }
    echo json_encode($senior_arr);
  } else {
    echo json_encode(
      array('message' => 'No Seniors Found')
    );
  }