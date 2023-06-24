<?php

/**
 * Author: Amirul Momenin
 * Desc:Gallery Model
 */
class Gallery_model extends CI_Model
{
	protected $gallery = 'gallery';
	
    function __construct(){
        parent::__construct();
    }
	
    /** Get gallery by id
	 *@param $id - primary key to get record
	 *
     */
    function get_gallery($id){
        $result = $this->db->get_where('gallery',array('id'=>$id))->row_array();
		if(!(array)$result){
			$fields = $this->db->list_fields('gallery');
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
	
    /** Get all gallery
	 *
     */
    function get_all_gallery(){
        $this->db->order_by('id', 'desc');
        $result = $this->db->get('gallery')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit gallery
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_gallery($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
        $result = $this->db->get('gallery')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count gallery rows
	 *
     */
	function get_count_gallery(){
       $result = $this->db->from("gallery")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	
	 /** Get all users-gallery
	 *
     */
    function get_all_users_gallery(){
        $this->db->order_by('id', 'desc');
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('gallery')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit users-gallery
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_users_gallery($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('gallery')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count users-gallery rows
	 *
     */
	function get_count_users_gallery(){
	   $this->db->where('users_id', $this->session->userdata('id'));
       $result = $this->db->from("gallery")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** function to add new gallery
	 *@param $params - data set to add record
	 *
     */
    function add_gallery($params){
        $this->db->insert('gallery',$params);
        $id = $this->db->insert_id();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $id;
    }
	
    /** function to update gallery
	 *@param $id - primary key to update record,$params - data set to add record
	 *
     */
    function update_gallery($id,$params){
        $this->db->where('id',$id);
        $status = $this->db->update('gallery',$params);
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
	
    /** function to delete gallery
	 *@param $id - primary key to delete record
	 *
     */
    function delete_gallery($id){
        $status = $this->db->delete('gallery',array('id'=>$id));
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
}
