var Product = React.createClass({
  propTypes: {
    shortName: React.PropTypes.string,
    price: React.PropTypes.node
  },

  render: function() {
    return (
      <div class="product">
        <div>Short Name: {this.props.shortName}</div>
        <div>Price: {this.props.price}</div>
      </div>
    );
  }
});
