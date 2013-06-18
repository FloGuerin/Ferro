<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

	
	public function index()
	{
                $d['body']='body/index';
		$this->load->view('default',$d);
	}
        
        public function contact()
	{
                $d['body']='body/contact';
		$this->load->view('default',$d);
	}
}
