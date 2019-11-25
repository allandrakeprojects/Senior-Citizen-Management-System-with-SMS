<?php
  $db = mysqli_connect("localhost", "root", "", "senior_citizen");
  $msg = "";

  if (isset($_POST['insert'])) {
  	$full_name = mysqli_real_escape_string($db, $_POST['full_name']);
  	$contact_number = mysqli_real_escape_string($db, $_POST['contact_number']);
  	$address = mysqli_real_escape_string($db, $_POST['address']);
  	$gender = mysqli_real_escape_string($db, $_POST['gender']);
  	$dob = mysqli_real_escape_string($db, $_POST['dob']);
  	$age = mysqli_real_escape_string($db, $_POST['age']);
  	$occupation = mysqli_real_escape_string($db, $_POST['occupation']);
  	$civil_status = mysqli_real_escape_string($db, $_POST['civil_status']);
  	$brgy = mysqli_real_escape_string($db, $_POST['brgy']);
  	$blood_type = mysqli_real_escape_string($db, $_POST['blood_type']);
  	$emer_name = mysqli_real_escape_string($db, $_POST['emer_name']);
  	$emer_relationship = mysqli_real_escape_string($db, $_POST['emer_relationship']);
  	$emer_address = mysqli_real_escape_string($db, $_POST['emer_address']);
  	$emer_contact_number = mysqli_real_escape_string($db, $_POST['emer_contact_number']);
  	$image = $_FILES['image']['name'];
  	$role = 1;
  	$status = mysqli_real_escape_string($db, $_POST['status']);

    $destination_path = getcwd().DIRECTORY_SEPARATOR;
    $target = $destination_path . "images/senior/".basename($image);

  	$sql = "INSERT INTO user (full_name, contact_number, address, gender, dob, age, occupation, civil_status, brgy, blood_type, emer_name, emer_relationship, emer_address, emer_contact_number, image, role, status) VALUES ('$full_name', '$contact_number', '$address', '$gender', '$dob', '$age', '$occupation', '$civil_status', '$brgy', '$blood_type', '$emer_name', '$emer_address', '$emer_relationship', '$emer_contact_number',  '$image', '$role', '$status')";

  	mysqli_query($db, $sql);

  	if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
  		$msg = "Image uploaded successfully";
  	} else {
  		$msg = "Failed to upload image";
    }
      
    header("Location:http://localhost/Senior%20Citizen%20Management%20System/senior");
  }

  
  if (isset($_POST['update'])) {
    $id = mysqli_real_escape_string($db, $_POST['id']);
    $full_name = mysqli_real_escape_string($db, $_POST['full_name']);
    $contact_number = mysqli_real_escape_string($db, $_POST['contact_number']);
    $address = mysqli_real_escape_string($db, $_POST['address']);
    $gender = mysqli_real_escape_string($db, $_POST['gender']);
    $dob = mysqli_real_escape_string($db, $_POST['dob']);
    $age = mysqli_real_escape_string($db, $_POST['age']);
    $occupation = mysqli_real_escape_string($db, $_POST['occupation']);
    $civil_status = mysqli_real_escape_string($db, $_POST['civil_status']);
    $brgy = mysqli_real_escape_string($db, $_POST['brgy']);
  	$blood_type = mysqli_real_escape_string($db, $_POST['blood_type']);
  	$emer_name = mysqli_real_escape_string($db, $_POST['emer_name']);
  	$emer_relationship = mysqli_real_escape_string($db, $_POST['emer_relationship']);
  	$emer_address = mysqli_real_escape_string($db, $_POST['emer_address']);
  	$emer_contact_number = mysqli_real_escape_string($db, $_POST['emer_contact_number']);
    $image = $_FILES['image']['name'];
    $role = 1;
    $status = mysqli_real_escape_string($db, $_POST['status']);

    $destination_path = getcwd().DIRECTORY_SEPARATOR;
    $target = $destination_path . "images/senior/".basename($image);

    if($image != null){
        $sql = "UPDATE user SET full_name='$full_name', contact_number='$contact_number', address='$address', gender='$gender', dob='$dob', age='$age', occupation='$occupation', civil_status='$civil_status', brgy='$brgy', blood_type='$blood_type', emer_name='$emer_name', emer_address='$emer_address', emer_relationship='$emer_relationship', emer_contact_number='$emer_contact_number', image='$image', role='$role', status='$status' WHERE id='$id'";
        
        mysqli_query($db, $sql);

        if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
            $msg = "Image updated successfully";
        } else {
            $msg = "Failed to upload image";
        }
    } else {
      $sql = "UPDATE user SET full_name='$full_name', contact_number='$contact_number', address='$address', gender='$gender', dob='$dob', age='$age', occupation='$occupation', civil_status='$civil_status', brgy='$brgy', blood_type='$blood_type', emer_name='$emer_name', emer_address='$emer_address', emer_relationship='$emer_relationship', emer_contact_number='$emer_contact_number', role='$role', status='$status' WHERE id='$id'";
    
        if(!mysqli_query($db, $sql)){
            echo("Error description: " . mysqli_error($db));
        }
    }

    header("Location:http://localhost/Senior%20Citizen%20Management%20System/senior");
  }
?>