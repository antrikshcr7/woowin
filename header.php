<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Woowin</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css"> <!-- Add your custom styles here -->
</head>
<body>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.php">
        <img src="images/woow.jpg" class="nav-logo" alt="Woowin Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" id="offcanvasNavbar" tabindex="-1" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link <?= ($page == 'home') ? 'active' : '' ?>" href="index.php">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?= ($page == 'about') ? 'active' : '' ?>" href="aboutus.php">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle <?= ($page == 'product') ? 'active' : '' ?>" href="product.php" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="product.php">All Products</a></li>
                <li><a class="dropdown-item" href="rice.php">Rice</a></li>
                <li><a class="dropdown-item" href="OrganicOil.php">Cold Pressed Oil</a></li>
                <li><a class="dropdown-item" href="spices.php">Spices</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link <?= ($page == 'contact') ? 'active' : '' ?>" href="contact.php">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?= ($page == 'blog') ? 'active' : '' ?>" href="blog.php">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link <?= ($page == 'faq') ? 'active' : '' ?>" href="faq.php">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
