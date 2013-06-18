<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Error extends CI_Controller {

	
	public function not_found()
	{
                $d['body']='error/not_found';
		$this->load->view('default',$d);
	}
        
        public function contact()
	{
                $d['body']='body/contact';
		$this->load->view('default',$d);
	}
}
