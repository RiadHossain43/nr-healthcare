<?php

function inputCheck($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);

	return $data;
}

$nameError = $emailError = $phoneError = "";
$name = $email = $message = $subj = $phone = ""; 

if($_SERVER["REQUEST_METHOD"] == "POST")
{
	if(empty($_POST["name"]))
	{
		$nameError = "Name is required.!";
	}else 
	{
		$name = inputCheck($_POST["name"]);
		if(	!preg_match("/^[a-zA-Z0-9 .]*$/", $name))
		{
			$nameError = "Only letters and numbers allowed.";
		}
	}
	if(empty($_POST["email"]))
	{
		$emailError = "Email is required";
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
		$phoneError = "Phone is required";
	}
	else 
	{
		$phone = inputCheck($_POST["phone"]);
		$phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
		$phone = str_replace("-", "",$phone);
		if(strlen($phone) < 10 || strlen($phone) > 14)
		{
			$phoneError = "Invalid phone number format";
		}
	}
	if(empty($_POST["message"]))
	{
		$message = "";
	}else 
	{
		$message = inputCheck($_POST["message"]);
	}
	if(empty($_POST["subject"]))
	{
		$subj = "";
	}else 
	{
		$subj = inputCheck($_POST["subject"]);
	}
}
    if($nameError == "" &&  $emailError == "" && $phoneError == "" )
	{
		$Client = $name;
		$Client_email_id = $email;
		$Client_phone = $phone;

		$emailFrom = "hassanhossain43@gmail.com";
		$emailTo = "nuraz.zamal@nrhealthcare.net";

		$subject = $subj=="" ? "New submission from a client" : $subj ;
		$body = "Client Name :". $Client."\n".
				"Client Phone :".$Client_phone."\n".
				"Client email :".$Client_email_id."\n".
				"Message :".$message;

		$headers = "From :". $emailFrom ."\r\n".
					"Reply to:".$emailTo."\r\n";

		mail($emailTo,$subject,$body,$headers);
		header("Location: c_success.html");
	}else 
	{
		//border: 1px solid rgba(236,64,122 ,1);
		//echo "Opps...Error occured.! PLease Enter a name with laters and spaces and a valid Email format.\n Click back button on your browser to go back.";
		print " <div style=\"position: absolute;
				top: 50%;
				left: 50%;
				width: 80%;
				transform: translate(-50%,-50%);
				display:flex;
				flex-direction:column;
				justify-content:center;
				align-items:center;
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
					<a href=\"contact.html\" style=\"padding:15px;background:rgba(236,64,122 ,1);color:white;border-radius: 8px;text-decoration:none;text-align:center;\">Go Back</a>
				</div>";
			
	}

?>