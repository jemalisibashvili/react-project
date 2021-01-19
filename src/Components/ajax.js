import React from 'react';
import '../App.css';




  class ajax extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      Items: [],
      isLoaded: false
    }
	}
	componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=12')
      .then(response => response.json())
      .then(json => {
				this.setState({
                    isLoaded : true,
					Items:json
				})
			});
  }
  
	render() {    
        const {isLoaded, Items} = this.state;  
        if (!isLoaded){
            return <div>
                loading...
            </div>
        }
        else {
		return (
			<div className={"ajax2"}>
               {Items.map(Item =>(
                    <div key={Item.id}>
                        <h2 className={"ajaxname"}>from - {Item.email}</h2>
                        <h4>{Item.name}</h4>
                        <h4 style={{fontStyle:"italic" }}>"{Item.body}"</h4>
                    </div>
                ))}
			</div>
        )
        }
	}
}
export default ajax;