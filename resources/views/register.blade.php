<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="icon/logo.png" type="image/x-icon">
    <title>Register</title>

    
    <link rel="stylesheet" href="{{ asset('css/components.css') }}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>
<body class="register-bg">


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


<section class="form-holder">
    <section class="form-container">

        <form action="" enctype="multipart/form-data" method="POST">
            <h3>REGISTER NOW</h3>
            <div class="inputbox">
            <input type="text" name="name" required>
            <span>Name</span>
            </div>

            <div class="inputbox">
            <input type="email" name="email" required>
            <span>Email</span>
            </div>

            <div class="inputbox">
            <input type="password" name="pass" required>
            <span>Password</span>
            </div>

            <div class="inputbox">
            <input type="password" name="cpass" required>
            <span>Confirm Password</span>
            </div>

            <input type="file" name="image" class="box" required accept="image/png, image/jpg, image/jpeg">
            <input type="submit" value="register now" class="btn" name="submit">
            <p>Already have an account? <a href="login.php">login now</a></p>
        </form>

    </section>
    
</section>







    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
</body>
</html>