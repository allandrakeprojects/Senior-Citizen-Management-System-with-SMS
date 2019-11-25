<?php 
  class Senior {
    private $conn;
    private $table_user = 'user';

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

    // POST api/senior/create
    public function create() {
      $query = 'INSERT INTO ' . $this->table_user . ' SET full_name = :full_name, contact_number = :contact_number, address = :address, gender = :gender, dob = :dob,
      age = :age, occupation = :occupation, civil_status = :civil_status, brgy = :brgy, image = :image, status = :status';
      $stmt = $this->conn->prepare($query);

      $this->full_name = htmlspecialchars(strip_tags($this->full_name));
      $this->contact_number = htmlspecialchars(strip_tags($this->contact_number));
      $this->address = htmlspecialchars(strip_tags($this->address));
      $this->gender = htmlspecialchars(strip_tags($this->gender));
      $this->dob = htmlspecialchars(strip_tags($this->dob));
      $this->age = htmlspecialchars(strip_tags($this->age));
      $this->occupation = htmlspecialchars(strip_tags($this->occupation));
      $this->civil_status = htmlspecialchars(strip_tags($this->civil_status));
      $this->brgy = htmlspecialchars(strip_tags($this->brgy));
      $this->image = htmlspecialchars(strip_tags($this->image));
      $this->status = htmlspecialchars(strip_tags($this->status));
      
      $stmt->bindParam(':full_name', $this->full_name);
      $stmt->bindParam(':contact_number', $this->contact_number);
      $stmt->bindParam(':address', $this->address);
      $stmt->bindParam(':gender', $this->gender);
      $stmt->bindParam(':dob', $this->dob);
      $stmt->bindParam(':age', $this->age);
      $stmt->bindParam(':occupation', $this->occupation);
      $stmt->bindParam(':civil_status', $this->civil_status);
      $stmt->bindParam(':brgy', $this->brgy);
      $stmt->bindParam(':image', $this->image);
      $stmt->bindParam(':status', $this->status);

      if($stmt->execute()) {
        return true;
      }
    }

    // GET api/senior/read
    public function read() {
      $query = 'SELECT * FROM ' . $this->table_user . ' WHERE role = 1';
      $stmt = $this->conn->prepare($query);
      $stmt->execute();
      return $stmt;
    }

    // GET api/senior/read_single
    public function read_single() {
      $query = 'SELECT * FROM ' . $this->table_user . ' WHERE id = :id';
      $stmt = $this->conn->prepare($query);

      $this->id = htmlspecialchars(strip_tags($this->id));

      $stmt->bindParam(':id', $this->id);

      if($stmt->execute()) {
        return $stmt;
      }
    }

    // PUT api/senior/update
    public function update() {
      $query = 'UPDATE ' . $this->table_user . ' SET full_name = :full_name, contact_number = :contact_number, address = :address, gender = :gender, dob = :dob,
      age = :age, occupation = :occupation, civil_status = :civil_status, brgy = :brgy, status = :status WHERE id = :id';
      $stmt = $this->conn->prepare($query);

      $this->id = htmlspecialchars(strip_tags($this->id));
      $this->full_name = htmlspecialchars(strip_tags($this->full_name));
      $this->contact_number = htmlspecialchars(strip_tags($this->contact_number));
      $this->address = htmlspecialchars(strip_tags($this->address));
      $this->gender = htmlspecialchars(strip_tags($this->gender));
      $this->dob = htmlspecialchars(strip_tags($this->dob));
      $this->age = htmlspecialchars(strip_tags($this->age));
      $this->occupation = htmlspecialchars(strip_tags($this->occupation));
      $this->civil_status = htmlspecialchars(strip_tags($this->civil_status));
      $this->brgy = htmlspecialchars(strip_tags($this->brgy));
      $this->status = htmlspecialchars(strip_tags($this->status));
      
      $stmt->bindParam(':id', $this->id);
      $stmt->bindParam(':full_name', $this->full_name);
      $stmt->bindParam(':contact_number', $this->contact_number);
      $stmt->bindParam(':address', $this->address);
      $stmt->bindParam(':gender', $this->gender);
      $stmt->bindParam(':dob', $this->dob);
      $stmt->bindParam(':age', $this->age);
      $stmt->bindParam(':occupation', $this->occupation);
      $stmt->bindParam(':civil_status', $this->civil_status);
      $stmt->bindParam(':brgy', $this->brgy);
      $stmt->bindParam(':status', $this->status);

      if($stmt->execute()) {
        return true;
      }
    }

    // POST api/senior/delete
    public function delete() {
      $query = 'DELETE FROM ' . $this->table_user . ' WHERE id = :id';
      $stmt = $this->conn->prepare($query);

      $this->id = htmlspecialchars(strip_tags($this->id));

      $stmt->bindParam(':id', $this->id);

      if($stmt->execute()) {
        return true;
      }
    }
  }