var React = require('react');
var reactDom = require('react-dom');
var _ = require('lodash');
var redux = require('redux');
var Provider = require('react-redux').Provider;
var connect = require('react-redux').connect;
var Pathfinder = require('../pathfinder.jsx');
var actions = require('../actions/index');
var initialState = require('../constants/initialState');
var configureStore = require('../stores/index');
var actions = require('../actions/index');

var App = React.createClass({
    render: function () {
        var actions = this.props.actions;
        return (
            <div>
    	        <Pathfinder state={initialState} actions={actions} />
            </div>
        );
    }
});


App.propTypes = {
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        angus: state
    }
};

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(actions, dispatch)
    }
};

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

