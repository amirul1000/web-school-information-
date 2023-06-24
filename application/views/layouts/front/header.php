<!Doctype html>
<html lang="en">

<!-- Mirrored from www.bpscdepz.edu.bd/message/chairman-message by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 16 Aug 2022 07:35:35 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<title>BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC)</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC), bpsc,BEPZA PUBLIC SCHOOL AND COLLEGE, bepza, school, college">
	<meta name="keywords" content="BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC)">
	<meta name="author" content="Pata Corporation">
	<meta http-equiv="refresh" content="600">
	<meta name="robots" content="all">
	<meta name="rating" content="safe for kids">
	<link rel="shortcut icon" type="image/icon" href="<?php echo base_url(); ?>public/uploads/bpsclogo2.png">


  <link href="<?php echo base_url(); ?>public/front/css/styleDupl.css" rel=stylesheet>
<link href="<?php echo base_url(); ?>public/front/css/animate.css" rel=stylesheet>
<script src="<?php echo base_url(); ?>public/front/js/modernizr.html"></script>
<link rel="stylesheet" href="<?php echo base_url(); ?>public/front/fonts/css/font-awesome.min.css">
<link href="<?php echo base_url(); ?>public/front/css/paralaxBackground.min.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo base_url(); ?>public/front/css/duplStyle.css">
</head>
<body onkeydown="Disable_Control_C()">
	<a class="scrollToTop" href="#"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></a>
	<!-- header section Start -->
	<header>
  <div class="row">
		<div class="nav-top-body">
		    <div class="row">
		        <div class="col-md-1 col-sm-12">
		              
		        </div>
		        <div class="col-md-1 col-sm-12">
		            <div class="text-white" align="center"> 
		               <style>
		                   .logo-img{
		                       width:100px !important;
		                      // height:500px !important;
		                   }
		               </style>
		            	<img src="<?php echo base_url(); ?>public/uploads/bpsclogo2.png" class="img-circle logo-img" alt="BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC)
