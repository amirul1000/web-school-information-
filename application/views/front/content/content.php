
<?php
    $this->db->where('content_name', urldecode($this->input->get_post('cn')));
	$contenttype = $this->db->get('content_type')->result_array();	
	$db_error = $this->db->error();
	if (!empty($db_error['code'])){
		echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
		exit;
	}
	$content_type_id = $contenttype[0]['id'];
	
	
   
    $this->db->where('content_type_id', $content_type_id);
	$resultpic = $this->db->get('content_manage')->result_array();
	$db_error = $this->db->error();
	if (!empty($db_error['code'])){
		echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
		exit;
	}
	
	
	
	echo $resultpic[0]['content'];
?>
  