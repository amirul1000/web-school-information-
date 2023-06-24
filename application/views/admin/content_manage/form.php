<a  href="<?php echo site_url('admin/content_manage/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php if($id<0){echo "Save";}else { echo "Update";} echo " "; echo str_replace('_',' ','Content_manage'); ?></h5>
<!--Form to save data-->
<?php echo form_open_multipart('admin/content_manage/save/'.$content_manage['id'],array("class"=>"form-horizontal")); ?>
<div class="card">
   <div class="card-body">    
        <div class="form-group"> 
                                        <label for="Content Type" class="col-md-4 control-label">Content Type</label> 
          <div class="col-md-8"> 
           <?php 
             $this->CI =& get_instance(); 
             $this->CI->load->database();  
             $this->CI->load->model('Content_type_model'); 
             $dataArr = $this->CI->Content_type_model->get_all_content_type(); 
          ?> 
          <select name="content_type_id"  id="content_type_id"  class="form-control"/> 
            <option value="">--Select--</option> 
            <?php 
             for($i=0;$i<count($dataArr);$i++) 
             {  
            ?> 
            <option value="<?=$dataArr[$i]['id']?>" <?php if($content_manage['content_type_id']==$dataArr[$i]['id']){ echo "selected";} ?>><?=$dataArr[$i]['content_name']?></option> 
            <?php 
             } 
            ?> 
          </select> 
          </div> 
            </div>
<div class="form-group"> 
                                        <label for="Content" class="col-md-4 control-label">Content</label> 
          <div class="col-md-8"> 
           <textarea  name="content"  id="content"  class="form-control" rows="4"/><?php echo ($this->input->post('content') ? $this->input->post('content') : $content_manage['content']); ?></textarea> 
          </div> 
           </div>

   </div>
</div>
<div class="form-group">
    <div class="col-sm-offset-4 col-sm-8">
        <button type="submit" class="btn btn-success"><?php if(empty($content_manage['id'])){?>Save<?php }else{?>Update<?php } ?></button>
    </div>
</div>
<?php echo form_close(); ?>
<!--End of Form to save data//-->	
<!--JQuery-->
<script>
	/*$( ".datepicker" ).datepicker({
		dateFormat: "yy-mm-dd", 
		changeYear: true,
		changeMonth: true,
		showOn: 'button',
		buttonText: 'Show Date',
		buttonImageOnly: true,
		buttonImage: '<?php echo base_url(); ?>public/datepicker/images/calendar.gif',
	});*/
</script>  
<script src="https://cdn.ckeditor.com/4.19.1/standard/ckeditor.js"></script>
<script language="javascript">
/*CKEDITOR.replace( 'content', {
	  height: 300,
	  filebrowserUploadUrl: "<?php echo site_url('admin/content_manage/upload_picture'); ?>"
	 });*/
	 
 CKEDITOR.config.allowedContent = true;
 CKEDITOR.replace('content', {
        filebrowserUploadUrl: "<?php echo site_url('admin/content_manage/upload_picture'); ?>",
        filebrowserUploadMethod: 'form',
        filebrowserBrowseUrl : "<?php echo site_url('admin/content_manage/upload_picture'); ?>",
        filebrowserImageBrowseUrl : "<?php echo site_url('admin/content_manage/upload_picture'); ?>",
         
    });	 
</script>
			