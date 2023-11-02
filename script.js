const questions = [
	{
		question: "Сколько в комнате кошек, если в каж­дом из четырех углов сидит по кошке, а напротив каждой кошки сидит по кошке??",
		answers: [["12",0], ["16",0], ["5",0], ["4",1]]
	},
	{
		question: "Крышка стола имеет четыре угла. Один из них отпилили. Сколько углов стало??",
		answers: [["4",0], ["3",0], ["5",1], ["6",0]]
	},
	{
		question: " Сколько нужно сделать распилов, что­ бы распилить бревно на 12 частей?",
		answers: [["12",0],
		["11",1],
		["12",0],
		["10",0]]
	},
	{
		question: "Каким числом является сумма натураль­ных чисел?",
		answers: [["Целым",0],
		["Натуральным",1],
		["Положительным",0],
		["Отрицательным",0]]
	},
	{
		question: " Под каким номером самая тонкая кисть для рисования??",
		answers: [["1",1],
		["2",0],
		["0",0],
		["3",0]]
	},
	{
		question: "Говорят, что математика — царица всех наук, а царица математики",
		answers: [["Геометрия",0],
		["Алгебра",0],
		["Тригонометрия",0],
		["Арифметика",1]]
	},
	{
		question: "Равнобедренный треугольник, основа­ние которого равно боковой стороне, является...",
		answers: [["Прямоугольным",0],
		["Равносторонним",1],
		["Прямоугольным",0],
		["Тупоугольным",0]]
	},
	{
		question: "Кем был мужчина, послуживший моделью для известной картины «Американская готика» Гранта Вуда?",
		answers: [["Коммирвояжем",0],
		["Местным шерифом",0],
		["Его зубным врачом",1],
		["Мясником",0]]
	},
	{
		question: "Из каких плодов можно получить копру?",
		answers: [["Ананас",0],
		["Вишня",0],
		["Абрикос",0],
		["Кокос",1]]
	},
	{
		question: "Под каким названием известна единица с последующими ста нулями?",
		answers: [["Гугол",1],
		["Мегатрон",0],
		["Гигабит",0],
		["Наномоль",0]]
	},
	{
		question: "Какой химический элемент составляет более половины массы тела человека?",
		answers: [["Углерод",0],
		["Кислород",1],
		["Кальций",0],
		["Железо",0]]
	},
	{
		question: "Какую часть тела также называют «атлант»?",
		answers: [["Шейный позвонок",1],
		["Шестая пара ребер",0],
		["Шейный позвонок",0],
		["Часть тела",0]]
	},
	{
		question: "Сколько кубиков в кубике Рубика?",
		answers: [["26",0],
		["22",0],
		["24",1],
		["28",0]]
	},
	{
		question: "Какой специалист занимается изучением неопознанных летающих объектов? ",
		answers: [["Кинолог",0],
		["Педиатр",0],
		["Психиатр",0],
		["Уфолог",1]]
	},
	{
		question: "Как называется разновидность воды, в которой атом водорода замещён его изотопом дейтерием? ",
		answers: [["Легкая",0],
		["Средняя",0],
		["Тяжелая",1],
		["Невесомая",0]]
	},
	{
		question: "Что такое десница? ",
		answers: [["Рука",1],
		["Бровь",0],
		["Глаз",0],
		["Шея",0]]
	},
	{
		question: "В какое море впадает река Урал?",
		answers: [["Азовское",0],
		["Черное",0],
		["Средиземное",0],
		["Каспийское",1]]
	},
	{
		question: "На что кладут руку члены английского общества лысых во время присяги? ",
		answers: [["Баскетбольный мяч",0],
		["Апельсин",0],
		["Бильярдный шар",1],
		["Кокосовый орех",0]]
	},
	{
		question: "Как назывался каменный монолит, на котором установлен памятник Петру I в Санкт-Петербурге? ",
		answers: [["Гром-камень",1],
		["Дом-камень",0],
		["Гора-камень",0],
		["Разрыв-камень",0]]
	},
	{
		question: "Какого ордена не было у первого советского космонавта Юрия Гагарина? ",
		answers: [["Ожерелье Нила",0],
		["Крест Грюнвальда",0],
		["Орден двойного дракона",1],
		["Плайя Хирон",0]]
	},
	{
		question: "Какое животное имеет второе название — кугуар? ",
		answers: [["Оцелот",0],
		["Леопард",0],
		["Пума",1],
		["Пантера",0]]
	},
	{
		question: "Что в России 19 века делали в дортуаре? ",
		answers: [["Ели",0],
		["Ездили верхом",0],
		["Купались",0],
		["Спали",1]]
	},
	{
		question: "Какой химический элемент назван в честь злого подземного гнома? ",
		answers: [["Гафний",0],
		["Кобальт",1],
		["Берилий",0],
		["Теллур",0]]
	},
	{
		question: "Что, согласно поговорке, происходит, когда идет караван?",
		answers: [["Собака лает",1],
		["Кошка мурлыкает",0],
		["Ветер воет",0],
		["Море волнуется",0]]
	},
	{
		ворос: "Что обычно готовят способом пашот?",
		answers: [["Сыр",0],
		["Багет",0],
		["Яйца",1],
		["Ветчину",0]]
	},
	{
		question: "Как зовут известную американскую певицу, автора хита «Bad Guy»?",
		answers: [["Бенни Айриш",0],
		["Петти Бейлиш",0],
		["Санни Бритиш",0],
		["Билли Айлиш",1]]
	},
	{
		question: "Оттенком какого цвета является «ниагара»?",
		answers: [["Синего",1],
		["Зеленого",0],
		["Красного",0],
		["Черного",0]]
	},
	{
		question: "Какое имя было самым распространенным у шведских королей?",
		answers: [["Густав",0],
		["Фредерик",0],
		["Карл",1],
		["Оскар",0]]
	},
	{
		question: "Кто в начале прошлого века жил в общежитии «Корабль-прачечная» на Монмартре?",
		answers: [["Матросы",0],
		["Прачки",0],
		["Официанты",0],
		["Художники",1]]
	},
	{
		question: "Один из видов какого насекомого признали самым быстрым в мире?",
		answers: [["Комар",0],
		["Слепень",1],
		["Майский жук",0],
		["Шершень",0]]
	},
	{
		question: "Флаг какого святого не является частью флага Великобритании?",
		answers: [["Святого Петра",1],
		["Святого Андрея",0],
		["Святого Патрика",0],
		["Святого Георгия",0]]
	},
	{
		question: "Какого романа нет у Артура Хейли?",
		answers: [["Аэропорт",0],
		["Отель",0],
		["Колесо",0],
		["Больница",1]]
	},
	{
		question: "Кто из персонажей комедии дель арте говорил на ломаном итальянском языке с сильным испанским акцентом?",
		answers: [["Панталоне",0],
		["Доктор",0],
		["Арлекин",0],
		["Капитан",1]]
	},
	{
		question: "Кто был учредителем и председателем «Общества врачей – любителей физических упражнений и велосипедной езды»?",
		answers: [["Сергей Боткин",0],
		["Иван Павлов",1],
		["Николай Пирогов",0],
		["Николай Склифасовский",0]]
	},
	{
		question: "Столетие какого кинорежиссера пришлось не на 2020 год?",
		answers: [["Федерико Феллини",0],
		["Лукино Висконти",1],
		["Михаила Швейцера",0],
		["Сергея Бондарчука",0]]
	},
	{
		question: "Как работает усердный и трудолюбивый человек?",
		answers: [["Не мудрствуя лукаво",0],
		["Не находя себе место",0],
		["Не ударяя в грязь лицом",0],
		["Не покладая рук",1]]
	},
	{
		question: "Как звали малышку из Зеленого города, которая понравилась Незнайке?",
		answers: [["Сосулька",0],
		["Метелица",0],
		["Снежинка",1],
		["Пурга",0]]
	},
	{
		question: "Что рано или поздно слагает каждый депутат?",
		answers: [["Оды",0],
		["Полномочия",1],
		["Саги",0],
		["Поэмы",0]]
	},
	{
		questionы: "Как часто называют лидера музыкальной группы?",
		answers: [["Фронтмен",1],
		["Фронтон",0],
		["Афронт",0],
		["Фрондер",0]]
	}
]

