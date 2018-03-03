<?php
	$data = $_POST['info'];

	$con = mysqli_connect('localhost',"root", "root", "test");
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
	# $sql = "INSERT INTO test1 (info) VALUES (\"{$ftype}\", \"{$fsamp}\", \"{$fcutoff}\", \"{$order}\", \"{$window}\", \"{$tab}\")";
	$date_added = date("F j, Y");

	$sql = "INSERT INTO test1 (information, date_added) VALUES (\"{$data}\", \"{$date_added}\");";

	if ($con->query($sql) === TRUE) {
	    echo "New record created successfully ";
	} else {
	    echo "Error: " . $sql . "<br>" . $con->error;
	} 	

?>