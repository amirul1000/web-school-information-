<h5 class="font-20 mt-15 mb-1"><?php echo str_replace('_',' ','Content_manage'); ?></h5>
<?php
  	echo $this->session->flashdata('msg');
?>
<!--Action-->
<div>
	<div class="float_left padding_10">
		<a href="<?php echo site_url('admin/content_manage/save'); ?>"
			class="btn btn-success">Add</a>
	</div>
	<div class="float_left padding_10">
		<i class="fa fa-download"></i> Export <select name="xeport_type" class="select"
			onChange="window.location='<?php echo site_url('admin/content_manage/export'); ?>/'+this.value">
			<option>Select..</option>
			<option>Pdf</option>
			<option>CSV</option>
		</select>
	</div>
	<div  class="float_right padding_10">
		<ul class="left-side-navbar d-flex align-items-center">
			<li class="hide-phone app-search mr-15">
                <?php echo form_open_multipart('admin/content_manage/search/',array("class"=>"form-horizontal")); ?>
                    <input name="key" type="text"
				value="<?php echo isset($key)?$key:'';?>" placeholder="Search..."
				class="form-control">
				<button type="submit" class="mr-0">
					<i class="fa fa-search"></i>
				</button>
                <?php echo form_close(); ?>
            </li>
		</ul>
	</div>
</div>
<!--End of Action//--> 
   
<!--Data display of content_manage-->       
<table class="table table-striped table-bordered">
    <tr>
		<th  width="10%">Content Type</th>
<th>Content</th>

		<th  width="10%">Actions</th>
    </tr>
	<?php foreach($content_manage as $c){ ?>
    <tr>
		<td valign="top"><?php
									   $this->CI =& get_instance();
									   $this->CI->load->database();	
									   $this->CI->load->model('Content_type_model');
									   $dataArr = $this->CI->Content_type_model->get_content_type($c['content_type_id']);
									   echo $dataArr['content_name'];?></td>
<td>
  <a href="javascript:void();" id="id_<?=$c['id']?>_btn"  onClick="showHide('id_<?=$c['id']?>');">Show</a>
     <div class="portlet-body" id="id_<?=$c['id']?>" style="display:none;">
	 <?php echo $c['content']; ?>
     </div>
</td>

		<td>
            <a href="<?php echo site_url('admin/content_manage/details/'.$c['id']); ?>"  class="action-icon"> <i class="zmdi zmdi-eye"></i></a>
            <a href="<?php echo site_url('admin/content_manage/save/'.$c['id']); ?>" class="action-icon"> <i class="zmdi zmdi-edit"></i></a>
            <a href="<?php echo site_url('admin/content_manage/remove/'.$c['id']); ?>" onClick="return confirm('Are you sure to delete this item?');" class="action-icon"> <i class="zmdi zmdi-delete"></i></a>
        </td>
    </tr>
	<?php } ?>
</table>
<!--End of Data display of content_manage//--> 
<script>
   function showHide(id) {
		  var x = document.getElementById(id);
		  if (x.style.display === "none") {
			x.style.display = "block";
			$("#"+id+"_btn").html("Hide");
		  } else {
			x.style.display = "none";
			$("#"+id+"_btn").html("Show");
		  }
		}
</script>
<!--No data-->
<?php
	if(count($content_manage)==0){
?>
 <div align="center"><h3>Data is not exists</h3></div>
<?php
	}
?>
<!--End of No data//-->

<!--Pagination-->
<?php
	echo $link;
?>
<!--End of Pagination//-->
