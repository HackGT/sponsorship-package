<?php 

$myfile = fopen('interest_list.txt', 'a');
fwrite($myfile, $_POST['email']."\n");
fclose($myFile);

?>