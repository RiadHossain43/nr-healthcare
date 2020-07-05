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
		$nameError = "Name is required.!";
	}else 
	{
		$name = inputCheck($_POST["name"]);
		if(	!preg_match("/^[a-zA-Z ]*$/", $name))
		{
			$nameError = "Only letters and White space are alloed.";
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
		if(!filter_var($phone, FILTER_SANITIZE_NUMBER_INT))
		{
			$phoneError = "Invalid phone format";
		}
    }
    if(empty($_POST["organization"]))
	{
		$orgError = "Please put a company name";
	}else 
	{
		$org = inputCheck($_POST["organization"]);
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
		$emailTo = "riadhossain7464@gmail.com";

		$subject = $subj=="" ? "New submission from a client" : $subj ;
		$body = "Client Name :". $Client."\n".
				"Client Phone :".$Client_phone."\n".
                "Client email :".$Client_email_id."\n".
                "Client organiztion/company name:".$Client_org."\n".
				"Notes :".$notes;

		$headers = "From :". $emailFrom ."\r\n".
					"Reply to:".$emailTo."\r\n";

		mail($emailTo,$subject,$body,$headers);
		header("Location: index.html");
	}else 
	{
		//echo "Opps...Error occured.! PLease Enter a name with laters and spaces and a valid Email format.\n Click back button on your browser to go back.";
		print " <div style=\"position: absolute;
				border: 1px solid black;
				top: 40%;
				left: 50%;
				width: 400px;
				transform: translate(-50%,-40%);
				border-radius: 10px;
				display:flex;
				flex-direction:column;
				\">
					<h3 style=\"margin:14px;\">Opps...Error occured.! PLease enter a valid Email to request a service.\n Click Go Back button to go back.</h3>
					<a href=\"index.html\" style=\"padding:15px;background:black;color:white;border-radius: 8px;text-decoration:none;\">Go Back</a>
				</div>";
		/*echo "
		      <div style="position: absolute;
				border: 1px solid black;
				top: 50%;
				left: 50%;
				width: 400px;
				transform: translate(-50%,-50%);
				border-radius: 10px;
				">
					<h3>Opps...Error occured.! PLease Enter a name with laters and spaces and a valid Email format.\n Click back button on your browser to go back.</h3>
				</div>";*/
			
	}

?>