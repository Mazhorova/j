const questions = [
	{
		question: "What is NOT a school subject?",
		answers: [["Maths",0], ["English",0], ["PE",0], ["garden",1]]
	},
	{
		question: "... you like Computers?",
		answers: [["A",0], ["An",0], ["Do",1], ["Is",0]]
	},
	{
		question: "I've got Science ... Tuesday.",
		answers: [["in",0],
		["on",1],
		["at",0],
		["for",0]]
	},
	{
		question: "What day you DON'T go to school?",
		answers: [["Monday",0],
		["Sunday",1],
		["Friday",0],
		["Thursday",0]]
	},
	{
		question: "... she got Reading on Wednesday?",
		answers: [["Has",1],
		["As",0],
		["Haves",0],
		["Are",0]]
	},
	{
		question: "Choose the correct spelling of the word.",
		answers: [["HOMESWORK",0],
		["HOUMWORK",0],
		["HOEMWORK",0],
		["HOMEWORK",1]]
	},
	{
		question: "Look at the pictures. Where is tablet? (slides 9-10)",
		answers: [["1",0],
		["2",1],
		["3",0],
		["4",0]]
	},
	{
		question: "Listen and choose",
		answers: [["three - tree",0],
		["bat - bath",0],
		["mats - maths",1],
		["tank - thank",0]]
	},
	{
		question: "... are my building bricks",
		answers: [["Is",0],
		["This",0],
		["Has",0],
		["These",1]]
	},
	{
		question: "That is my ...",
		answers: [["camera",1],
		["cameras",0],
		["tablets",0],
		["skateboards",0]]
	},
	{
		question: "Look at the pictures. Which robot is old? (slides 11-12)",
		answers: [["1",0],
		["2",1],
		["3",0],
		["4",0]]
	},
	{
		question: "This is ... skateboard",
		answers: [["Anna's",1],
		["Anna is",0],
		["Annas",0],
		["Anna are",0]]
	},
	{
		question: "Look at the pictures. \"I'm hungry\". (slides 13-14)",
		answers: [["1",0],
		["2",0],
		["3",1],
		["4",0]]
	},
	{
		question: "Watch a video. What the robot CAN'T do? (slide 15)",
		answers: [["walk",0],
		["sing",0],
		["dance",0],
		["swim",1]]
	},
	{
		question: "Choose the right word",
		answers: [["RAMCHAIR",0],
		["ARMCHARE",0],
		["ARMCHAIR",1],
		["ARMCHARI",0]]
	},
	{
		question: "This is ... living room",
		answers: [["our",1],
		["oure",0],
		["oures",0],
		["or",0]]
	},
	{
		question: "What game can you play inside?",
		answers: [["football",0],
		["basketball",0],
		["volleyball",0],
		["chess",1]]
	},
	{
		question: "Look at the picture. The living room has got 4 ...  (slide 16)",
		answers: [["windows",0],
		["sofas",0],
		["walls",1],
		["mirrors",0]]
	},
	{
		question: "Look at the picture. Where is the cat? (slide 17)",
		answers: [["in front of the armchair",1],
		["behind the armchair",0],
		["between the desk and the chair",0],
		["there is no cat",0]]
	},
	{
		question: "Look at the pictures. How many different things can you see? (slide 18)",
		answers: [["0",0],
		["3",0],
		["5",1],
		["12",0]]
	},
	{
		question: "Can you find the words with \"ch\"?",
		answers: [["ship, shop",0],
		["birthday, Thursday",0],
		["chair, chain",1],
		["back, kick",0]]
	},
	{
		question: "Listen and choose. (slide 19)",
		answers: [["hit",0],
		["kick",0],
		["jump",0],
		["bounce",1]]
	},
	{
		question: "- Can you catch the ball? - Yes, I ...",
		answers: [["do",0],
		["can",1],
		["can't",0],
		["isn't",0]]
	},
	{
		question: "Which one is true (+)?",
		answers: [["You don't kick the ball in basketball",1],
		["You don't hit the ball in tennis",0],
		["You don't kick the ball in football",0],
		["You don't jump in volleyball",0]]
	},
	{
		question: "** - OK, *** - good, **** - very good, ***** - ... ?",
		answers: [["bad",0],
		["easy",0],
		["fantastic",1],
		["different",0]]
	},
	{
		question: "A unicycle has got ... wheel(s)",
		answers: [["five",0],
		["three",0],
		["two",0],
		["one",1]]
	},
	{
		question: "Choose the right word. \"very ...\"",
		answers: [["popular",1],
		["basketball",0],
		["the ball",0],
		["wheel",0]]
	},
	{
		question: "Which one is right?",
		answers: [["BAISBALL",0],
		["BASEBOLL",0],
		["BASEBALL",1],
		["BASEBAAL",0]]
	},
	{
		question: "Something you eat on your birthday",
		answers: [["candle",0],
		["banana",0],
		["papaya",0],
		["cake",1]]
	},
	{
		question: "Listen. What animal is this? (slide 20)",
		answers: [["cat",0],
		["duck",1],
		["chicken",0],
		["dog",0]]
	},
	{
		question: "Look. What colours can you see? (slide 21).",
		answers: [["pink, green, brown",1],
		["red, blue, yellow",0],
		["orange, purple, black",0],
		["white, red, pink",0]]
	},
	{
		question: "Look at the picture. What's their job? (slide 22)",
		answers: [["They are farmers",0],
		["They are doctors",0],
		["They are builders",0],
		["They are panda keepers",1]]
	},
	{
		question: "What does farmer do?",
		answers: [["He drives a taxi",0],
		["He scores goals",0],
		["He grows plants",0],
		["He builds houses",1]]
	},
	{
		question: "- Is your dad a doctor? - No, he ... . He is a police officer",
		answers: [["is",0],
		["isn't",1],
		["am",0],
		["not",0]]
	},
	{
		question: "Look at the picture. What does he do? (slide 23)",
		answers: [["He drives a taxi. He doesn't score goals",0],
		["He grows olives. He doesn't grow carrots",1],
		["He builds houses. He doesn't grow schools",0],
		["He plays football. He doesn't play basketball",0]]
	},
	{
		question: "What time do you go to bed?	",
		answers: [["At 5 o'clock in the morning",0],
		["At 2 o'clock in the afternoon",0],
		["At 6 o'clock in the evening",0],
		["At 10 o'clock in the evening",1]]
	},
	{
		question: "In the morning I have ...",
		answers: [["lunch",0],
		["a camera",0],
		["breakfast",1],
		["dinner",0]]
	},
	{
		question: "... ... do you get up?",
		answers: [["Do you",0],
		["What time",1],
		["Are you",0],
		["How much",0]]
	},
	{
		question: "Look at the picture. What time is it? (slide 24)",
		answers: [["It's 7 o'clock in the morning",1],
		["It's 7 o'clock in the evening",0],
		["It's 7 o'clock in the afternoon",0],
		["It's 7 o'clock at night",0]]
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