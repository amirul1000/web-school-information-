<?php

 /**
 * Author: Amirul Momenin
 * Desc:Content_type Controller
 *
 */
class Content_type extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->load->helper('url'); 
		$this->load->helper('form');
		$this->load->library('session');
		$this->load->library('pagination');
		$this->load->library('Customlib');
		$this->load->helper(array('cookie', 'url')); 
		$this->load->database();  
		$this->load->model('Content_type_model');
		if(! $this->session->userdata('validated')){
				redirect('admin/login/index');
		}  
    } 
	
    /**
	 * Index Page for this controller.
	 *@param $start - Starting of content_type table's index to get query
	 *
	 */
    function index($start=0){
		$limit = 10;
        $data['content_type'] = $this->Content_type_model->get_limit_content_type($limit,$start);
		//pagination
		$config['base_url'] = site_url('admin/content_type/index');
		$config['total_rows'] = $this->Content_type_model->get_count_content_type();
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
		
        $data['_view'] = 'admin/content_type/index';
        $this->load->view('layouts/admin/body',$data);
    }
	
	 /**
     * Save content_type
	 *@param $id - primary key to update
	 *
     */
    function save($id=-1){   
		 
		$created_at = "";
$updated_at = "";

		if($id<=0){
															 $created_at = date("Y-m-d H:i:s");
														 }
else if($id>0){
															 $updated_at = date("Y-m-d H:i:s");
														 }

		$params = array(
					 'content_name' => html_escape($this->input->post('content_name')),
'created_at' =>$created_at,
'updated_at' =>$updated_at,

				);
		 
		if($id>0){
							                        unset($params['created_at']);
						                          }if($id<=0){
							                        unset($params['updated_at']);
						                          } 
		$data['id'] = $id;
		//update		
        if(isset($id) && $id>0){
			$data['content_type'] = $this->Content_type_model->get_content_type($id);
            if(isset($_POST) && count($_POST) > 0){   
                $this->Content_type_model->update_content_type($id,$params);
				$this->session->set_flashdata('msg','Content_type has been updated successfully');
                redirect('admin/content_type/index');
            }else{
                $data['_view'] = 'admin/content_type/form';
                $this->load->view('layouts/admin/body',$data);
            }
        } //save
		else{
			if(isset($_POST) && count($_POST) > 0){   
                $content_type_id = $this->Content_type_model->add_content_type($params);
				$this->session->set_flashdata('msg','Content_type has been saved successfully');
                redirect('admin/content_type/index');
            }else{  
			    $data['content_type'] = $this->Content_type_model->get_content_type(0);
                $data['_view'] = 'admin/content_type/form';
                $this->load->view('layouts/admin/body',$data);
            }
		}
        
    } 
	
	/**
     * Details content_type
	 * @param $id - primary key to get record
	 *
     */
	function details($id){
        $data['content_type'] = $this->Content_type_model->get_content_type($id);
		$data['id'] = $id;
        $data['_view'] = 'admin/content_type/details';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Deleting content_type
	 * @param $id - primary key to delete record
	 *
     */
    function remove($id){
        $content_type = $this->Content_type_model->get_content_type($id);

        // check if the content_type exists before trying to delete it
        if(isset($content_type['id'])){
            $this->Content_type_model->delete_content_type($id);
			$this->session->set_flashdata('msg','Content_type has been deleted successfully');
            redirect('admin/content_type/index');
        }
        else
            show_error('The content_type you are trying to delete does not exist.');
    }
	
	/**
     * Search content_type
	 * @param $start - Starting of content_type table's index to get query
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
$this->db->or_like('content_name', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');


		$this->db->order_by('id', 'desc');
		
        $this->db->limit($limit,$start);
        $data['content_type'] = $this->db->get('content_type')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		
		//pagination
		$config['base_url'] = site_url('admin/content_type/search');
		$this->db->reset_query();		
		$this->db->like('id', $key, 'both');
$this->db->or_like('content_name', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');

		$config['total_rows'] = $this->db->from("content_type")->count_all_results();
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
		$data['_view'] = 'admin/content_type/index';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Export content_type
	 * @param $export_type - CSV or PDF type 
     */
	function export($export_type='CSV'){
	  if($export_type=='CSV'){	
		   // file name 
		   $filename = 'content_type_'.date('Ymd').'.csv'; 
		   header("Content-Description: File Transfer"); 
		   header("Content-Disposition: attachment; filename=$filename"); 
		   header("Content-Type: application/csv; ");
		   // get data 
		   $this->db->order_by('id', 'desc');
		   $content_typeData = $this->Content_type_model->get_all_content_type();
		   // file creation 
		   $file = fopen('php://output', 'w');
		   $header = array("Id","Content Name","Created At","Updated At"); 
		   fputcsv($file, $header);
		   foreach ($content_typeData as $key=>$line){ 
			 fputcsv($file,$line); 
		   }
		   fclose($file); 
		   exit; 
	  }else if($export_type=='Pdf'){
		    $this->db->order_by('id', 'desc');
		    $content_type = $this->db->get('content_type')->result_array();
		   // get the HTML
			ob_start();
			include(APPPATH.'views/admin/content_type/print_template.php');
			$html = ob_get_clean();
			require_once FCPATH.'vendor/autoload.php';			
			$mpdf = new \Mpdf\Mpdf();
			$mpdf->WriteHTML($html);
			$mpdf->Output();
			exit;
	  }
	   
	}
}
//End of Content_type controller