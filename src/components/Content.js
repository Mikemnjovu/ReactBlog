import React, {Component} from 'react';
import './styles.css';
// import Composer from './Composer'


class Content extends Component {

	// constructor(){
	// 	super();
	// 	this.state ={
	// 		articleTitle: "Title of article",
	// 		articleStory: "thiis the story"
	// 	}
	// }

	render()
	{
		// const loop =() =>{
		// 	var doom;
		// 	var article;
		// 	for (article in articles){
		// 		doom += articles[article];
		// 	}
		// }
		// const {titleArticle} = loop()
		return(<div>
			<h3>{this.props.title}</h3>
			<p>{this.props.content}</p>
		</div>);
	}
}
export default Content;
