<?php 
  class SMS {
    public $message;
    public $number;

    // api/sms/send
    public function send() {
        $this->message = htmlspecialchars(strip_tags($this->message));
        $this->number = htmlspecialchars(strip_tags($this->number));
        $this->api_code = 'ST-SENIO147185_H9QJZ';

        $url = 'https://www.itexmo.com/php_api/api.php';
        $itexmo = array('1' => $this->number, '2' => $this->message, '3' => $this->api_code);
        $param = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($itexmo),
            ),
        );
        
        $context  = stream_context_create($param);
        return file_get_contents($url, false, $context);
    }
  }