// header and navigations
document.querySelector('main').insertAdjacentHTML(
	'beforebegin',
	`<header class="container" style="--bs-gutter-x: 0;">
		<a class="header_title" href="index.html">Lennie Moore</a>
		<span class="header_subtitle">the composer's official website</span>

		<!-- slide out nav -->
		<a data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling" aria-label="toggle"><i class="fa-solid fa-bars fa-2xl"></i></a>

		<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasScrollingLabel"></h5>
				<i class="fa-solid fa-xmark fa-2xl" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close""></i>
			</div>
			<div class="offcanvas-body">
				<nav>
					<a class="nav-link" href="index.html">HOME</a>
					<a class="nav-link" href="updates.html">UPDATES</a>
					<a class="nav-link" href="projects.html">PROJECTS</a>
					<a class="nav-link" href="mentors.html">MENTORS</a>
					<a class="nav-link" href="about.html">ABOUT</a>
					<a class="nav-link" href="connect.html">CONNECT</a>
					<a class="nav-link" href="store.html">STORE</a>
					<!--<a class="nav-link" href="blog.html">BLOG</a>-->
				</nav>
  			</div>
		</div>
		<!-- top nav -->
		<nav class="nav nav-fill">
			<a class="nav-link" href="index.html">HOME</a>
			<a class="nav-link" href="updates.html">UPDATES</a>
			<a class="nav-link" href="projects.html">PROJECTS</a>
			<a class="nav-link" href="mentors.html">MENTORS</a>
			<a class="nav-link" href="about.html">ABOUT</a>
			<a class="nav-link" href="connect.html">CONNECT</a>
			<a class="nav-link" href="store.html">STORE</a>
			<!--<a class="nav-link" href="blog.html">BLOG</a>-->
		</nav>
	</header>`
)

const mediaQuery = window.matchMedia('(max-width: 992px)')
const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)')
const menuToggle = document.querySelector('.fa-bars')

// toggle mobile menu
function displayNone(e) {
	e.matches
		? (menuToggle.style.display = 'block')
		: (menuToggle.style.display = 'none')
}

mediaQuery.addListener(displayNone)
displayNone(mediaQuery)

// footer
// ADD &copy; 2023 Lennie Moore. All Rights Reserved.<br> in front of social icons?
// ADD <a href="https://www.hivesocial.app/" target="_blank" rel="noopener noreferrer" aria-label="@lenniemoore">,img src="http://www.lenniemoore.com/assets/images/HiveSocial_logo2.png" alt="Hive Social icon"</a>
// ADD FIX icon for Spoutible when available!

document.querySelector('main').insertAdjacentHTML(
	'afterend',
	`<footer class="container">
			<p><a href="https://spoutible.com/lenniemoore" target="_blank" rel="noopener noreferrer" aria-label="Spoutible"><img src="http://www.lenniemoore.com/assets/icons/Spoutible_logo2.png" alt="Spoutible icon"></a>
			<a href="https://www.youtube.com/@LennieMoore" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><i class="fa-brands fa-youtube fa-xl"></i></a>
			<a href="https://music.apple.com/us/artist/lennie-moore/180812297" target="_blank" rel="noopener noreferrer" aria-label="Apple Music"><i class="fa-brands fa-apple fa-xl"></i></a>
			<a href="https://open.spotify.com/artist/4jhqmfdj5qiutSpoXgiIMo" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><i class="fa-brands fa-spotify fa-xl"></i></a>
			<a href="https://steamcommunity.com/id/lenniemooremusic/" target="_blank" rel="noopener noreferrer" aria-label="Steam"><i class="fa-brands fa-steam fa-xl"></i></a>
			<a href="https://pro.imdb.com/name/nm0601500?ref_=hm_prof_header" target="_blank" rel="noopener noreferrer" aria-label="IMDB"><i class="fa-brands fa-imdb fa-xl"></i></a>
			<a href="https://www.linkedin.com/in/lenniemoore/" target="_blank" rel="noopener noreferrer" aria-label="linkedin"><i class="fa-brands fa-linkedin fa-xl"></i></a>
			<a href="https://www.facebook.com/lenniemooremusic" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook fa-xl"></i></a>
			<a href="https://twitter.com/lenniemooremus" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fa-brands fa-twitter fa-xl"></i></a>
 			<a href="https://mastodon.online/@lenniemoore" target="_blank" rel="noopener noreferrer" aria-label="Mastodon"><i class="fa-brands fa-mastodon"></i><br></a>
			<a href="#top" id="MyBtn"><i class="fa-regular fa-circle-up fa-2xl"></i></a>
			</p>
		</footer>`
)

/*
const myButton = document.querySelector('#MyBtn')

// When the user scrolls down 50px from the top of the document, show the button
function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		myButton.style.position = 'fixed'
		myButton.style.bottom = '20px'
		myButton.style.right = '20px'
		myButton.style.zIndex = '99'
		myButton.style.cursor = 'pointer'
		myButton.style.padding = '5px 15px'
		myButton.style.borderRadius = '20px'
	} else {
		myButton.style.display = 'none'
	}
}

window.addEventListener('scroll', scrollFunction)
*/
