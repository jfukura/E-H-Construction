<?php

include '../models/config.model.php';

// Currently just userAgent
include BASE_URI.'/library/includes/config/functions.inc.php';

$project = projectDetail();

// $p = $_GET['p'];

// Return the data

// Page Variables
$metaTitle = 'E&amp;H Construction Projects | ';
$metaDescr = 'Selected sustainable luxury home projects by E&amp;H Construction';
$metaImage = 'IMAGE';

// HTML DocHead
include BASE_URI.'/partials/dochead.inc.php';

?>

    <div class="container" itemscope itemtype="http://schema.org/Thing">
        <div class="col-md-3">
            <?php include BASE_URI.'/library/includes/framework/head.inc.php'; ?>
        </div>

        <h1 class="col-md-9 page-header">Selected Projects</h1>

        <article class="col-md-9">

            <!-- TODO: Make the background image a srcset so that we can utilize responsive images -->
            <div class="hero" style="min-height:300px;background:url(<?php echo $project['details']['hero'];?>)center center no-repeat;background-size:cover;">
                <h1 id="project" class="hero-title" itemprop="name"><?php echo $project['details']['name'];?></h1>
            </div>

            <span class="helper col-md-12"><?php echo $project['details']['vendors'];?></span>
            <main role="main" class="col-md-7">


                <h2 class="subheadline little-line" itemprop="description"><?php echo $project['details']['summary'];?></h2>
                <p class="mt-0"><?php echo $project['details']['description'];?></p>
            </main>
            <div class="col-md-5">
                <ul id="ProjectGallery" class="gallery">
                    <?php print_r($project['images']);?>
                </ul>
            </div>
        </article>
    </div>
    <script src="/library/scripts/ehconstruction.js"></script>
    <script>
        var box = new Lightbox();

        console.log(box);
    </script>
    <?php
        include BASE_URI.'/library/includes/framework/foot.inc.php';
        include BASE_URI.'/library/includes/script.pack.php';
    ?>

</body>
</html>