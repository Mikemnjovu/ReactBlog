import React,{Component} from 'react';

class ContentComposer extends Component{
  constructor(props) {
    super(props);
    this.state={
      title:"title",
      content:"content here goes"
    }
  }

  render(){
    const onSubmit = (e) =>	{
      e.preventDefault();
      this.props.onArticleDataReady(this.state.titleArticle,this.state.article);
    }
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value})
    };
    return(
      <form onSubmit={onSubmit} className='composer'>
  			<hr></hr>
  			<input
          type='text'
          id='title'
          className='text-title'
          name='titleArticle'
          placeholder='Title'
          onChange={handleInputChange} />
  			<br></br>
  			<textarea
          className='text-article'cols="100"
          rows="20"
          id='article'
          name='article'
          onChange={handleInputChange} />
  			<br></br>
  			<button className='btn' value="Publish" type="submit">
  				Publish
  			</button>
		</form>)
  }
}

export default ContentComposer;
