/* 공지사항 페이지네이션 */
let rowsPerPage = 10;
let rows = document.querySelectorAll('#my-table tbody tr');
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector('#numbers');
let currentPage = 0;
for (let i = 1; i <= pageCount; i++) {
	numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
let numberBtn = numbers.querySelectorAll('a');
function displayRow(idx) {
	let start = idx * rowsPerPage;
	let end = start + rowsPerPage;
	let rowsArray = Array.from(rows);
	rowsArray.forEach(row => {
		row.style.display = 'none';
	});
	let newRows = rowsArray.slice(start, end);
	newRows.forEach(row => {
		row.style.display = '';
	});
	numberBtn.forEach(btn => btn.classList.remove('active'));
	if (numberBtn[idx]) {
		numberBtn[idx].classList.add('active');
	}
	currentPage = idx;
}
numberBtn.forEach((item, idx) => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		displayRow(idx);
	});
});
document.querySelector('.fa-angles-left').addEventListener('click', () => {
	displayRow(0);
});
document.querySelector('.fa-angle-left').addEventListener('click', () => {
	if (currentPage > 0) {
		displayRow(currentPage - 1);
	}
});
document.querySelector('.fa-angle-right').addEventListener('click', () => {
	if (currentPage < pageCount - 1) {
		displayRow(currentPage + 1);
	}
});
document.querySelector('.fa-angles-right').addEventListener('click', () => {
	displayRow(pageCount - 1);
});
displayRow(0);