<?php
  session_start();

  if(!isset($_SESSION['full_name'])){
    header("Location: http://localhost/Senior%20Citizen%20Management%20System/login");
    die();
  } else {
    header("Location: http://localhost/Senior%20Citizen%20Management%20System/announcement");
  }
?>