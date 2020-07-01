<?php

function inputCheck($data)
{
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);

	return $data;
}

$nameError = $emailError = "";
$name = $email = $message = ""; 

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
	if(empty($_POST["message"]))
	{
		$message = "";
	}else 
	{
		$message = inputCheck($_POST["message"]);
	}
}
    if($nameError == "" &&  $emailError == "")
	{
		$Client = $name;
		$Client_email_id = $email;

		$emailFrom = "hassanhossain43@gmail.com";
		$emailTo = "riadhossain7464@gmail.com";

		$subject = "New submission from a client";
		$body = "Client Name :". $Client."\n".
				 "Client_email :".$Client_email_id."\n".
				 "Message :".$message;

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
					<h3 style=\"margin:14px;\">Opps...Error occured.! PLease Enter a name with laters and spaces and a valid Email format.\n Click Go Back button to go back.</h3>
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