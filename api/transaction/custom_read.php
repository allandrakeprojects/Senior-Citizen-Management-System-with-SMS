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
  $transaction->quarter = $data->quarter;
  $transaction->year = $data->year;
  $transaction->status = $data->status;
  $result = $transaction->custom_read();
  $num = $result->rowCount();
  
  if($num > 0) {
    $transaction = array();
    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $transaction_item = array(
        'id' => $id,
        'full_name' => $full_name,
        'date_paid' => $date_paid,
        'remarks' => $remarks,
      );
      array_push($transaction, $transaction_item);
    }
    echo json_encode($transaction);
  } else {
    echo json_encode(
      array('message' => 'No Transaction Found')
    );
  }