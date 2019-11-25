<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../models/SMS.php';

    $sms = new SMS();

    $data = json_decode(file_get_contents("php://input"));
    $sms->message = $data->message;
    $sms->number = $data->number;
    // $hash = password_hash($data->password, PASSWORD_BCRYPT);
    // $sms->password = $hash;
    
    $sms->send();