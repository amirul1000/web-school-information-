<?php

/**
 * Author: Amirul Momenin
 * Desc:File_management Model
 */
class File_management_model extends CI_Model
{
	protected $file_management = 'file_management';
	
    function __construct(){
        parent::__construct();
    }
	
    /** Get file_management by id
	 *@param $id - primary key to get record
	 *
     */
    function get_file_management($id){
        $result = $this->db->get_where('file_management',array('id'=>$id))->row_array();
		if(!(array)$result){
			$fields = $this->db->list_fields('file_management');
			foreach ($fields as $field)
			{
			   $result[$field] = ''; 	  
			}
		}
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    } 
	
    /** Get all file_management
	 *
     */
    function get_all_file_management(){
        $this->db->order_by('id', 'desc');
        $result = $this->db->get('file_management')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit file_management
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_file_management($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
        $result = $this->db->get('file_management')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count file_management rows
	 *
     */
	function get_count_file_management(){
       $result = $this->db->from("file_management")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	
	 /** Get all users-file_management
	 *
     */
    function get_all_users_file_management(){
        $this->db->order_by('id', 'desc');
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('file_management')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit users-file_management
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_users_file_management($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('file_management')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count users-file_management rows
	 *
     */
	function get_count_users_file_management(){
	   $this->db->where('users_id', $this->session->userdata('id'));
       $result = $this->db->from("file_management")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** function to add new file_management
	 *@param $params - data set to add record
	 *
     */
    function add_file_management($params){
        $this->db->insert('file_management',$params);
        $id = $this->db->insert_id();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $id;
    }
	
    /** function to update file_management
	 *@param $id - primary key to update record,$params - data set to add record
	 *
     */
    function update_file_management($id,$params){
        $this->db->where('id',$id);
        $status = $this->db->update('file_management',$params);
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
	
    /** function to delete file_management
	 *@param $id - primary key to delete record
	 *
     */
    function delete_file_management($id){
        $status = $this->db->delete('file_management',array('id'=>$id));
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
}
