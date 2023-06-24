<?php
    $this->db->order_by('display_order_no', 'asc');
	$resultpic = $this->db->get('gallery')->result_array();
	$db_error = $this->db->error();
	if (!empty($db_error['code'])){
		echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
		exit;
	}
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>

<div class="home-demo">
  <div class="owl-carousel owl-theme">
    <?php
		  for($i=0;$i<count($resultpic);$i++){
		?>
    <div class="item">
      <img src="<?php echo base_url().'public/'.$resultpic[$i]['file_picture']?>">
    </div>
     <?php
		  }
		?>
  </div>
</div>
<style>
.home-demo .item {
    background: #ff3f4d;
}
.home-demo h2 {
    color: #FFF;
    text-align: center;
    padding: 5rem 0;
    margin: 0;
    font-style: italic;
    font-weight: 300;
}
.owl-carousel .owl-nav button{width:25px; text-align:center; border:1px solid #ccc !important;}

</style>

<script>
 $(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
	  owl.owlCarousel({
		items: 3,
		margin: 10,
		loop: true,
		nav: true,
		autoplay: true,
        smartSpeed: 500,
        nav: true,
        dots: false,
		navText: ['<span aria-label="Previous">‹</span>','<span aria-label="Next">›</span>'],
		lazyLoad:true,
	  });
	});
</script>

<br><br>
<section id="about" class="about-area area-padding">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
    				<p align="justify">
 <?php
    $this->db->where('content_name','About Us');
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
</p>                    
               </div>
             </div>  
        </div>
</section>        