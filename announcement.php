<?php include 'shared/_Header.php' ?>
            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="overview-wrap">
                                    <h2 class="title-1">Announcement</h2>
                                    <!-- <button class="au-btn au-btn-icon au-btn--blue">
                                        <i class="zmdi zmdi-plus"></i>add item</button> -->
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-25">
                            <div class="col-lg-6">
                                <div class="au-card recent-report" style="padding-bottom: 35px;">
                                    <div class="au-card-inner">
                                        <h3 class="title-3">Message:</h3>
                                        <textarea maxlength="100" class="form-control" rows="9" id="message_sendtoall"></textarea>
                                        <button type="button" onclick="sendToAll()" class="mt-3 btn btn-rounded btn-dark btn-fw" style="float: right; color: #000; background-color:#FFDB31; border: 0">Send To All</button>
                                        <input type="hidden" id="get_all_senior_list">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="au-card recent-report">
                                    <div class="au-card-inner">
                                        <h3 class="title-3">Greet Happy Birthday:</h3>
                                        <textarea maxlength="100" class="form-control mb-2" rows="7" id="message_greet"></textarea>
                                        <div class="input-group" style="border-radius: 4px;border: solid 1px #e8ecf1;background-color: #ffffff;color: #969696;">
                                            <select id="senior_list_dropdown_birthday" multiple="multiple" style="border:0">
                                            </select>
                                        </div>
                                        <input type="hidden" id="select_seniors_birthday">
                                        <button type="button" onclick="sendBirthdayGreet()" class="mt-3 btn btn-rounded btn-dark btn-fw" style="float: right; color: #000; background-color:#FFDB31; border: 0">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
<?php include 'shared/_Footer.php' ?>