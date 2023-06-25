<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
    
    <?php require 'header.php'; ?>

    <!-- Form Container -->
    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span>
        <!-- Login Form -->
        <div class="form-box login">
            <h2>Login</h2>
            <form action="index.php" method="post">
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <input type="text" required name="username" maxlength="10">
                    <label for="">Username</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required name="password" maxlength="15">
                    <label for="">Password</label>
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox" name="remember" value="1">Remember me</label>
                    <a href="#">Forget Password</a>
                </div>
                <button type="submit" class="btn" name="login">Login</button>
                <div class="login-register">
                    <p>Don't have an account? <a href="#" class="register-link">Register</a></p>
                </div>
            </form>
        </div>
        <!-- Register Form -->
        <div class="form-box register">
            <h2>Registration</h2>
            <form action="index.php" method="post">
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <input type="text" required maxlength="10" name="username">
                    <label for="">Username</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" required name="email">
                    <label for="">Email</label>
                </div>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" required maxlength="15" name="password">
                    <label for="">Password</label>
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox"> I agree to the terms and conditions</label>
                </div>
                <button type="submit" class="btn" name="register">Register</button>
                <div class="login-register">
                    <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                </div>
            </form>
        </div>
    </div>

    <?php 
        $UID = "Admin";
        $pw = "111";

        if (isset($_POST['login'])){
            $username = $_POST['username'];
            $pass = $_POST['password'];
            if ($username == $UID and $pass == $pw){
                if(isset($_POST['remember'])){
                    setcookie ('username', $username, time()+60*60*7);
                }
                session_start();
                $_SESSION['username'] = $username;
                header("location:home.php");
            }
            else {
                echo "<script>alert('Username or Password is invalid. Try Again')</script>;";
            }
        }

        if(isset($_POST['register'])){
            $username = $_POST['username'];
            $pass = $_POST['password'];
            $email = $_POST['email'];

            $file = fopen("data.txt","a");
            fwrite($file,$username. ", " . $pass . ", " .$email."\n");
            fclose($file);
            echo "<script>alert('Success!')</script>;";
        }
    ?>
    
    <script src="script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>