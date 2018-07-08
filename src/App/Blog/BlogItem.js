import React from 'react'
import BlogNav from './Shared/BlogNav'
import BlogContent from './Shared/BlogContent'

const BlogItem = (props) => (
	<div className="box">
		<BlogContent limit={150} {...props}>
			<BlogNav date={props.date} to={{
				pathname: `/blog/${props.path}`,
				state: {props}
			}} status={props.status} />
		</BlogContent>		
	</div>
)


export default BlogItem