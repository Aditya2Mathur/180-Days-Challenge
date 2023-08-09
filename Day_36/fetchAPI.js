async function testing() {
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.text();

    console.log(output);
}


const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let test = {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  let con = fetch('https://jsonplaceholder.typicode.com/posts', test);