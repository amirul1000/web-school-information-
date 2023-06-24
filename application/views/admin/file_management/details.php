<a  href="<?php echo site_url('admin/file_management/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php echo str_replace('_',' ','File_management'); ?></h5>
<!--Data display of file_management with id--> 
<?php
	$c = $file_management;
?> 
<table class="table table-striped table-bordered">         
		<tr><td>Name</td><td><?php echo $c['name']; ?></td></tr>

<tr><td>File Upload</td><td><?php
											if(is_file(APPPATH.'../public/'.$c['file_upload'])&&file_exists(APPPATH.'../public/'.$c['file_upload']))
											{
										 ?>
										  <img src="<?php echo base_url().'public/'.$c['file_upload']?>" class="picture_50x50">
										  <?php
											}
											else
											{
										?>
										<img src="<?php echo base_url()?>public/uploads/no_image.jpg" class="picture_50x50">
										<?php		
											}
										  ?>	
										</td></tr>

<tr><td>Created At</td><td><?php echo $c['created_at']; ?></td></tr>

<tr><td>Updated At</td><td><?php echo $c['updated_at']; ?></td></tr>


</table>
<!--End of Data display of file_management with id//--> 