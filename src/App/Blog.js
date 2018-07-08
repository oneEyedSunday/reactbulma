import React from 'react'
import * as contentful from 'contentful'
import BlogItem from './Blog/BlogItem'
import PageHeader from './Components/PageHeader'

class Blog extends React.Component {
	state = {
		posts: []
	}

	client = contentful.createClient({
		space: 'qu10m4oq2u62',
		accessToken: 'f4a9f68de290d53552b107eb503f3a073bc4c632f5bdd50efacc61498a0c592a'
	})

	componentDidMount(){
		this.fetchPosts().then(this.setPosts);
	}

	fetchPosts = () => this.client.getEntries();

	setPosts = response => {
		this.setState({
			posts: response.items
		})
	}

	render(){
		return (
			<div>
				<PageHeader color="is-info" title="Code Blog">
					Your standard <strong>Javascript</strong> blog.
				</PageHeader>
				<br />
				{
					this.state.posts.map(({fields}, i) => <BlogItem key={i} {...fields} />)
				}
			</div>
		)
	}

}

export default Blog