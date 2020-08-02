import React, { Component } from 'react';
import './compcss.css';


export class ButtonList extends Component {

    constructor(props) {
		super(props)
		this.state = {
			listString: "",
			searchText: "",
			searchFilter: "",
			data: this.props.data,
			noResult: "no Results..."
		};
    }
    componentDidMount() {
		this.mounted = true;
		this.createList();
    }
    
    setStatesForSearchAndFilter() {
		this.setState({
			searchText: document.getElementById("search001").value,
			searchFilter: document.getElementById("search001").value,
		});
		this.filterList(document.getElementById("search001").value);
    }
    
    filterList(filterInput) {
		let filtered = [];
		let listFromState = this.state.data;
		if (filterInput === "" || filterInput === " " || filterInput === null) {
            for (let i = 0; i < listFromState.length; i++) {
					filtered[i] = listFromState[i];
			}

			filtered = filtered.sort();

			let mapped = filtered.map(name =>
				<li key={name[1]} type="button" className="list-group-item list-group-item-action " /*onClick={() => AutoFill({ name })}*/ name="buttons">
					{name[0]}
				</li>)

			this.setState({ listString: mapped })

		}
		else {
			for (let i = 0; i < listFromState.length; i++) {
				if (listFromState[i][0].toLowerCase().includes(filterInput.toLowerCase())) {
					filtered[i] = listFromState[i];
				}
			}

			filtered = filtered.sort();
			let mapped = "";
			if(filtered.length === 0){
				mapped =
					<li key="010" type="button" className="list-group-item list-group-item-action" /*onClick={() => AutoFill({ name })}*/ name="buttons">
						noResult
					</li>	
			}
			else{
		        mapped = filtered.map(name =>
				<li key={name[1]} type="button" className="list-group-item list-group-item-action" /*onClick={() => AutoFill({ name })}*/ name="buttons">
					{name[0]}
				</li>)
			}
			this.setState({ listString: mapped })

		}
	}


createList(){

    const dataForList = this.state.data;
    let dataList = [];

        for (var i = 0; i < dataForList.length; i++) {
            var obj = dataForList[i];
            dataList.push([obj[1], obj[0]]);
        }
        dataList = dataList.sort()
        let mapped = dataList.map(name =>
            <li key={name[0]} type="button" className="list-group-item list-group-item-action disableButtons" /*onClick={() => AutoFill({ name })}*/ name="buttons">
                {name[1]}
            </li>)

    this.setState({ listString: mapped })
    }

    render() {
		return (
			<>
            <form>
				<input className="searchWidth" value={this.state.searchText} type="name" name="search" id="search001" placeholder="Search..."
							onChange={e => this.setStatesForSearchAndFilter(e.target.value)} />
			</form>
            	<div className="list-group setHeight" id="listMapped">
					<ul>
					{this.state.listString}
					</ul>
				</div>

			</>
		);
	}
}