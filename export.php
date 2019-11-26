<?php
    header("Content-type:application/pdf");
    header("Content-Disposition:attachment;filename='downloaded.pdf'");
    use \setasign\Fpdi\Fpdi;
    require('vendor/fpdf181/fpdf.php');
    require('vendor/FPDI-2.2.0/src/autoload.php');

    function generatePDF($templateFront, $templateBack, $output, $image, $full_name, $brgy, $contact_number, $dob, $blood_type, $emer_name, $emer_relationship, $emer_address, $emer_contact_number) {
        $pdf = new Fpdi();

        $pageCount = $pdf->setSourceFile($templateFront);
        $tpplFront = $pdf->importPage(1);
        $pdf->addPage();
        $pdf->useImportedPage($tpplFront, 10, 10, 100);

        $pageCount = $pdf->setSourceFile($templateBack);
        $tpplBack = $pdf->importPage(1);
        $pdf->useImportedPage($tpplBack, 10, 80, 100);

        $pdf->Image($image,86,30,20,20);
        
        // Name
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(20, 34);
        $pdf->Write(0, $full_name);

        // Member of
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(55, 40);
        $pdf->Write(0, 'Federation of');
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(15, 46);
        $pdf->Write(0, 'Senior Citizens Associations of the PH, Inc');

        // Address
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(31, 86);
        $pdf->Write(0, $brgy);
        
        // Contact Number
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(72, 92);
        $pdf->Write(0, $contact_number);
        
        // DOB
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(32, 98);
        $pdf->Write(0, $dob);
        
        // Blood Type
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(94, 98);
        $pdf->Write(0, $blood_type);
        
        // Emer Name
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(23, 111);
        $pdf->Write(0, $emer_name);
        
        // Emer Relationship
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(86, 111);
        $pdf->Write(0, $emer_relationship);
        
        // Emer Address
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(27, 117);
        $pdf->Write(0, $emer_address);
        
        // Emer Contact Number
        $pdf->SetFont('Helvetica','',10);
        $pdf->SetTextColor(0,0,0);
        $pdf->SetXY(80, 117);
        $pdf->Write(0, $emer_contact_number);
         
        $pdf->Output($output, "F");
    }

    function getData(){
        $db = mysqli_connect("localhost", "root", "", "senior_citizen");

        $image = mysqli_real_escape_string($db, $_POST['image']);
        $full_name = mysqli_real_escape_string($db, $_POST['full_name']);
        $brgy = mysqli_real_escape_string($db, $_POST['brgy']);
        $contact_number = mysqli_real_escape_string($db, $_POST['contact_number']);
        $dob = mysqli_real_escape_string($db, $_POST['dob']);
        $brgy = mysqli_real_escape_string($db, $_POST['brgy']);
        $blood_type = mysqli_real_escape_string($db, $_POST['blood_type']);
        if($blood_type == '0'){
            $blood_type = 'A+';
        } else if($blood_type == '1'){
            $blood_type = 'A-';
        } else if($blood_type == '2'){
            $blood_type = 'B+';
        } else if($blood_type == '3'){
            $blood_type = 'B-';
        } else if($blood_type == '4'){
            $blood_type = 'AB+';
        } else if($blood_type == '5'){
            $blood_type = 'AB-';
        } else if($blood_type == '6'){
            $blood_type = 'O+';
        } else if($blood_type == '7'){
            $blood_type = 'O-';
        }
 
        $emer_name = mysqli_real_escape_string($db, $_POST['emer_name']);
        $emer_relationship = mysqli_real_escape_string($db, $_POST['emer_relationship']);
        $emer_address = mysqli_real_escape_string($db, $_POST['emer_address']);
        $emer_contact_number = mysqli_real_escape_string($db, $_POST['emer_contact_number']);

        $export = 'exports/'.strtolower(str_replace(" ", "_", $full_name).'.pdf');

        generatePDF("files/template-front.pdf", "files/template-back.pdf", $export, $image, $full_name, $brgy, $contact_number, $dob, $blood_type, $emer_name, $emer_relationship, $emer_address, $emer_contact_number);
    }

    getData();         
?>