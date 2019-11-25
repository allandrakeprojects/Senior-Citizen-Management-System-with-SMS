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
  $result = $transaction->dashboard_first_quarter_paid();
  $num = $result->rowCount();
    
  echo json_encode(
    array('count' => $num)
  );