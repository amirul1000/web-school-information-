<a  href="<?php echo site_url('admin/content_manage/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php echo str_replace('_',' ','Content_manage'); ?></h5>
<!--Data display of content_manage with id--> 
<?php
	$c = $content_manage;
?> 
<table class="table table-striped table-bordered">         
		<tr><td>Content Type</td><td><?php
									   $this->CI =& get_instance();
									   $this->CI->load->database();	
									   $this->CI->load->model('Content_type_model');
									   $dataArr = $this->CI->Content_type_model->get_content_type($c['content_type_id']);
									   echo $dataArr['content_name'];?></td></tr>

<tr><td>Content</td><td><?php echo $c['content']; ?></td></tr>

<tr><td>Created At</td><td><?php echo $c['created_at']; ?></td></tr>

<tr><td>Updated At</td><td><?php echo $c['updated_at']; ?></td></tr>


</table>
<!--End of Data display of content_manage with id//--> 