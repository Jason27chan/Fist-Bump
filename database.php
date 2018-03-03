<?php
	$data = $_POST['info'];

	$con = mysqli_connect('localhost',"root", "root", "test");
	if (!$con) {
	    die('Could not connect: ' . mysqli_error($con));
	}
	# $sql = "INSERT INTO test1 (info) VALUES (\"{$ftype}\", \"{$fsamp}\", \"{$fcutoff}\", \"{$order}\", \"{$window}\", \"{$tab}\")";
	$sql = "INSERT INTO test1 (information) VALUES (\"{$data}\");";

	if ($con->query($sql) === TRUE) {
	    echo "New record created successfully ";
	} else {
	    echo "Error: " . $sql . "<br>" . $con->error;
	} 	

?>