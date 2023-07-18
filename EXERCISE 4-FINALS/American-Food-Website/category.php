<?php

@include 'config.php';

session_start();

$user_id = $_SESSION['user_id'];

if(!isset($user_id)){
    header('location:login.php');
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="icon/logo.png" type="image/x-icon">
    
    <link rel="stylesheet" href="visual.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Category</title>
</head>
<body>
  <?php include 'header.php' ?>

  <section class="products">

<h1 class="title">FOOD CATEGORIES</h1>

<div class="box-container">

<?php
   $category_name = $_GET['category'];
   $select_products = $conn->prepare("SELECT * FROM `products` WHERE category = ?");
   $select_products->execute([$category_name]);
   if($select_products->rowCount() > 0){
      while($fetch_products = $select_products->fetch(PDO::FETCH_ASSOC)){ 
?>
<form action="" class="box" method="POST">
   <div class="price">₱<span><?= $fetch_products['price']; ?></span></div>
   <a href="view_page.php?pid=<?= $fetch_products['id']; ?>" class="fas fa-eye"></a>
   <img src="uploaded_img/<?= $fetch_products['image']; ?>" alt="">
   <div class="name"><?= $fetch_products['name']; ?></div>
   <input type="hidden" name="pid" value="<?= $fetch_products['id']; ?>">
   <input type="hidden" name="p_name" value="<?= $fetch_products['name']; ?>">
   <input type="hidden" name="p_price" value="<?= $fetch_products['price']; ?>">
   <input type="hidden" name="p_image" value="<?= $fetch_products['image']; ?>">
   <input type="number" min="1" value="1" name="p_qty" class="qty">
   <div class="button-padding">
   <input type="submit" value="Add to favorite" class="option-btn" name="add_to_wishlist">
   <input type="submit" value="Add to cart" class="admin-btn" name="add_to_cart">
   </div>
</form>
<?php
      }
   }else{
      echo '<p class="empty">no products available!</p>';
   }
?>

</div>

</section>




  <?php include 'footer.php' ?>
  <script src="script.js"></script>


   
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
</body>
</html>