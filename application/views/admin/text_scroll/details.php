<a  href="<?php echo site_url('admin/text_scroll/index'); ?>" class="btn btn-info"><i class="arrow_left"></i> List</a>
<h5 class="font-20 mt-15 mb-1"><?php echo str_replace('_',' ','Text_scroll'); ?></h5>
<!--Data display of text_scroll with id--> 
<?php
	$c = $text_scroll;
?> 
<table class="table table-striped table-bordered">         
		<tr><td>Text Content</td><td><?php echo $c['text_content']; ?></td></tr>

<tr><td>Display</td><td><?php echo $c['display']; ?></td></tr>

<tr><td>Created At</td><td><?php echo $c['created_at']; ?></td></tr>

<tr><td>Updated At</td><td><?php echo $c['updated_at']; ?></td></tr>


</table>
<!--End of Data display of text_scroll with id//--> 