<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Smooth scrolling and inner image animation | Codrops</title>
		<meta name="description" content="A smooth scrolling and inner image animation effect." />
		<meta name="keywords" content="smooth scrolling, animation, image effect, web design, tutorial, javascript" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" href="https://use.typekit.net/qrg0pyh.css">
		<link rel="stylesheet" type="text/css" href="css/base.css" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

		<script src="https://cdnjs.﻿cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TimelineMax.min.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Raleway:200,400,800&display=swap" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.4/SmoothScroll.min.js">
		<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	
	</head>
	<body class="loading">

		<main>
			<div data-scroll>
				<header>
					<nav>
						<h3 id="logo">Rex Louis</h3>
						<img class="hamburger" src="img/hamburger.svg" alt="hamburger">
					</nav>

					<section class="first-section">
						<div class="hero">
							<img src="img/background.jpg" alt="background">
							<h1 class="headline">Hello, I'm <span id="name">Rex Louis Roncesvalles</span> <br> I'm a <span id="work"></span></h1>
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
								<p class="description">He is a graduate of computer science. Very passionate about programming. Love to play computer games. He is single and ready to mingle (joke, maglaon ni siya).
									<br><br>
									 He know something in c++, java, vb.net, c#, html, css, javascript, python, mysql and mssql.
								</p>
							</div>
						</div>
					</section>


				<div class="content">

					<h2 class="h2-works">My Works</h2>

					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Central view</h2>
							<p class="item__caption-copy">Great turbulent clouds emerged into consciousness citizens.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t2"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Lost in time</h2>
							<p class="item__caption-copy">Brain is the seed of intelligence the sky calls to us a very small stage.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t3"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Ready to land</h2>
							<p class="item__caption-copy">Cosmos encyclopaedia galactica a billion trillion culture cosmic ocean.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">All equal</h2>
							<p class="item__caption-copy">Network of wormholes dream of the mind's eye finite but unbounded concept.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t2"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Connections</h2>
							<p class="item__caption-copy">Two ghostly white figures in coveralls and helmets are softly dancing vastness.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t3"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">The state of divergence</h2>
							<p class="item__caption-copy">Vastness is bearable only through love invent the universe vanquish.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t1"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Open perspective</h2>
							<p class="item__caption-copy">The only home we've ever known concept of the number one.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t3"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">Discovery of shapes</h2>
							<p class="item__caption-copy">Decipherment explorations tesseract as a patch of light.</p>
						</div>
					</div>
					<div class="item">
						<div class="item__img-wrap"><div class="item__img item__img--t2"></div></div>
						<div class="item__caption">
							<h2 class="item__caption-title">The Observer</h2>
							<p class="item__caption-copy">Astonishment muse about dispassionate extraterrestrial observer.</p>
						</div>
					</div>
				</div>
			</div>
		</main>
		<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/app.js"></script>
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
