import React, { Component } from "react";
import PropTypes from 'prop-types'
import FeedScreen from "./presenter";
import { Images } from "react-native";
import NavButton from "../../components/NavButton"



class Container extends Component {
    static propTypes = {
        feed: PropTypes.array,
        getFeed: PropTypes.func.isRequired
    }
    state = {
        isFetching: true
    };
    componentWillReceiveProps = nextProps => {
        if (nextProps.feed) {
            this.setState({
                isFetching: false
            })
        }
    }

    _refresh = () => {
        const { getFeed } = this.props;
        this.setState({
            isFetching: true
        })
        getFeed()
    }



    render(){
        return <FeedScreen {...this.props}  {...this.state}  refresh={this._refresh} />
    }
}

export default Container;