<a  href="<?php echo site_url('admin/file_management/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php if($id<0){echo "Save";}else { echo "Update";} echo " "; echo str_replace('_',' ','File_management'); ?></h5>
<!--Form to save data-->
<?php echo form_open_multipart('admin/file_management/save/'.$file_management['id'],array("class"=>"form-horizontal")); ?>
<div class="card">
   <div class="card-body">    
        <div class="form-group"> 
          <label for="Name" class="col-md-4 control-label">Name</label> 
          <div class="col-md-8"> 
           <input type="text" name="name" value="<?php echo ($this->input->post('name') ? $this->input->post('name') : $file_management['name']); ?>" class="form-control" id="name" /> 
          </div> 
           </div>
<div class="form-group"> 
                                        <label for="File Upload" class="col-md-4 control-label">File Upload</label> 
          <div class="col-md-8"> 
           <input type="file" name="file_upload"  id="file_upload" value="<?php echo ($this->input->post('file_upload') ? $this->input->post('file_upload') : $file_management['file_upload']); ?>" class="form-control-file"/> 
          </div> 
            </div>

   </div>
</div>
<div class="form-group">
    <div class="col-sm-offset-4 col-sm-8">
        <button type="submit" class="btn btn-success"><?php if(empty($file_management['id'])){?>Save<?php }else{?>Update<?php } ?></button>
    </div>
</div>
<?php echo form_close(); ?>
<!--End of Form to save data//-->	
<!--JQuery-->
<script>
	$( ".datepicker" ).datepicker({
		dateFormat: "yy-mm-dd", 
		changeYear: true,
		changeMonth: true,
		showOn: 'button',
		buttonText: 'Show Date',
		buttonImageOnly: true,
		buttonImage: '<?php echo base_url(); ?>public/datepicker/images/calendar.gif',
	});
</script>  			