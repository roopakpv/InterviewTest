import React from 'react';
import { connect } from 'react-redux'
import { search } from '../actions'
import './css/styles.css';
import 'tailwindcss/dist/tailwind.css';
import mobile from '../Slices/Capture.PNG';
import back from '../Slices/Back.png';
import searchIcon from '../Slices/search.png';

class SearchBar extends React.Component {

    search() {
        this.props.search(this.inputvalue)
    }
    inputChange(e) {
        this.inputvalue = e.target.value;
    }
    render() {
        return (
            <div>
                <div className="bg-black searchbar">
                    <img className='mob' src={mobile} />
                    <div className='universal'>
                        <img className=' floatItLeft' src={back} />
                        <input className='mobInput' placeholder="Search Here" onChange={this.inputChange.bind(this)} />
                        <img className='floatIt' src={searchIcon} onClick={this.search.bind(this)} />
                    </div>
                </div>
                <div className='searchbargra' />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    search: (item) => dispatch(search(item))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)