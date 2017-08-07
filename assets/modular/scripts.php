<!DOCTYPE html>
<!-- jQuery -->
<script src="assets/framework/js/jquery-3.2.1.min.js" type="text/javascript"></script>

<!-- Bootstrap tooltips -->
<script src="assets/framework/js/tether.min.js" type="text/javascript"></script>

<!-- Bootstrap core JavaScript -->
<script src="assets/framework/js/bootstrap.min.js" type="text/javascript"></script>

<!-- MDB core JavaScript -->
<script src="assets/framework/js/mdb.min.js" type="text/javascript"></script>

<!-- Pace.js -->
<script src="assets/libraries/pace.js" type="text/javascript"></script>

<!-- Custom Scripts -->
<script src="assets/js/script.js" type="text/javascript"></script>
<script src="assets/js/LRF-Form.js" type="text/javascript"></script>
<script src="assets/js/inbox.js" type="text/javascript"></script>

<?php if (isset($_SESSION['uid'])): ?>
    <script src="assets/js/getProfile.js" type="text/javascript"></script>
<?php endif; ?>

<?php if(false !== strpos($_SERVER['REQUEST_URI'], '/index.php') || false !== strpos($_SERVER['REQUEST_URI'], '/')): ?>
    <script src="assets/js/getNewestMembers.js" type="text/javascript"></script>
<?php endif; ?>

<?php if (false !== strpos($_SERVER['REQUEST_URI'], '/profile.php')): ?>
    <script src="assets/js/editProfile.js" type="text/javascript"></script>
<?php endif; ?>

<?php if (false !== strpos($_SERVER['REQUEST_URI'], '/freelancers.php')): ?>
    <script src="assets/js/filterSearch.js" type="text/javascript"></script>
    <script src="assets/js/getAllMembers.js" type="text/javascript"></script>
<?php endif; ?>

<?php if (false !== strpos($_SERVER['REQUEST_URI'], '/user.php?')): ?>
    <script src="assets/js/getViewProfile.js" type="text/javascript"></script>
<?php endif; ?>
