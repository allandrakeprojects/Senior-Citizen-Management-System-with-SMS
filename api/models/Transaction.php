<?php 
  class Transaction {
    private $conn;
    private $table = 'transaction';

    public $id;
    public $full_name;
    public $contact_number;
    public $address;
    public $email;
    public $password;
    public $status;
    public $role;
    
    public function __construct($db) {
      $this->conn = $db;
    }
    
    // api/transaction/read_single
    public function read_single() {
      $query = 'SELECT * FROM ' . $this->table . ' WHERE senior_id = :senior_id AND year = :year';
      $stmt = $this->conn->prepare($query);

      $this->senior_id = htmlspecialchars(strip_tags($this->senior_id));
      $this->year = htmlspecialchars(strip_tags($this->year));

      $stmt->bindParam(':senior_id', $this->senior_id);
      $stmt->bindParam(':year', $this->year);

      if($stmt->execute()) {
        return $stmt;
      }
    }

    public function create() {
        $this->senior_id = htmlspecialchars(strip_tags($this->senior_id));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->quarter = htmlspecialchars(strip_tags($this->quarter));

        if($this->quarter == 'Q1'){
            $query = 'INSERT INTO ' . $this->table . ' SET senior_id = :senior_id, year = :year, date_paid = :date_paid, first_quarter = :quarter';
        } else if($this->quarter == 'Q2') {
            $query = 'INSERT INTO ' . $this->table . ' SET senior_id = :senior_id, year = :year, date_paid = :date_paid, second_quarter = :quarter';
        } else if($this->quarter == 'Q3') {
            $query = 'INSERT INTO ' . $this->table . ' SET senior_id = :senior_id, year = :year, date_paid = :date_paid, third_quarter = :quarter';
        } else if($this->quarter == 'Q4') {
            $query = 'INSERT INTO ' . $this->table . ' SET senior_id = :senior_id, year = :year, date_paid = :date_paid, fourth_quarter = :quarter';
        }

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':senior_id', $this->senior_id);
        $stmt->bindParam(':year', $this->year);
        date_default_timezone_set('Asia/Manila');
        $this->date_paid = date("Y-m-d H:i:s");
        $stmt->bindParam(':date_paid', $this->date_paid);
        $this->quarter = 1;
        $stmt->bindParam(':quarter', $this->quarter);
  
        if($stmt->execute()) {
          return true;
        }
    }

    public function update() {
        $this->senior_id = htmlspecialchars(strip_tags($this->senior_id));
        $this->year = htmlspecialchars(strip_tags($this->year));
        $this->quarter = htmlspecialchars(strip_tags($this->quarter));

        if($this->quarter == 'Q1'){
            $query = 'UPDATE ' . $this->table . ' SET first_quarter = :quarter WHERE senior_id = :senior_id AND year = :year';
        } else if($this->quarter == 'Q2') {
            $query = 'UPDATE ' . $this->table . ' SET second_quarter = :quarter WHERE senior_id = :senior_id AND year = :year';
        } else if($this->quarter == 'Q3') {
            $query = 'UPDATE ' . $this->table . ' SET third_quarter = :quarter WHERE senior_id = :senior_id AND year = :year';
        } else if($this->quarter == 'Q4') {
            $query = 'UPDATE ' . $this->table . ' SET fourth_quarter = :quarter WHERE senior_id = :senior_id AND year = :year';
        }

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':senior_id', $this->senior_id);
        $stmt->bindParam(':year', $this->year);
        $this->quarter = 1;
        $stmt->bindParam(':quarter', $this->quarter);
  
        if($stmt->execute()) {
          return true;
        }
    }

    public function custom_read() {
      $this->quarter = htmlspecialchars(strip_tags($this->quarter));
      $this->year = htmlspecialchars(strip_tags($this->year));
      $this->status = htmlspecialchars(strip_tags($this->status));

      if($this->quarter == 'Q1'){
          $query = 'SELECT user.id, user.full_name, transaction.date_paid, user.remarks from user left JOIN transaction on user.id = transaction.senior_id where user.role != 0 and transaction.year = :year and transaction.first_quarter = :status';
      } else if($this->quarter == 'Q2') {
        $query = 'SELECT user.id, user.full_name, transaction.date_paid, user.remarks from user left JOIN transaction on user.id = transaction.senior_id where user.role != 0 and transaction.year = :year and transaction.second_quarter = :status';
      } else if($this->quarter == 'Q3') {
        $query = 'SELECT user.id, user.full_name, transaction.date_paid, user.remarks from user left JOIN transaction on user.id = transaction.senior_id where user.role != 0 and transaction.year = :year and transaction.third_quarter = :status';
      } else if($this->quarter == 'Q4') {
        $query = 'SELECT user.id, user.full_name, transaction.date_paid, user.remarks from user left JOIN transaction on user.id = transaction.senior_id where user.role != 0 and transaction.year = :year and transaction.fourth_quarter = :status';
      }

      $stmt = $this->conn->prepare($query);
      $stmt->bindParam(':year', $this->year);
      $stmt->bindParam(':status', $this->status);

      if($stmt->execute()) {
        return $stmt;
      }
    }

    public function dashboard_first_quarter_paid() {
      $query = 'SELECT * FROM ' . $this->table . ' WHERE year = 2019 and first_quarter = 1';
      $stmt = $this->conn->prepare($query);

      if($stmt->execute()) {
        return $stmt;
      }
    }

    public function dashboard_first_quarter_pending() {
      $query = 'SELECT * FROM ' . $this->table . ' WHERE year = 2019 and first_quarter = 0';
      $stmt = $this->conn->prepare($query);

      if($stmt->execute()) {
        return $stmt;
      }
    }
  }