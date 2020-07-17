<?php

function inputCheck($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);

	return $data;
}

$nameError = $emailError = $phoneError = $orgError = "";
$name = $email = $notes = $subj = $phone = $org = ""; 

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	if(empty($_POST["name"]))
	{
		$nameError = "Name is required..!";
	}else 
	{
		$name = inputCheck($_POST["name"]);
		if(	!preg_match("/^[a-zA-Z0-9 .]*$/", $name))
		{
			$nameError = "Only letters and white space are allowed for name.";
		}
	}
	if(empty($_POST["email"]))
	{
		$emailError = "Email is required..!";
	}
	else 
	{
		$email = inputCheck($_POST["email"]);
		if(!filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			$emailError = "Invalid email format";
		}
	}
	if(empty($_POST["phone"]))
	{
		$phoneError = "Phone is required..!";
	}
	else 
	{
		$phone = inputCheck($_POST["phone"]);
		$phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
		$phone = str_replace("-", "", $phone);
		if(strlen($phone) < 10 || strlen($phone) > 14)
		{
			$phoneError = "Invalid phone number format";
		}
    }
    if(empty($_POST["organization"]))
	{
		$orgError = "Please put a company name..!";
	}else 
	{
		$org = inputCheck($_POST["organization"]);
		if(	!preg_match("/^[a-zA-Z0-9 .]*$/", $org))
		{
			$orgError = "Only letters and numbers allowed.";
		}
	}
	if(empty($_POST["notes"]))
	{
		$notes = "";
	}else 
	{
		$notes = inputCheck($_POST["notes"]);
	}
	if(empty($_POST["subject"]))
	{
		$subj = "";
	}else 
	{
		$subj = inputCheck($_POST["subject"]);
	}
}
    if($nameError == "" &&  $emailError == "" && $phoneError == "" && $orgError == "")
	{
		$Client = $name;
		$Client_email_id = $email;
		$Client_phone = $phone;
        $Client_org = $org;

		$emailFrom = "hassanhossain43@gmail.com";
		$emailTo = "nuraz.zamal@nrhealthcare.net"; 

		$subject = $subj=="" ? "New submission from a client" : $subj ;
		$body = "Client Name :". $Client."\n".
				"Client Phone :".$Client_phone."\n".
                "Client email :".$Client_email_id."\n".
                "Client organiztion/company name:".$Client_org."\n".
				"Notes :".$notes;

		$headers = "From :". $emailFrom ."\r\n".
					"Reply to:".$emailTo."\r\n";

		mail($emailTo,$subject,$body,$headers);
		header("Location: r_success.html");
	}else 
	{
		
		print " <div style=\"position: absolute;
				border: 1px solid rgba(236,64,122 ,1);
				top: 40%;
				left: 50%;
				width: 400px;
				transform: translate(-50%,-40%);
				border-radius: 10px;
				display:flex;
				flex-direction:column;
				color:rgba(236,64,122 ,1);
				\">
				<h3 style=\"margin:14px;\">Oops something went wrong there !!</h3>
				<h3 style=\"margin:14px;\">
					{$nameError}
				</h3>
				<h3 style=\"margin:14px;\">
					{$emailError}
				</h3>
				<h3 style=\"margin:14px;\">
					{$phoneError}
				</h3>
				<h3 style=\"margin:14px;\">
					{$orgError}
				</h3>
				<a href=\"services.html\" style=\"padding:15px;background:rgba(236,64,122 ,1);color:white;border-radius: 8px;text-decoration:none;\">Go Back</a>
				</div>";
			
	}

?>