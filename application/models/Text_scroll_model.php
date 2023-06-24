<?php

/**
 * Author: Amirul Momenin
 * Desc:Text_scroll Model
 */
class Text_scroll_model extends CI_Model
{
	protected $text_scroll = 'text_scroll';
	
    function __construct(){
        parent::__construct();
    }
	
    /** Get text_scroll by id
	 *@param $id - primary key to get record
	 *
     */
    function get_text_scroll($id){
        $result = $this->db->get_where('text_scroll',array('id'=>$id))->row_array();
		if(!(array)$result){
			$fields = $this->db->list_fields('text_scroll');
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
	
    /** Get all text_scroll
	 *
     */
    function get_all_text_scroll(){
        $this->db->order_by('id', 'desc');
        $result = $this->db->get('text_scroll')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit text_scroll
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_text_scroll($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
        $result = $this->db->get('text_scroll')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count text_scroll rows
	 *
     */
	function get_count_text_scroll(){
       $result = $this->db->from("text_scroll")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	
	 /** Get all users-text_scroll
	 *
     */
    function get_all_users_text_scroll(){
        $this->db->order_by('id', 'desc');
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('text_scroll')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit users-text_scroll
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_users_text_scroll($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('text_scroll')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count users-text_scroll rows
	 *
     */
	function get_count_users_text_scroll(){
	   $this->db->where('users_id', $this->session->userdata('id'));
       $result = $this->db->from("text_scroll")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** function to add new text_scroll
	 *@param $params - data set to add record
	 *
     */
    function add_text_scroll($params){
        $this->db->insert('text_scroll',$params);
        $id = $this->db->insert_id();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $id;
    }
	
    /** function to update text_scroll
	 *@param $id - primary key to update record,$params - data set to add record
	 *
     */
    function update_text_scroll($id,$params){
        $this->db->where('id',$id);
        $status = $this->db->update('text_scroll',$params);
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
	
    /** function to delete text_scroll
	 *@param $id - primary key to delete record
	 *
     */
    function delete_text_scroll($id){
        $status = $this->db->delete('text_scroll',array('id'=>$id));
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
}
