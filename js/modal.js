(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]'),
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle('is-hidden');
	}
})();
const a = document.querySelector('.a');
a.addEventListener('click', oncl);
function oncl(e) {
	console.log(e.currentTarget.elements);
}
const form = document.querySelector('.form-footer');
form.addEventListener('submit', sub);

function sub(ev) {
	ev.preventDefault();
	console.log(ev.currentTarget.elements.user_email.value);
	const data = new FormData(ev.currentTarget);
	console.log(data.get('user_email'));
}
// fetch('https://books-backend.p.goit.global/books/top-books')
// 	.then(obj => obj.json())
// 	.then(item =>
// 		item.map(obj => a.insertAdjacentHTML('beforeend', createmarkup(obj)))
// 	);

// function createmarkup(arr) {
// 	return `<div>${arr.list_name}<div>${createmarkupFor(b)}</div></div>`;
// }
// function createmarkupFor(arr) {
// 	return arr
// 		.map(item => {
// 			return `<div>${item}</div>`;
// 		})
// 		.join('');
// }
