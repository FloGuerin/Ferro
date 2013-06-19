<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller {

	
	public function index()
	{
                $d['body']='body/index';
		$this->load->view('default',$d);
	}
        
        public function presentation()
	{
                $d['body']='body/presentation';
		$this->load->view('default',$d);
	}
        
        public function contact()
	{
                $d['body']='body/contact';
		$this->load->view('default',$d);
	}
        public function galerie()
	{
                $d['body']='body/galerie';
		$this->load->view('default',$d);
	}
        public function services()
	{
                $d['body']='body/services';
		$this->load->view('default',$d);
	}
        public function references()
	{
                $d['body']='body/references';
		$this->load->view('default',$d);
	}
}
