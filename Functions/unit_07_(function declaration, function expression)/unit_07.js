const slider = () => {
	const expression = [
		'Начальник не всегда прав, но он всегда начальник.',
		'Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.',
		'Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.',
		'Не спеши выполнять приказ — его могут отменить.',
		'Тому, кто сам ничего не делает, все кажется по плечу.',
		'Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.',
		'Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.',
		'Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.',
		'Не будь незаменимым — тебя никогда не повысят.',
		'Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.',
	];

	const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090'];

	let count = 0;
	let wrapperExp;

	document.querySelector('.btn-start').addEventListener('click', function (event) {
		event.stopPropagation();
		this.classList.add('hide');
		changeExpression();
	});

	// function startFunction(event) {
	// 	event.stopPropagation();
	// 	this.classList.add('hide');
	// 	start();
	// }

	const changeExpression = () => {
		const body = document.querySelector('body');
		for (let i = 0; i < expression.length; i++) {
			let div = document.createElement('div');
			div.classList.add('slide');
			if (i !== 0) div.classList.add('hide');
			if (i === 0) div.style.background = bgColor[randomColor(0, bgColor.length - 1)];
			let activeExpression = document.createElement('div');
			activeExpression.textContent = expression[i];
			div.append(activeExpression);
			body.append(div);
		}
		body.addEventListener('click', nextExpression);
		wrapperExp = document.querySelectorAll('.slide');
	};

	const nextExpression = event => {
		hideExpression(count);
		if (count + 1 < expression.length) {
			count++;
		} else {
			count = 0;
		}
		showExpression(count);
	};

	const showExpression = n => {
		wrapperExp[n].classList.remove('hide');
		wrapperExp[n].style.background = bgColor[randomColor(0, bgColor.length - 1)];
	};

	const hideExpression = n => {
		wrapperExp[n].classList.add('hide');
	};

	const randomColor = (min, max) => {
		// случайное число от min до (max+1)
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	};

	// document.querySelector('.btn-start').onclick = startFunction;
};

document.addEventListener('DOMContentLoaded', slider);