let level = 1
let session = []
let sessionInd = []
let nzs = ''
let fifty = true
let zal = true
let call = true

const nextLevel = (l) => {
	
	const h = document.querySelectorAll('.hide')
	for (item of h) {
		item.classList.remove('hide')
	}
	
	if(l>15) {
		document.querySelector('.modal3').style.display = 'block'
	} else {	
		let i = 15
		document.querySelector('.active').classList.remove('active')
		const lines = document.querySelectorAll('li')
		for (item of lines) {
			if (i==l) {
				if (l==5 || l==10 || l==15) {
					item.classList.add('nz')
					nzs = item.innerHTML
				}
				item.classList.add('active')
			}
			i--
		}
	
		document.querySelector('.level p').innerText = level
		console.log(session[l])
		document.querySelector('.question p').innerText = session[l].question
		document.querySelector('.a1 span').innerText = session[l].answers[0][0]
		document.querySelector('.a2 span').innerText = session[l].answers[1][0]
		document.querySelector('.a3 span').innerText = session[l].answers[2][0]
		document.querySelector('.a4 span').innerText = session[l].answers[3][0]
	}
}

const getNewSession = () => {
	for (let i=0; i<16; i++) {
		do {
			x = Math.floor(Math.random() * 39);
		} while (sessionInd.includes(x)) 
		sessionInd.push(x)
		session.push(questions[x])
	}
	console.log(session)
}

