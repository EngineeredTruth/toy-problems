//my solution
function n00bify(text)
{

	console.log('Original text length: ',text.length)
	console.log('Word Count: ', countWords(text))
	text = text.replace(/(too)/gi,'2')
	text = text.replace(/(to)/gi,'2')
	text = text.replace(/(fore)/gi,'4')
	text = text.replace(/(for)/gi,'4')
	text = text.replace(/oo/gi, '00');
	text = text.replace(/be/gi,'b')
	text = text.replace(/are/gi,'r')
	text = text.replace(/you/gi,'u')
	text = text.replace(/please/gi,'plz')
	text = text.replace(/people/gi,'ppl')
	text = text.replace(/have/gi,'haz')
	text = text.replace(/really/gi,'rly')
	text = text.replace(/know/gi,'no')
	text = text.replace(/s/g,'z')
	text = text.replace(/S/g,'Z')

	text = text.replace(/(^w)/gi,'LOL $1')
	text = text.replace(/[.,']/gi,'')

	console.log('Before OMG: ',text.length)
	console.log(text);

	let exclude = 0;

	if(text.match(/\!/gi)){
		exclude = text.match(/\!/gi).length
	}

	console.log('exclude: ',1)

	const limit = 32 + exclude

	if(text.length >= limit){
			if(text.match(/^LOL/)){
				text = text.replace(/^LOL/i,'LOL OMG')
			} else {
				text = text.replace(/(^\S)/,'OMG $1')
			}
		}

	if(text[0] === 'h' || text[0]==='H'){
		text = text.toUpperCase();
	}

	text = text.split(' ');

	for(let i = 0; i < text.length; i++){
		if(i % 2 !== 0){
			text[i] = text[i].toUpperCase()
		}
	}

	text = text.join(' ');

		const word = countWords(text);
		console.log('Word Count Later on: ', countWords(text))

	let q = []
	let e = []

	for(let i = 0; i < word; i++){
		q.push('?');
	}

	for(let i = 0; i < word; i++){
		if(i % 2 === 0){
			e.push('!')
		} else {
			e.push('1')
		}
	}

	q = q.join('')
	e = e.join('')

		text = text.replace(/\?/gi,q)
		text = text.replace(/\!/gi,e)


  return text
}

n00bify("Woot woot woot woot woot woot!!!!")

function countWords(str) {
  return str.split(/\s+/).length;
}

//best practices
function n00bify(text) {
  const regexps = new Map([
    [/[.,']/g,   ''],
    [/too?/gi,   '2'],
    [/fore?/gi,  '4'],
    [/oo/gi,     '00'],
    [/be/gi,     'b'],
    [/are/gi,    'r'],
    [/you/gi,    'u'],
    [/please/gi, 'plz'],
    [/people/gi, 'ppl'],
    [/really/gi, 'rly'],
    [/have/gi,   'haz'],
    [/know/gi,   'no'],
    [/s/gi,      'z'],
    [/^(w)/i,    'LOL $1'],
    [/^((?:LOL )?)([^]*)/, (_, a, b) => a + (_.replace(/!?/g, '').length >= 32 ? 'OMG ' : '') + b],
    [/(^| )([^ ]+ )([^ ]+)/g, (_, a, b, c) => a + b + c.toUpperCase()],
    [/^h[^]*/gi, x => x.toUpperCase()],
    [/\?/g, (_, n, str) => str.split(/ +/).map(x => '?').join('')],
    [/!/g, (_, n, str) => str.split(/ +/).map((x, i) => '!1'.charAt(i & 1)).join('')]
  ]);
  for ([re, x] of regexps) text = text.replace(re, x);
  return text;
}
