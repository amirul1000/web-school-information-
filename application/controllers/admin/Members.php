<?php

 /**
 * Author: Amirul Momenin
 * Desc:Members Controller
 *
 */
class Members extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->load->helper('url'); 
		$this->load->helper('form');
		$this->load->library('session');
		$this->load->library('pagination');
		$this->load->library('Customlib');
		$this->load->helper(array('cookie', 'url')); 
		$this->load->database();  
		$this->load->model('Members_model');
		if(! $this->session->userdata('validated')){
				redirect('admin/login/index');
		}  
    } 
	
    /**
	 * Index Page for this controller.
	 *@param $start - Starting of members table's index to get query
	 *
	 */
    function index($start=0){
		$limit = 10;
        $data['members'] = $this->Members_model->get_limit_members($limit,$start);
		//pagination
		$config['base_url'] = site_url('admin/members/index');
		$config['total_rows'] = $this->Members_model->get_count_members();
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
		
        $data['_view'] = 'admin/members/index';
        $this->load->view('layouts/admin/body',$data);
    }
	
	 /**
     * Save members
	 *@param $id - primary key to update
	 *
     */
    function save($id=-1){   
		$file_picture = "";
 
		$created_at = "";
$updated_at = "";

		if($id<=0){
															 $created_at = date("Y-m-d H:i:s");
														 }
else if($id>0){
															 $updated_at = date("Y-m-d H:i:s");
														 }

		$params = array(
					 'members_info' => html_escape($this->input->post('members_info')),
'file_picture' => $file_picture,
'display_order_no' => html_escape($this->input->post('display_order_no')),
'created_at' =>$created_at,
'updated_at' =>$updated_at,

				);
		
						$config['upload_path']          = "./public/uploads/images/members";
						$config['allowed_types']        = "gif|jpg|png";
						$config['max_size']             = 100;
						$config['max_width']            = 1024;
						$config['max_height']           = 768;
						$this->load->library('upload', $config);
						
						if(isset($_POST) && count($_POST) > 0)     
							{  
							  if(strlen($_FILES['file_picture']['name'])>0 && $_FILES['file_picture']['size']>0)
								{
									if ( ! $this->upload->do_upload('file_picture'))
									{
										$error = array('error' => $this->upload->display_errors());
									}
									else
									{
										$file_picture = "uploads/images/members/".$_FILES['file_picture']['name'];
									    $params['file_picture'] = $file_picture;
									}
								}
								else
								{
									unset($params['file_picture']);
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
			$data['members'] = $this->Members_model->get_members($id);
            if(isset($_POST) && count($_POST) > 0){   
                $this->Members_model->update_members($id,$params);
				$this->session->set_flashdata('msg','Members has been updated successfully');
                redirect('admin/members/index');
            }else{
                $data['_view'] = 'admin/members/form';
                $this->load->view('layouts/admin/body',$data);
            }
        } //save
		else{
			if(isset($_POST) && count($_POST) > 0){   
                $members_id = $this->Members_model->add_members($params);
				$this->session->set_flashdata('msg','Members has been saved successfully');
                redirect('admin/members/index');
            }else{  
			    $data['members'] = $this->Members_model->get_members(0);
                $data['_view'] = 'admin/members/form';
                $this->load->view('layouts/admin/body',$data);
            }
		}
        
    } 
	
	/**
     * Details members
	 * @param $id - primary key to get record
	 *
     */
	function details($id){
        $data['members'] = $this->Members_model->get_members($id);
		$data['id'] = $id;
        $data['_view'] = 'admin/members/details';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Deleting members
	 * @param $id - primary key to delete record
	 *
     */
    function remove($id){
        $members = $this->Members_model->get_members($id);

        // check if the members exists before trying to delete it
        if(isset($members['id'])){
            $this->Members_model->delete_members($id);
			$this->session->set_flashdata('msg','Members has been deleted successfully');
            redirect('admin/members/index');
        }
        else
            show_error('The members you are trying to delete does not exist.');
    }
	
	/**
     * Search members
	 * @param $start - Starting of members table's index to get query
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
$this->db->or_like('members_info', $key, 'both');
$this->db->or_like('file_picture', $key, 'both');
$this->db->or_like('display_order_no', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');


		$this->db->order_by('id', 'desc');
		
        $this->db->limit($limit,$start);
        $data['members'] = $this->db->get('members')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		
		//pagination
		$config['base_url'] = site_url('admin/members/search');
		$this->db->reset_query();		
		$this->db->like('id', $key, 'both');
$this->db->or_like('members_info', $key, 'both');
$this->db->or_like('file_picture', $key, 'both');
$this->db->or_like('display_order_no', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');

		$config['total_rows'] = $this->db->from("members")->count_all_results();
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
		$data['_view'] = 'admin/members/index';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Export members
	 * @param $export_type - CSV or PDF type 
     */
	function export($export_type='CSV'){
	  if($export_type=='CSV'){	
		   // file name 
		   $filename = 'members_'.date('Ymd').'.csv'; 
		   header("Content-Description: File Transfer"); 
		   header("Content-Disposition: attachment; filename=$filename"); 
		   header("Content-Type: application/csv; ");
		   // get data 
		   $this->db->order_by('id', 'desc');
		   $membersData = $this->Members_model->get_all_members();
		   // file creation 
		   $file = fopen('php://output', 'w');
		   $header = array("Id","Members Info","File Picture","Display Order No","Created At","Updated At"); 
		   fputcsv($file, $header);
		   foreach ($membersData as $key=>$line){ 
			 fputcsv($file,$line); 
		   }
		   fclose($file); 
		   exit; 
	  }else if($export_type=='Pdf'){
		    $this->db->order_by('id', 'desc');
		    $members = $this->db->get('members')->result_array();
		   // get the HTML
			ob_start();
			include(APPPATH.'views/admin/members/print_template.php');
			$html = ob_get_clean();
			require_once FCPATH.'vendor/autoload.php';			
			$mpdf = new \Mpdf\Mpdf();
			$mpdf->WriteHTML($html);
			$mpdf->Output();
			exit;
	  }
	   
	}
}
//End of Members controller