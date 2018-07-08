import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as contentful from 'contentful'


/*
const client = contentful.createClient({
	space: 'qu10m4oq2u62',
	accessToken: 'f4a9f68de290d53552b107eb503f3a073bc4c632f5bdd50efacc61498a0c592a'
})

client.getEntries().then(entries => {
	entries.items.forEach(entry => {
		if(entry.fields){
			console.log(entry.fields)
		}
	})
})
*/

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