window.onload = () => {
	getNewSession()
	const x = document.querySelectorAll('.answer')
	for (item of x) {
		item.addEventListener('click', function() {
			this.classList.add("ah")
			const that = this
			const ans = this.className.substr(1, 2)	
			let q, r
			setTimeout(function() {
				for (i in session[level].answers) {
					if (session[level].answers[i][1] == 1) {
						q = Number(i)+1	
					}
				}
				r = document.querySelector('.a'+String(q))
				r.classList.add('ar')
				setTimeout(function() {
					that.classList.remove('ah')
					r.classList.remove('ar')
					if (session[level].answers[Number(ans)-1][1]) {
						level++
						nextLevel(level)
					} else {
						document.querySelector('.modal0').style.display = 'block'
						if (nzs) {
							document.querySelector('.modal0 span').innerHTML = 'You get  ' + nzs
						}
					}				
				}, 2000)		
			}, 2000)
		})
	}
	const y = document.querySelectorAll('.newGame')
	for (item of y) {
		item.addEventListener('click', function() {
			document.querySelector('.modal0').style.display = 'none'
			document.querySelector('.modal3').style.display = 'none'
			const nz = document.querySelectorAll('.nz')
			for (item of nz) {
				item.classList.remove('nz')
			}
			const fl = document.querySelectorAll('.filter')
			for (item of fl) {
				item.classList.remove('filter')
			}
			session = []
			sessionInd = []
			level = 1
			nzs = ''
			fifty = true
			zal = true
			call = true
			getNewSession()
			nextLevel(level)
		})
	}
	const z = document.querySelectorAll('.contGame')
	for (item of z) {
		item.addEventListener('click', function() {
			document.querySelector('.modal1').style.display = 'none'
			document.querySelector('.modal2').style.display = 'none'
		})
	}
	document.querySelector('.fifty').addEventListener('click', function() {
		if (fifty) {
			fifty=!fifty
			this.classList.add('filter')
			setTimeout(function() {
				for (i in session[level].answers) {
						if (session[level].answers[i][1] == 1) {
							if (i==0) {
								document.querySelector('.a2').classList.add('hide')
								document.querySelector('.a3').classList.add('hide')
							}	
							if (i==1) {
								document.querySelector('.a1').classList.add('hide')
								document.querySelector('.a4').classList.add('hide')
							}	
							if (i==2) {
								document.querySelector('.a1').classList.add('hide')
								document.querySelector('.a4').classList.add('hide')
							}	
							if (i==3) {
								document.querySelector('.a2').classList.add('hide')
								document.querySelector('.a3').classList.add('hide')
							}	
					}
				}
			}, 1000)
		}
	})
	document.querySelector('.call').addEventListener('click', function() {
		if (call) {
			call=!call
			this.classList.add('filter')
			let ra
			for (i in session[level].answers) {
					if (session[level].answers[i][1] == 1) {
						if (i==0) ra='A'	
						if (i==1) ra='B'	
						if (i==2) ra='C'	
						if (i==3) ra='D'	
				}
			}
			document.querySelector('.modal1 span').innerText = ra
			setTimeout(function() {
				document.querySelector('.modal1').style.display = 'block'
			}, 1000)
		}
	})
	document.querySelector('.zal').addEventListener('click', function() {
		if (zal) {
			zal=!zal
			this.classList.add('filter')
			let rA, rB, rC, rD
			for (i in session[level].answers) {
					if (session[level].answers[i][1] == 1) {
						if (i==0) {
							rA = Math.random() * (90 - 70) + 70
							rB = (100-rA)/3
							rC = (100-rA-rB)/4
							rD = 100-rA-rB-rC
						}
						if (i==1) {
							rB = Math.random() * (90 - 70) + 70
							rA = (100-rB)/2
							rC = (100-rA-rB)/4
							rD = 100-rA-rB-rC
						}	
						if (i==2) {
							rC = Math.random() * (90 - 70) + 70
							rB = (100-rC)/4
							rA = (100-rC-rB)/3
							rD = 100-rA-rB-rC
						}	
						if (i==3) {
							rD = Math.random() * (90 - 70) + 70
							rB = (100-rD)/5
							rC = (100-rD-rB)/2
							rA = 100-rD-rB-rC
						}	
				}
			}		
			document.querySelector('.blue').style.height = rA.toFixed(2)+'%'
			document.querySelector('.blue span').innerText = rA.toFixed(2)+'%'
			document.querySelector('.red').style.height = rB.toFixed(2)+'%'
			document.querySelector('.red span').innerText = rB.toFixed(2)+'%'
			document.querySelector('.green').style.height = rC.toFixed(2)+'%'
			document.querySelector('.green span').innerText = rC.toFixed(2)+'%'
			document.querySelector('.blue2').style.height = rD.toFixed(2)+'%'
			document.querySelector('.blue2 span').innerText = rD.toFixed(2)+'%'
			setTimeout(function() {
				document.querySelector('.modal2').style.display = 'block'
			}, 1000)
		}
	})
	nextLevel(level)
}