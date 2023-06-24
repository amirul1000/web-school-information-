<?php

/**
 * Author: Amirul Momenin
 * Desc:Content_type Model
 */
class Content_type_model extends CI_Model
{
	protected $content_type = 'content_type';
	
    function __construct(){
        parent::__construct();
    }
	
    /** Get content_type by id
	 *@param $id - primary key to get record
	 *
     */
    function get_content_type($id){
        $result = $this->db->get_where('content_type',array('id'=>$id))->row_array();
		if(!(array)$result){
			$fields = $this->db->list_fields('content_type');
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
	
    /** Get all content_type
	 *
     */
    function get_all_content_type(){
        $this->db->order_by('id', 'desc');
        $result = $this->db->get('content_type')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit content_type
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_content_type($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
        $result = $this->db->get('content_type')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count content_type rows
	 *
     */
	function get_count_content_type(){
       $result = $this->db->from("content_type")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	
	 /** Get all users-content_type
	 *
     */
    function get_all_users_content_type(){
        $this->db->order_by('id', 'desc');
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('content_type')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit users-content_type
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_users_content_type($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('content_type')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count users-content_type rows
	 *
     */
	function get_count_users_content_type(){
	   $this->db->where('users_id', $this->session->userdata('id'));
       $result = $this->db->from("content_type")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** function to add new content_type
	 *@param $params - data set to add record
	 *
     */
    function add_content_type($params){
        $this->db->insert('content_type',$params);
        $id = $this->db->insert_id();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $id;
    }
	
    /** function to update content_type
	 *@param $id - primary key to update record,$params - data set to add record
	 *
     */
    function update_content_type($id,$params){
        $this->db->where('id',$id);
        $status = $this->db->update('content_type',$params);
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
	
    /** function to delete content_type
	 *@param $id - primary key to delete record
	 *
     */
    function delete_content_type($id){
        $status = $this->db->delete('content_type',array('id'=>$id));
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
}
