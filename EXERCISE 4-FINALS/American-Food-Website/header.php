<?php
if(isset($message)){
    foreach($message as $message){
        echo '
        <div class="message">
            <span>'.$message.'</span>
            <i class="fa-solid fa-circle-xmark" onclick="this.parentElement.remove();"></i>
        </div>
        ';

    }
}


?>

<header class="admin-header">

    <div class="admin-flex fixed-top">
      <a href="#"><img class="logo" src="icon/logo.png"></a>

    <nav class="adminnavbar">
        <a href="menu.php">MENU</a>
 
    </nav>

    <div class="admin-icon">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="user-btn" class="fas fa-user"></div>
       
        <a href="search_page.php"><div id="search-btn" class="fa-solid fa-magnifying-glass"></div></a>


    <div class="profile">
        <?php
            $select_profile = $conn->prepare("SELECT * FROM `users` WHERE id = ?");
            $select_profile->execute([$user_id]);
            $fetch_profile = $select_profile->fetch(PDO::FETCH_ASSOC);
        ?>

        <img class="profile-icon" src="uploaded_img/<?= $fetch_profile['image']; ?>" alt="">
        <p><?= $fetch_profile['name']; ?></p>
        <a href="#" class="update-btn">Update Profile</a>
        <a href="logout.php" class="delete-btn">Logout</a>

    </div>

    </div>

</header>