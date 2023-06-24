<?php

/**
 * Author: Amirul Momenin
 * Desc:Members Model
 */
class Members_model extends CI_Model
{
	protected $members = 'members';
	
    function __construct(){
        parent::__construct();
    }
	
    /** Get members by id
	 *@param $id - primary key to get record
	 *
     */
    function get_members($id){
        $result = $this->db->get_where('members',array('id'=>$id))->row_array();
		if(!(array)$result){
			$fields = $this->db->list_fields('members');
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
	
    /** Get all members
	 *
     */
    function get_all_members(){
        $this->db->order_by('id', 'desc');
        $result = $this->db->get('members')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit members
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_members($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
        $result = $this->db->get('members')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count members rows
	 *
     */
	function get_count_members(){
       $result = $this->db->from("members")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	
	 /** Get all users-members
	 *
     */
    function get_all_users_members(){
        $this->db->order_by('id', 'desc');
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('members')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
	/** Get limit users-members
	 *@param $limit - limit of query , $start - start of db table index to get query
	 *
     */
    function get_limit_users_members($limit, $start){
		$this->db->order_by('id', 'desc');
        $this->db->limit($limit, $start);
		$this->db->where('users_id', $this->session->userdata('id'));
        $result = $this->db->get('members')->result_array();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** Count users-members rows
	 *
     */
	function get_count_users_members(){
	   $this->db->where('users_id', $this->session->userdata('id'));
       $result = $this->db->from("members")->count_all_results();
	   $db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $result;
    }
	
    /** function to add new members
	 *@param $params - data set to add record
	 *
     */
    function add_members($params){
        $this->db->insert('members',$params);
        $id = $this->db->insert_id();
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $id;
    }
	
    /** function to update members
	 *@param $id - primary key to update record,$params - data set to add record
	 *
     */
    function update_members($id,$params){
        $this->db->where('id',$id);
        $status = $this->db->update('members',$params);
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
	
    /** function to delete members
	 *@param $id - primary key to delete record
	 *
     */
    function delete_members($id){
        $status = $this->db->delete('members',array('id'=>$id));
		$db_error = $this->db->error();
		if (!empty($db_error['code'])){
			echo 'Database error! Error Code [' . $db_error['code'] . '] Error: ' . $db_error['message'];
			exit;
		}
		return $status;
    }
}
