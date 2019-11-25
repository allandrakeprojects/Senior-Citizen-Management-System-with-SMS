<?php include 'shared/_Header.php' ?>
            <!-- Add Modal starts -->
            <div class="modal fade" id="exampleModalAddAdmin" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">Add Admin</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style="padding: 15px 30px">
                        <form>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="full_name" class="col-form-label" style="padding-bottom: 0">Full name:</label>
                                <input type="text" class="form-control" id="full_name">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="contact_number" class="col-form-label" style="padding-bottom: 0">Contact Number:</label>
                                <input type="text" class="form-control" id="contact_number">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="address" class="col-form-label" style="padding-bottom: 0">Address:</label>
                                <input type="text" class="form-control" id="address">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="gender" class="col-form-label" style="padding-bottom: 0">Gender:</label>
                                <select class="form-control" id="gender">
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="dob" class="col-form-label" style="padding-bottom: 0">Date of Birth:</label>
                                <input class="form-control" type="date" id="dob" name="trip-start">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="age" class="col-form-label" style="padding-bottom: 0">Age:</label>
                                <input type="number" class="form-control" id="age">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="civil_status" class="col-form-label" style="padding-bottom: 0">Civil Status:</label>
                                <select class="form-control" id="civil_status">
                                    <option value="0">Single</option>
                                    <option value="1">Married</option>
                                    <option value="2">Widowed</option>
                                    <option value="3">Separated</option>
                                    <option value="4">Divorced</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="brgy" class="col-form-label" style="padding-bottom: 0">Barangay:</label>
                                <select class="form-control" id="brgy">
                                    <option>Aliwekwek</option>
                                    <option>Baay</option>
                                    <option>Balangobong</option>
                                    <option>Balococ</option>
                                    <option>Bantayan</option>
                                    <option>Basing</option>
                                    <option>Capandanan</option>
                                    <option>Domalandan Center</option>
                                    <option>Domalandan East</option>
                                    <option>Domalandan West</option>
                                    <option>Dorongan</option>
                                    <option>Dulag</option>
                                    <option>Estanza</option>
                                    <option>Lasip</option>
                                    <option>Libsong East</option>
                                    <option>Libsong West</option>
                                    <option>Malawa</option>
                                    <option>Malimpuec</option>
                                    <option>Maniboc</option>
                                    <option>Matalava</option>
                                    <option>Naguelguel</option>
                                    <option>Namolan</option>
                                    <option>Pangapisan North</option>
                                    <option>Pangapisan Sur</option>
                                    <option>Poblacion</option>
                                    <option>Quibaol</option>
                                    <option>Rosario</option>
                                    <option>Sabangan</option>
                                    <option>Talogtog</option>
                                    <option>Tonton</option>
                                    <option>Tumbar</option>
                                    <option>Wawa</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="email" class="col-form-label" style="padding-bottom: 0">Email:</label>
                                <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="password" class="col-form-label" style="padding-bottom: 0">Password:</label>
                                <input type="password" class="form-control" id="password">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="status" class="col-form-label" style="padding-bottom: 0">Status:</label>
                                <select class="form-control" id="status">
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn au-btn--yellow" id="btn-add-admin">Add</button>
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <!-- Modal Ends -->

            <!-- Update Modal starts -->
            <div class="modal fade" id="exampleModalUpdateAdmin" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="ModalLabel">Update Admin</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" style="padding: 15px 30px">
                        <form>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="full_name_update" class="col-form-label" style="padding-bottom: 0">Full name:</label>
                                <input type="text" class="form-control" id="full_name_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="contact_number_update" class="col-form-label" style="padding-bottom: 0">Contact Number:</label>
                                <input type="text" class="form-control" id="contact_number_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="address_update" class="col-form-label" style="padding-bottom: 0">Address:</label>
                                <input type="text" class="form-control" id="address_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="gender_update" class="col-form-label" style="padding-bottom: 0">Gender:</label>
                                <select class="form-control" id="gender_update">
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="dob_update" class="col-form-label" style="padding-bottom: 0">Date of Birth:</label>
                                <input class="form-control" type="date" id="dob_update" name="trip-start">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="age_update" class="col-form-label" style="padding-bottom: 0">Age:</label>
                                <input type="number" class="form-control" id="age_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="civil_status_update" class="col-form-label" style="padding-bottom: 0">Civil Status:</label>
                                <select class="form-control" id="civil_status_update">
                                    <option value="0">Single</option>
                                    <option value="1">Married</option>
                                    <option value="2">Widowed</option>
                                    <option value="3">Separated</option>
                                    <option value="4">Divorced</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="brgy_update" class="col-form-label" style="padding-bottom: 0">Barangay:</label>
                                <select class="form-control" id="brgy_update">
                                    <option>Aliwekwek</option>
                                    <option>Baay</option>
                                    <option>Balangobong</option>
                                    <option>Balococ</option>
                                    <option>Bantayan</option>
                                    <option>Basing</option>
                                    <option>Capandanan</option>
                                    <option>Domalandan Center</option>
                                    <option>Domalandan East</option>
                                    <option>Domalandan West</option>
                                    <option>Dorongan</option>
                                    <option>Dulag</option>
                                    <option>Estanza</option>
                                    <option>Lasip</option>
                                    <option>Libsong East</option>
                                    <option>Libsong West</option>
                                    <option>Malawa</option>
                                    <option>Malimpuec</option>
                                    <option>Maniboc</option>
                                    <option>Matalava</option>
                                    <option>Naguelguel</option>
                                    <option>Namolan</option>
                                    <option>Pangapisan North</option>
                                    <option>Pangapisan Sur</option>
                                    <option>Poblacion</option>
                                    <option>Quibaol</option>
                                    <option>Rosario</option>
                                    <option>Sabangan</option>
                                    <option>Talogtog</option>
                                    <option>Tonton</option>
                                    <option>Tumbar</option>
                                    <option>Wawa</option>
                                </select>
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="email_update" class="col-form-label" style="padding-bottom: 0">Email:</label>
                                <input type="text" class="form-control" id="email_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="password_update" class="col-form-label" style="padding-bottom: 0">Password:</label>
                                <input type="password" class="form-control" id="password_update">
                            </div>
                            <div class="form-group" style="margin-bottom: 10px;">
                                <label for="status_update" class="col-form-label" style="padding-bottom: 0">Status:</label>
                                <select class="form-control" id="status_update">
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="btn-update-admin-modal">Update</button>
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
            <!-- Modal Ends -->

            <!-- Delete Modal starts -->
            <div class="modal fade" id="exampleModalDeleteAdmin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel-2">Delete Admin</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body modal-body-delete" style="padding: 15px 30px">
                        <p></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" id="btn-delete-admin-modal">Delete</button>
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
                                    <h2 class="title-1">Admin Management</h2>
                                    <button type="button" class="au-btn au-btn-icon au-btn--yellow" data-toggle="modal" data-target="#exampleModalAddAdmin">
                                        <i class="zmdi zmdi-plus"></i>Add Admin</button>
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <div class="col-lg-12">
                                <div class="au-card recent-report">
                                    <div class="au-card-inner">
                                        <div class="table-responsive">
                                            <table id="dataTableAdmin" class="table">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Full name</th>
                                                    <th>Contact Number</th>
                                                    <th>Address</th>
                                                    <th>Gender</th>
                                                    <th>Date of Birth</th>
                                                    <th>Age</th>
                                                    <th>Civil Status</th>
                                                    <th>Barangay</th>
                                                    <th>Email</th>
                                                    <th>Password</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
<?php include 'shared/_Footer.php' ?>