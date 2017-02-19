import React from 'react';
import ReactDOM from 'react-dom';

export default class Plist extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {"loading": false, "list": []};
      }

    componentDidMount() {
        this.setState({"firstView": true});
    }

    componentWillReceiveProps(nextPros) {
        let keyword = nextPros.keyword;
        this.setState({"loading": true, 'firstView': false});
        let url = `https://api.github.com/search/users?q=${keyword}`;
        $.get(url, function(data){
            this.setState({"loading": false, 'list': data.items});
        }.bind(this));
    }
    render() {
        const imgStyle = {
            width: '50px'
        }
        if(this.state.firstView){
            return(
                <h2>Enter name to search</h2>
            )
        }
        if(this.state.loading){
            return(
                <h2>Loading result...</h2>
            )
        }else{
            if(this.state.list.length === 0){
                return(
                    <h2>No result.</h2>
                )
                //console.log(this.state.list);
            } else {
                return (
                    <div className="row">
                        {
                            this.state.list.map(people => {
                                return(
                                    <div key={people.login} className="card">
                                        <img src={people.avatar_url} style={imgStyle} />
                                        <p className="card-text">
                                            {people.login}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        }
    }
}