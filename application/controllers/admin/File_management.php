<?php

 /**
 * Author: Amirul Momenin
 * Desc:File_management Controller
 *
 */
class File_management extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->load->helper('url'); 
		$this->load->helper('form');
		$this->load->library('session');
		$this->load->library('pagination');
		$this->load->library('Customlib');
		$this->load->helper(array('cookie', 'url')); 
		$this->load->database();  
		$this->load->model('File_management_model');
		if(! $this->session->userdata('validated')){
				redirect('admin/login/index');
		}  
    } 
	
    /**
	 * Index Page for this controller.
	 *@param $start - Starting of file_management table's index to get query
	 *
	 */
    function index($start=0){
		$limit = 10;
        $data['file_management'] = $this->File_management_model->get_limit_file_management($limit,$start);
		//pagination
		$config['base_url'] = site_url('admin/file_management/index');
		$config['total_rows'] = $this->File_management_model->get_count_file_management();
		$config['per_page'] = 10;
		//Bootstrap 4 Pagination fix
		$config['full_tag_open']    = '<div class="pagging text-center"><nav><ul class="pagination">';
		$config['full_tag_close']   = '</ul></nav></div>';
		$config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
		$config['num_tag_close']    = '</span></li>';
		$config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
		$config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
		$config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['next_tag_close']   = '<span aria-hidden="true"></span></span></li>';
		$config['next_tag_close']   = '<span aria-hidden="true">&raquo;</span></span></li>';
		$config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['prev_tag_close']   = '</span></li>';
		$config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
		$config['first_tag_close']  = '</span></li>';
		$config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['last_tag_close']   = '</span></li>';		
		$this->pagination->initialize($config);
        $data['link'] =$this->pagination->create_links();
		
        $data['_view'] = 'admin/file_management/index';
        $this->load->view('layouts/admin/body',$data);
    }
	
	 /**
     * Save file_management
	 *@param $id - primary key to update
	 *
     */
    function save($id=-1){   
		$file_upload = "";
 
		$created_at = "";
$updated_at = "";

		if($id<=0){
															 $created_at = date("Y-m-d H:i:s");
														 }
else if($id>0){
															 $updated_at = date("Y-m-d H:i:s");
														 }

		$params = array(
					 'name' => html_escape($this->input->post('name')),
'file_upload' => $file_upload,
'created_at' =>$created_at,
'updated_at' =>$updated_at,

				);
		
						$config['upload_path']          = "./public/uploads/images/file_management";
						$config['allowed_types']        = "*";
						//$config['max_size']             = 100;
						//$config['max_width']            = 1024;
						//$config['max_height']           = 768;
						
						

						
						if(isset($_POST) && count($_POST) > 0)     
							{  
							    
							    	$new_name = time().str_replace(" ","_",$_FILES["file_upload"]['name']);
						$config['file_name'] = $new_name;
						$config['encrypt_name'] = FALSE;
						
						$this->load->library('upload', $config);
							    
							    
							  if(strlen($_FILES['file_upload']['name'])>0 && $_FILES['file_upload']['size']>0)
								{
									if ( ! $this->upload->do_upload('file_upload'))
									{
										$error = array('error' => $this->upload->display_errors());
									}
									else
									{
										$file_upload = base_url()."public/uploads/images/file_management/".$new_name;
									    $params['file_upload'] = $file_upload;
									}
								}
								else
								{
									unset($params['file_upload']);
								}
							}
							
						    
		if($id>0){
							                        unset($params['created_at']);
						                          }if($id<=0){
							                        unset($params['updated_at']);
						                          } 
		$data['id'] = $id;
		//update		
        if(isset($id) && $id>0){
			$data['file_management'] = $this->File_management_model->get_file_management($id);
            if(isset($_POST) && count($_POST) > 0){   
                $this->File_management_model->update_file_management($id,$params);
				$this->session->set_flashdata('msg','File_management has been updated successfully');
                redirect('admin/file_management/index');
            }else{
                $data['_view'] = 'admin/file_management/form';
                $this->load->view('layouts/admin/body',$data);
            }
        } //save
		else{
			if(isset($_POST) && count($_POST) > 0){   
                $file_management_id = $this->File_management_model->add_file_management($params);
				$this->session->set_flashdata('msg','File_management has been saved successfully');
                redirect('admin/file_management/index');
            }else{  
			    $data['file_management'] = $this->File_management_model->get_file_management(0);
                $data['_view'] = 'admin/file_management/form';
                $this->load->view('layouts/admin/body',$data);
            }
		}
        
    } 
	
	/**
     * Details file_management
	 * @param $id - primary key to get record
	 *
     */
	function details($id){
        $data['file_management'] = $this->File_management_model->get_file_management($id);
		$data['id'] = $id;
        $data['_view'] = 'admin/file_management/details';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Deleting file_management
	 * @param $id - primary key to delete record
	 *
     */
    function remove($id){
        $file_management = $this->File_management_model->get_file_management($id);

        // check if the file_management exists before trying to delete it
        if(isset($file_management['id'])){
            $this->File_management_model->delete_file_management($id);
			$this->session->set_flashdata('msg','File_management has been deleted successfully');
            redirect('admin/file_management/index');
        }
        else
            show_error('The file_management you are trying to delete does not exist.');
    }
	
	/**
     * Search file_management
	 * @param $start - Starting of file_management table's index to get query
     */
	function search($start=0){
		if(!empty($this->input->post('key'))){
			$key =$this->input->post('key');
			$_SESSION['key'] = $key;
		}else{
			$key = $_SESSION['key'];
		}
		
		$limit = 10;		
		$this->db->like('id', $key, 'both');
$this->db->or_like('name', $key, 'both');
$this->db->or_like('file_upload', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');


		$this->db->order_by('id', 'desc');
		
        $this->db->limit($limit,$start);
        $data['file_management'] = $this->db->get('file_management')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		
		//pagination
		$config['base_url'] = site_url('admin/file_management/search');
		$this->db->reset_query();		
		$this->db->like('id', $key, 'both');
$this->db->or_like('name', $key, 'both');
$this->db->or_like('file_upload', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');

		$config['total_rows'] = $this->db->from("file_management")->count_all_results();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		$config['per_page'] = 10;
		// Bootstrap 4 Pagination fix
		$config['full_tag_open']    = '<div class="pagging text-center"><nav><ul class="pagination">';
		$config['full_tag_close']   = '</ul></nav></div>';
		$config['num_tag_open']     = '<li class="page-item"><span class="page-link">';
		$config['num_tag_close']    = '</span></li>';
		$config['cur_tag_open']     = '<li class="page-item active"><span class="page-link">';
		$config['cur_tag_close']    = '<span class="sr-only">(current)</span></span></li>';
		$config['next_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['next_tag_close']   = '<span aria-hidden="true"></span></span></li>';
		$config['next_tag_close']   = '<span aria-hidden="true">&raquo;</span></span></li>';
		$config['prev_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['prev_tag_close']   = '</span></li>';
		$config['first_tag_open']   = '<li class="page-item"><span class="page-link">';
		$config['first_tag_close']  = '</span></li>';
		$config['last_tag_open']    = '<li class="page-item"><span class="page-link">';
		$config['last_tag_close']   = '</span></li>';
		$this->pagination->initialize($config);
        $data['link'] =$this->pagination->create_links();
		
		$data['key'] = $key;
		$data['_view'] = 'admin/file_management/index';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Export file_management
	 * @param $export_type - CSV or PDF type 
     */
	function export($export_type='CSV'){
	  if($export_type=='CSV'){	
		   // file name 
		   $filename = 'file_management_'.date('Ymd').'.csv'; 
		   header("Content-Description: File Transfer"); 
		   header("Content-Disposition: attachment; filename=$filename"); 
		   header("Content-Type: application/csv; ");
		   // get data 
		   $this->db->order_by('id', 'desc');
		   $file_managementData = $this->File_management_model->get_all_file_management();
		   // file creation 
		   $file = fopen('php://output', 'w');
		   $header = array("Id","Name","File Upload","Created At","Updated At"); 
		   fputcsv($file, $header);
		   foreach ($file_managementData as $key=>$line){ 
			 fputcsv($file,$line); 
		   }
		   fclose($file); 
		   exit; 
	  }else if($export_type=='Pdf'){
		    $this->db->order_by('id', 'desc');
		    $file_management = $this->db->get('file_management')->result_array();
		   // get the HTML
			ob_start();
			include(APPPATH.'views/admin/file_management/print_template.php');
			$html = ob_get_clean();
			require_once FCPATH.'vendor/autoload.php';			
			$mpdf = new \Mpdf\Mpdf();
			$mpdf->WriteHTML($html);
			$mpdf->Output();
			exit;
	  }
	   
	}
}
//End of File_management controller