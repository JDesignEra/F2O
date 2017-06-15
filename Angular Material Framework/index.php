<!DOCTYPE html>
<html lang="en">
    <?php
        include('assets/modular/head.php');
    ?>
    
    <body ng-app="f2o">
        <md-fab-toolbar md-primary md-direction="left">
            <md-fab-trigger class="align-with-text">
                <md-button aria-label="Menu" class="md-fab md-primary">
                    <md-icon md-svg-src="assets/icons/ic_menu_white_24px.svg"></md-icon>
                </md-button>
            </md-fab-trigger>
            
            <md-toolbar>
                <md-fab-actions>
                    <md-button>Home</md-button>
                </md-fab-actions>
            </md-toolbar>
        </md-fab-toolbar>
        
        <!-- Angular Material, AngularJS & script.js -->
        <?php include('assets/modular/body-script.php');?>
    </body>
</html>