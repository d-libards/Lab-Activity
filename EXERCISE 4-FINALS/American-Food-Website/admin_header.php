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

    <div class="admin-flex">
        <a href="#admin_page.php" class="admin-logo">ADMIN <span>DESK</span></a>

    <nav class="adminnavbar">
        <a href="admin_products.php">Product</a>
        <a href="admin_users.php">Users</a>
    </nav>

    <div class="admin-icon">
        <div id="menu-btn" class="fas fa-bars"></div>
        <div id="user-btn" class="fas fa-user"></div>

    </div>

    <div class="profile">
        <?php
            $select_profile = $conn->prepare("SELECT * FROM `users` WHERE id = ?");
            $select_profile->execute([$admin_id]);
            $fetch_profile = $select_profile->fetch(PDO::FETCH_ASSOC);
        ?>

        <img class="profile-icon" src="uploaded_img/<?= $fetch_profile['image']; ?>" alt="">
        <p><?= $fetch_profile['name']; ?></p>
        <a href="#" class="update-btn">Update Profile</a>
        <a href="logout.php" class="delete-btn">Logout</a>


    </div>

    </div>

</header>