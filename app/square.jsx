
var React = require('react');

var Square = React.createClass({

    clickHandler: function (event, id) {
	this.props.clickHandler(event, id);
    },

    render: function () {
        //	    console.log('render sq', this.props.x, this.props.y, this.props.type);
        var classString = 'square ' + this.props.type;
        return (
            <li className={classString} onClick={this.clickHandler}></li>
        );
    }

});

module.exports = Square;