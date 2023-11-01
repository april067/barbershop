;(() => {
	const refs = {
		openMenuBtn: document.querySelector('.mobmenu__open'),
		closeMenuBtn: document.querySelector('.mobmenu__close'),
		backdrop: document.querySelector('.backdrop'),
		closeMenuItem1: document.querySelector('.mobmenu__point1'),
		closeMenuItem2: document.querySelector('.mobmenu__point2'),
		closeMenuItem3: document.querySelector('.mobmenu__point3'),
		closeMenuItem4: document.querySelector('.mobmenu__point4'),
		closeMenuItem5: document.querySelector('.mobmenu__point5'),
	}

	refs.openMenuBtn.addEventListener('click', toggleMenu)
	refs.closeMenuBtn.addEventListener('click', toggleMenu)

	refs.closeMenuItem1.addEventListener('click', closeMenu)
	refs.closeMenuItem2.addEventListener('click', closeMenu)
	refs.closeMenuItem3.addEventListener('click', closeMenu)
	refs.closeMenuItem4.addEventListener('click', closeMenu)
	refs.closeMenuItem5.addEventListener('click', closeMenu)

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
