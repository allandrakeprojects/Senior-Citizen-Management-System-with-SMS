<?php
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/Transaction.php';

  $database = new Database();
  $db = $database->connect();

  $transaction = new Transaction($db);
  $data = json_decode(file_get_contents("php://input"));
  $transaction->senior_id = $data->senior_id;
  $transaction->year = $data->year;
  $result = $transaction->read_single();
  $num = $result->rowCount();
  
  if($num > 0) {
    echo json_encode(
      array('message' => 'Transaction Found')
    );
  } else {
    echo json_encode(
      array('message' => 'No Transaction Found')
    );
  }