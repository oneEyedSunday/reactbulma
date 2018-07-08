import React from 'react'
import BlogNav from './Shared/BlogNav'
import BlogContent from './Shared/BlogContent'
import PageContent from './../Components/PageContent'

const BlogPost = ({
	location: {
		state: {
			props
		}
	}
}) => (
	<PageContent>
		<BlogNav date={props.date} to="/blog" status={props.status} />
		<BlogContent {...props} />
	</PageContent>
)

export default BlogPost