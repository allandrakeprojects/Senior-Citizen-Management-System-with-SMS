<?php include 'shared/_Header.php' ?>
            <!-- Delete Modal starts -->
            <div class="modal fade" id="exampleModalDeleteSenior" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel-2">Delete Senior</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body modal-body-delete" style="padding: 15px 30px">
                        <p></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="btn-delete-senior-modal">Delete</button>
                        <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
            </div>
            <!-- Modal Ends -->

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap">
                                    <h2 class="title-1">Senior Management</h2>
                                    <a href="#scroll_form" style="text-decoration: none !important; border: 0" class="au-btn au-btn-icon au-btn--yellow" id="add_senior_scroll">
                                        <i class="zmdi zmdi-plus"></i>Add Senior</a>
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <div class="col-lg-12">
                                <div class="au-card recent-report">
                                    <div class="au-card-inner">
                                        <div class="table-responsive">
                                            <table id="dataTableSenior" class="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Photo</th>
                                                    <th>Full name</th>
                                                    <th>Contact Number</th>
                                                    <th>Address</th>
                                                    <th>Gender</th>
                                                    <th>Date of Birth</th>
                                                    <th>Age</th>
                                                    <th>Occupation</th>
                                                    <th>Civil Status</th>
                                                    <th>Barangay</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="scroll_form" name="scroll_form" style="height: 10px;width: 10px;position: relative;top: -80px;"></div>
                            <div class="col-lg-12">
                                <div class="au-card recent-report">
                                    <div class="au-card-inner">
                                        <h3 class="title-3">Form</h3>
                                        <form method="POST" id="uploadForm" action="upload.php" enctype="multipart/form-data">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                        <input type="hidden" class="form-control" name="id" id="id">
                                                        <input type="hidden" class="form-control" name="image_path" id="image_path">
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="full_name" class="col-form-label" style="padding-bottom: 0">Name:</label>
                                                            <input type="text" class="form-control" name="full_name" id="full_name">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="address" class="col-form-label" style="padding-bottom: 0">Email Address:</label>
                                                            <input type="text" class="form-control" name="address" id="address">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="gender" class="col-form-label" style="padding-bottom: 0">Gender:</label>
                                                            <select class="form-control" name="gender" id="gender">
                                                                <option value="0">Male</option>
                                                                <option value="1">Female</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="age" class="col-form-label" style="padding-bottom: 0">Age:</label>
                                                            <input type="number" class="form-control" name="age" id="age">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="dob" class="col-form-label" style="padding-bottom: 0">Date of Birth:</label>
                                                            <input class="form-control" type="date" name="dob" id="dob">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="blood_type" class="col-form-label" style="padding-bottom: 0">Blood Type:</label>
                                                            <select class="form-control" name="blood_type" id="blood_type">
                                                                <option value="0">A+</option>
                                                                <option value="1">A-</option>
                                                                <option value="2">B+</option>
                                                                <option value="3">B-</option>
                                                                <option value="4">AB+</option>
                                                                <option value="5">AB-</option>
                                                                <option value="6">O+</option>
                                                                <option value="7">O-</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="occupation" class="col-form-label" style="padding-bottom: 0">Occupation:</label>
                                                            <input type="text" class="form-control" name="occupation" id="occupation">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="civil_status" class="col-form-label" style="padding-bottom: 0">Civil Status:</label>
                                                            <select class="form-control" name="civil_status" id="civil_status">
                                                                <option value="0">Single</option>
                                                                <option value="1">Married</option>
                                                                <option value="2">Widowed</option>
                                                                <option value="3">Separated</option>
                                                                <option value="4">Divorced</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="contact_number" class="col-form-label" style="padding-bottom: 0">Contact Number:</label>
                                                            <input type="text" class="form-control" name="contact_number" id="contact_number">
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="brgy" class="col-form-label" style="padding-bottom: 0">Address:</label>
                                                            <textarea maxlength="100" class="form-control" rows="3" name="brgy" id="brgy"></textarea>
                                                        </div>
                                                        <div class="form-group" style="margin-bottom: 10px;">
                                                            <label for="status" class="col-form-label" style="padding-bottom: 0">Status:</label>
                                                            <select class="form-control" name="status" id="status">
                                                                <option value="1">Active</option>
                                                                <option value="0">Inactive</option>
                                                            </select>
                                                        </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group" style="margin-bottom: 10px;">
                                                        <label for="image" class="col-form-label" style="padding-bottom: 0">Image:</label>
                                                        <input type="file" class="form-control" name="image" id="image">
                                                    </div>

                                                    <br>
                                                    <p><b>In Case of Emergency Details</b></p>

                                                    <div class="form-group" style="margin-bottom: 10px;">
                                                        <label for="emer_name" class="col-form-label" style="padding-bottom: 0">Name:</label>
                                                        <input type="text" class="form-control" name="emer_name" id="emer_name">
                                                    </div>
                                                    <div class="form-group" style="margin-bottom: 10px;">
                                                        <label for="emer_relationship" class="col-form-label" style="padding-bottom: 0">Relationship:</label>
                                                        <input type="text" class="form-control" name="emer_relationship" id="emer_relationship">
                                                    </div>
                                                    <div class="form-group" style="margin-bottom: 10px;">
                                                        <label for="emer_address" class="col-form-label" style="padding-bottom: 0">Address:</label>
                                                        <textarea maxlength="100" class="form-control" rows="3" name="emer_address" id="emer_address"></textarea>
                                                    </div>
                                                    <div class="form-group" style="margin-bottom: 10px;">
                                                        <label for="emer_contact_number" class="col-form-label" style="padding-bottom: 0">Contact Number:</label>
                                                        <input type="text" class="form-control" name="emer_contact_number" id="emer_contact_number">
                                                    </div>
                                                        
                                                    <div class="modal-footer">
                                                        <button type="submit" name="insert" class="btn au-btn--yellow" id="btn_add_seniors">Proceed</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
<?php include 'shared/_Footer.php' ?>