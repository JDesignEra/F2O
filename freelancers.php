<?php include('assets/php/sessionStart.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <!-- Head, Navigation & Intro Section -->
    <?php
        $title = 'Freelancers';
        include('assets/modular/head.php');
    ?>
    <header>
        <?php include('assets/modular/nav.php'); ?>
    </header>

    <body id="freelancers">
        <main>
            <div class="container-fluid">
                <section id="members" class="section">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="d-inline-flex justify-content-center">
                                <div class="md-form form-sm text-left" style="min-width: 300px;">
                                    <input type="text" id="src-name" class="form-control" name="src-name">
                                    <label for="src-name">Name</label>
                                </div>
                            </div>
                            <div class="d-inline-flex justify-content-center">
                                <div class="btn-group">
                                    <button id="search-btn" type="button" class="btn teal">Search <i class="fa fa-search ml-2"></i></button>
                                    <div id="filters">
                                        <button id="filter-dd-btn" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-filter mr-2"></i> Filter
                                        </button>
                                        <div class="dropdown-menu animated bounceIn" data-wow-duration="1.0s" style="width: 100%;">
                                            <fieldset id="f-coders" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" name="filter" id="coders">
                                                <label for="coders">Programmers / Coders</label>
                                            </fieldset>
                                            <fieldset id="f-designers" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" name="filter" id="designers">
                                                <label for="designers">Designers</label>
                                            </fieldset>
                                            <fieldset id="f-developers" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" name="filter" id="developers">
                                                <label for="developers">Developers</label>
                                            </fieldset>
                                            <fieldset id="f-writers" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" name="filter" id="writers">
                                                <label for="writers">Writers</label>
                                            </fieldset>
                                            <fieldset id="f-others" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" name="filter" id="others">
                                                <label for="others">Others</label>
                                            </fieldset>
                                            <fieldset id="f-all" class="dropdown-item" data-toggle="dropdown">
                                                <input type="radio" class="with-gap" id="all" name="filter" checked="checked">
                                                <label for="all">All</label>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr class="between-sections">

                    <div id="members-content">

                    </div>
                </section>
            </div>
        </main>

        <!-- Footer & Scripts -->
        <?php
            include('assets/modular/footer.php');
            include('assets/modular/scripts.php');
        ?>
    </body>
</html>
