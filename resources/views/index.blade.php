<!DOCTYPE html>
<html>
<head>
	<title>Rex Louis Portfolio</title>
	
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="https://cdnjs.﻿cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Raleway:200,400,800&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.4/SmoothScroll.min.js">
	



</head>
<body>

	<header>
		<nav>
			<h3 id="logo">Rex Louis</h3>
			<img class="hamburger" src="img/hamburger.svg" alt="hamburger">
			
		</nav>

		<section class="first-section">
			<div class="hero">
				<img src="img/background.jpg" alt="background">
				<h1 class="headline">Hello, I'm <span id="name">Rex Louis Roncesvalles</span>. <br> I'm a <span id="work">ghost programmer</span>.</h1>
			</div>
		</section>
	</header>


	<div class="slider" id="particles-js"></div>


	<section class="second-section">

		<div class="about">

			<div class="img-about">
				
				<img src="img/me.jpg" alt="rex louis">

			</div>
	
			<div class="p-about">

				<h2 class="h2-about">WHO IS REX LOUIS?</h2>
				<p class="description">Rex Louis is a jobless guy who is very eager to have a first legit job related to his profession. He has been a ghost programmer for 3 years, making projects and thesis of others.</p>

			</div>

		</div>
		
	</section>

	<section class="third-section">
		<h1>Works</h1>

	</section>




	<!-- <script src="https://unpkg.com/@barba/core"></script> -->
	<script type="text/javascript" src="js/app.js"></script>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
	<script type="text/javascript">
		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
		particlesJS.load('particles-js', 'assets/particles.json', function() {
		console.log('callback - particles.js config loaded');
		});
	</script>
			

	
</body>



</html>