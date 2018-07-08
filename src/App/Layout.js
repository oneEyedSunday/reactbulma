import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import Site from './Layout/Site'
import Header from './Layout/Header'
import Content from './Layout/Content'
import Footer from './Layout/Footer'
import Router from './Layout/Router'

const Layout = ({ children }) => (
	<Site>
		<Helmet title='Aaron is awesome'
		meta={[
			{name: 'description', content: 'Aaron Klaser\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t'},
			{name: 'keywords', content: 'resume, blog, porfolio, tutorials, aaron klaser'}
			]}
		script={[{'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'}]}
		link={[{'rel': 'stylesheet',
		'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}]} />
		<Header />
		<Content>
			{/* Children */}
			<Router />
		</Content>

		<Footer />
	</Site>
)


Layout.propTypes = {
	children: PropTypes.func
}


export default Layout