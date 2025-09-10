function getActiveItemAdvanceLine(headers) {
  let x = 0;
  headers.forEach((element, index) => {
    if (element.classList.contains("active-linea-avance")){
      x = index;
    }
  });
  return x;
}

function updateProgressAdvanceLine(headers, indexActive, elementParent, wh) {
	// porcentajes establecidos
	const porcent = [15, 50, 80, 100];
	const elementActive = headers[indexActive];
	const elementIndicator = elementActive.querySelector('.indicator-linea-avance');
	const attributePorcentage = elementIndicator.getAttribute('percentage');
	const percentage = attributePorcentage ? attributePorcentage : porcent[indexActive];
	const elementProgress = elementParent.querySelector('.progress-bar');
	elementProgress.style[wh] = percentage + "%";
	elementProgress.setAttribute('aria-valuenow', percentage);
}

function nextItemAdvanceLineHorizontal(e) {
	const bodyActive = e.target.closest('.body-linea-avance');
	const idParent = bodyActive.getAttribute('data-la-parent');
	const elementParent = document.querySelector(idParent);
	const headers = elementParent.querySelectorAll('.header-linea-avance');
	const bodys = elementParent.querySelectorAll('.body-linea-avance');

	const indexActive = getActiveItemAdvanceLine(headers);
	headers[indexActive].classList.remove('active-linea-avance');
	headers[indexActive].classList.add('inactive-linea-avance');
	headers[indexActive + 1].classList.add('active-linea-avance');
	bodys[indexActive].classList.remove('active-linea-avance');
	bodys[indexActive + 1].classList.add('active-linea-avance');

	updateProgressAdvanceLine(headers, indexActive + 1, elementParent, 'width');
  }