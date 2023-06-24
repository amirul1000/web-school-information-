<a  href="<?php echo site_url('admin/members/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php if($id<0){echo "Save";}else { echo "Update";} echo " "; echo str_replace('_',' ','Members'); ?></h5>
<!--Form to save data-->
<?php echo form_open_multipart('admin/members/save/'.$members['id'],array("class"=>"form-horizontal")); ?>
<div class="card">
   <div class="card-body">    
        <div class="form-group"> 
                                        <label for="Members Info" class="col-md-4 control-label">Members Info</label> 
          <div class="col-md-8"> 
           <textarea  name="members_info"  id="members_info"  class="form-control" rows="4"/><?php echo ($this->input->post('members_info') ? $this->input->post('members_info') : $members['members_info']); ?></textarea> 
          </div> 
           </div>
<div class="form-group"> 
                                        <label for="File Picture" class="col-md-4 control-label">File Picture</label> 
          <div class="col-md-8"> 
           <input type="file" name="file_picture"  id="file_picture" value="<?php echo ($this->input->post('file_picture') ? $this->input->post('file_picture') : $members['file_picture']); ?>" class="form-control-file"/> 
          </div> 
            </div>
<div class="form-group"> 
          <label for="Display Order No" class="col-md-4 control-label">Display Order No</label> 
          <div class="col-md-8"> 
           <input type="text" name="display_order_no" value="<?php echo ($this->input->post('display_order_no') ? $this->input->post('display_order_no') : $members['display_order_no']); ?>" class="form-control" id="display_order_no" /> 
          </div> 
           </div>

   </div>
</div>
<div class="form-group">
    <div class="col-sm-offset-4 col-sm-8">
        <button type="submit" class="btn btn-success"><?php if(empty($members['id'])){?>Save<?php }else{?>Update<?php } ?></button>
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