" title="BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC)
" style="width:100px !important;height:100px !important;">
		        </div>
		        </div>
		        <div class="col-md-8 col-sm-12" style="margin-top:1px;">
		            <div class="text-white" align="center"> 
				<span class="institute-name">BEPZA PUBLIC SCHOOL AND COLLEGE (BPSC) </span>
				<h1 class="ein">Ishwardi EPZ,Paksey,Pabna,Establishment Date:2019</h1>
				<h6 class="ein">EMIS Code:116061314</h6>
				
			 </div>
			 </div>
			<div class="col-md-2 col-sm-12" style="margin-left:0px; padding-left:0px;margin-top:25px">
           
        <div class="pull-left">
             <a href="<?=site_url('admin/login')?>" id="cloudcampuslogin" class="btn btn-primary" style="margin-left:90px; float:right;border-radius:15px; width:100%"> Login</a>
      </div>
   
      </div>
		</div>
        <?php
		   $this->db->where('display', 'yes');
			$txtscroll = $this->db->get('text_scroll')->result_array();
			$db_error = $this->db->error();
			if (!empty($db_error['code'])){
				echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
				exit;
			}
        
		?>
        
        <style>
		.scroll-left {
		 height: 50px;	
		 overflow: hidden;
		 position: relative;
		 background: white;
		 color: red;
		 border: 1px solid red;
		}
		.scroll-left p {
		 position: absolute;
		 width: 100%;
		 height: 100%;
		 margin: 0;
		 line-height: 50px;
		 text-align: center;
		 /* Starting position */
		 transform:translateX(100%);
		 /* Apply animation to this element */
		 animation: scroll-left 15s linear infinite;
		}
		/* Move it (define the animation) */
		@keyframes scroll-left {
		 0%   {
		 transform: translateX(100%); 		
		 }
		 100% {
		 transform: translateX(-100%); 
		 }
		}
		</style>
        <?php
		  if(count($txtscroll)>0){
		?>
        <div class="scroll-left">
            <p><?=$txtscroll[0]['text_content']?></p>
        </div>
        <?php
		  }
		 ?> 

		<nav class="navbar navbar-default" role="navigation" >
			 <div class="container" >
			 <div class="navbar-header" >
				 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
					 <span class="sr-only">Toggle navigation</span>
					 <span class="icon-bar"></span>
					 <span class="icon-bar"></span>
					 <span class="icon-bar"></span>
				 </button>
                    <a href="<?=site_url('homecontroller')?>">
		     		 <div class="navbar-brand navbar-brand-centered">
					    
				    </div>
                </a>
			 </div>

			 <!-- Collect the nav links, forms, and other content for toggling -->
			 <div class="collapse navbar-collapse" id="navbar-brand-centered" style="margin-left:2px">
				 <ul class="nav navbar-nav">
					  <li><a href="<?=site_url('homecontroller')?>"><i class="fa fa-home" aria-hidden="true"></i></a></li>
					  
					<!--  <marquee><p style="font-size:20px;color:white;"  > Admision is going on 2023</p></marquee> -->
                        
					  <li class="dropdown header-menu-dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">ABOUT US <span class="caret"></span></a>
						<ul class="dropdown-menu animated fadeInDown">
						    <li><a href="<?php echo site_url('content/index/?cn='.urlencode('School Establishment'))?>">SchoolEstablishment</a></li>
						    
							
							<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Mission'))?>">Mission </a></li>
							

							<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Vision'))?>">Vision</a></li>
							

						   	<li><a href="#"></a> &nbsp; &nbsp; </li>
						</ul>
					  </li>

						


						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ADMINISTRATION <span class="caret"></span></a>
							<ul class="dropdown-menu animated fadeInDown">
							    	<li><a href="<?php echo site_url('content/index/?cn='.urlencode('ChairmanMessage'))?>">Chairman Message</a></li>
							    		<li><a href="<?php echo site_url('content/index/?cn='.urlencode('ExecutiveDirectorMessage'))?>">ExecutiveDirectorMessage</a></li>
							    
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Governing Body'))?>">Governing Body</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Teachers & Staff'))?>">Teachers & Staff</a></li>
									<li><a href="<?php echo site_url('content/index/?cn='.urlencode('GRSFocalPoint'))?>">GRSFocalPoint</a></li>
								
         	<li><a href="#">&nbsp; &nbsp; </a></li>
							</ul>
						</li>

						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Academic <span class="caret"></span></a>
							<ul class="dropdown-menu animated fadeInDown">
							    	<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Fees'))?>">Fees</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Syllabus'))?>">Syllabus</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Class routine'))?>">Class routine</a></li>
									<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Course Plan'))?>">Course Plan</a></li>
										<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Uniform'))?>">Uniform</a></li>
								
								 	<li><a href="#">&nbsp; &nbsp; </a></li>
							</ul>
						</li>
				 </ul>

				 <ul class="nav navbar-nav ">
				         
					 		
						
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Results <span class="caret"></span></a>
							<ul class="dropdown-menu animated fadeInDown">
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('SSC'))?>">SSC</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('1ST Midterm Exam'))?>">1ST Midterm Exam</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Half Yearly Exam'))?>">	Half Yearly Exam</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('2nd Midterm Exam'))?>">2nd Midterm Exam</a></li>
								<li><a href="<?php echo site_url('content/index/?cn='.urlencode('Final Exam'))?>">Final Exam</a></li>

						

								 	<li><a href="#">&nbsp; &nbsp; </a></li>
							</ul>
						</li> 

                   
                   <li class="dropdown">
                     <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Office Order and Notice <span class="caret"></span></a>
                     	
                     
                        	<li><a href="#">&nbsp; &nbsp; </a></li>
                     
                   </li>

					 <li class="dropdown">
						 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Publication<span class="caret"></span></a>
						 
					 </li>

					 <li class="dropdown">
						 <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">GALLERY<span class="caret"></span></a>
						 <ul class="dropdown-menu animated fadeInDown">
							 <li><a href="<?php echo site_url('content/index/?cn='.urlencode('Photo'))?>">Photo </a></li>
							 <li><a href="<?php echo site_url('content/index/?cn='.urlencode('Video'))?>">Video </a></li>
							  	<li><a href="#">&nbsp; &nbsp; </a></li>
						 </ul>
					 </li>
				

					 
				 </ul>
			 </div>
		 </div>
		</nav>
	</div>
</header>

	<!-- header section End -->
    	<!-- Body Start -->
	<section class="mt30 mb30">
		<div class="container">
			<div class="row">
                    
                  