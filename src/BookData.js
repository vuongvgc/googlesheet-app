import React from 'react'
import Tabletop from 'tabletop'
function List(props) {
    const bookValue = props.value
    return(
    <li>{bookValue["name"]} -{bookValue["date"]}</li>
    )
}
class BookData extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount(){
        this.setState({
            data: {}
        })
        Tabletop.init({
            key:"1wo3LS-8khvaPLVo85sn_lOW6ca7duF5JlP3QNHwbtRw",
            simpleSheet: true
        })
        .then(data => {
            this.setState({
                data: data
            })
        })
    }
    render(){
        const book= Array.from(this.state.data);
        const ListItem = book.map(el => {
            return <List key={el.name.toString()} value={el} />
        })
        
        return(
            <div>
                <ul>
                    {ListItem}
                </ul>
            </div>

        )
    }
}
export default BookData;