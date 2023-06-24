<?php

 /**
 * Author: Amirul Momenin
 * Desc:Text_scroll Controller
 *
 */
class Text_scroll extends CI_Controller{
    function __construct(){
        parent::__construct();
        $this->load->helper('url'); 
		$this->load->helper('form');
		$this->load->library('session');
		$this->load->library('pagination');
		$this->load->library('Customlib');
		$this->load->helper(array('cookie', 'url')); 
		$this->load->database();  
		$this->load->model('Text_scroll_model');
		if(! $this->session->userdata('validated')){
				redirect('admin/login/index');
		}  
    } 
	
    /**
	 * Index Page for this controller.
	 *@param $start - Starting of text_scroll table's index to get query
	 *
	 */
    function index($start=0){
		$limit = 10;
        $data['text_scroll'] = $this->Text_scroll_model->get_limit_text_scroll($limit,$start);
		//pagination
		$config['base_url'] = site_url('admin/text_scroll/index');
		$config['total_rows'] = $this->Text_scroll_model->get_count_text_scroll();
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
		
        $data['_view'] = 'admin/text_scroll/index';
        $this->load->view('layouts/admin/body',$data);
    }
	
	 /**
     * Save text_scroll
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
					 'text_content' => html_escape($this->input->post('text_content')),
'display' => html_escape($this->input->post('display')),
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
			$data['text_scroll'] = $this->Text_scroll_model->get_text_scroll($id);
            if(isset($_POST) && count($_POST) > 0){   
                $this->Text_scroll_model->update_text_scroll($id,$params);
				$this->session->set_flashdata('msg','Text_scroll has been updated successfully');
                redirect('admin/text_scroll/index');
            }else{
                $data['_view'] = 'admin/text_scroll/form';
                $this->load->view('layouts/admin/body',$data);
            }
        } //save
		else{
			if(isset($_POST) && count($_POST) > 0){   
                $text_scroll_id = $this->Text_scroll_model->add_text_scroll($params);
				$this->session->set_flashdata('msg','Text_scroll has been saved successfully');
                redirect('admin/text_scroll/index');
            }else{  
			    $data['text_scroll'] = $this->Text_scroll_model->get_text_scroll(0);
                $data['_view'] = 'admin/text_scroll/form';
                $this->load->view('layouts/admin/body',$data);
            }
		}
        
    } 
	
	/**
     * Details text_scroll
	 * @param $id - primary key to get record
	 *
     */
	function details($id){
        $data['text_scroll'] = $this->Text_scroll_model->get_text_scroll($id);
		$data['id'] = $id;
        $data['_view'] = 'admin/text_scroll/details';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Deleting text_scroll
	 * @param $id - primary key to delete record
	 *
     */
    function remove($id){
        $text_scroll = $this->Text_scroll_model->get_text_scroll($id);

        // check if the text_scroll exists before trying to delete it
        if(isset($text_scroll['id'])){
            $this->Text_scroll_model->delete_text_scroll($id);
			$this->session->set_flashdata('msg','Text_scroll has been deleted successfully');
            redirect('admin/text_scroll/index');
        }
        else
            show_error('The text_scroll you are trying to delete does not exist.');
    }
	
	/**
     * Search text_scroll
	 * @param $start - Starting of text_scroll table's index to get query
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
$this->db->or_like('text_content', $key, 'both');
$this->db->or_like('display', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');


		$this->db->order_by('id', 'desc');
		
        $this->db->limit($limit,$start);
        $data['text_scroll'] = $this->db->get('text_scroll')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		
		//pagination
		$config['base_url'] = site_url('admin/text_scroll/search');
		$this->db->reset_query();		
		$this->db->like('id', $key, 'both');
$this->db->or_like('text_content', $key, 'both');
$this->db->or_like('display', $key, 'both');
$this->db->or_like('created_at', $key, 'both');
$this->db->or_like('updated_at', $key, 'both');

		$config['total_rows'] = $this->db->from("text_scroll")->count_all_results();
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
		$data['_view'] = 'admin/text_scroll/index';
        $this->load->view('layouts/admin/body',$data);
	}
	
    /**
     * Export text_scroll
	 * @param $export_type - CSV or PDF type 
     */
	function export($export_type='CSV'){
	  if($export_type=='CSV'){	
		   // file name 
		   $filename = 'text_scroll_'.date('Ymd').'.csv'; 
		   header("Content-Description: File Transfer"); 
		   header("Content-Disposition: attachment; filename=$filename"); 
		   header("Content-Type: application/csv; ");
		   // get data 
		   $this->db->order_by('id', 'desc');
		   $text_scrollData = $this->Text_scroll_model->get_all_text_scroll();
		   // file creation 
		   $file = fopen('php://output', 'w');
		   $header = array("Id","Text Content","Display","Created At","Updated At"); 
		   fputcsv($file, $header);
		   foreach ($text_scrollData as $key=>$line){ 
			 fputcsv($file,$line); 
		   }
		   fclose($file); 
		   exit; 
	  }else if($export_type=='Pdf'){
		    $this->db->order_by('id', 'desc');
		    $text_scroll = $this->db->get('text_scroll')->result_array();
		   // get the HTML
			ob_start();
			include(APPPATH.'views/admin/text_scroll/print_template.php');
			$html = ob_get_clean();
			require_once FCPATH.'vendor/autoload.php';			
			$mpdf = new \Mpdf\Mpdf();
			$mpdf->WriteHTML($html);
			$mpdf->Output();
			exit;
	  }
	   
	}
}
//End of Text_scroll controller