;(() => {
	const refs = {
		openMenuBtn: document.querySelector('.mobmenu__open'),
		closeMenuBtn: document.querySelector('.mobmenu__close'),
		backdrop: document.querySelector('.backdrop'),
		closeMenuItems: document.querySelectorAll('.mobmenu__point'),
	}

	refs.openMenuBtn.addEventListener('click', toggleMenu)
	refs.closeMenuBtn.addEventListener('click', toggleMenu)

	refs.closeMenuItems.forEach((item) => item.addEventListener('click', closeMenu))

	function toggleMenu() {
		refs.backdrop.classList.toggle('is-hidden')
		document.body.classList.toggle('menu-open')

		console.log('==== click menu-button ====')
	}

	function closeMenu() {
		refs.backdrop.classList.add('is-hidden')
		document.body.classList.remove('menu-open')
	}
})()
