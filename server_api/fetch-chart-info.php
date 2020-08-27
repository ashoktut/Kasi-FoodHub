<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

include "library/config.php";

$postjson = json_decode(file_get_contents('php://input'), true);

$data[] = array(
    'name' => $row['name'],
    'qty' => $row['qty'],
    );

    echo json_encode(array('server_response'=> $response));
    mysqli_close($mysqli)

?>