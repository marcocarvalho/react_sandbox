Detail.TableItems = React.createClass({
  render: function() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>qtd. itens</th>
            <th>Preço</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(function(item){
              return <Detail.TableItems.Item key={item.itemId} {...item} />
            })
          }
        </tbody>
        </table>
    );
  }
});

Detail.TableItems.Item = React.createClass({
  propTypes:{
    itemId: React.PropTypes.number.isRequired,
    product: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.number.isRequired,
    price: React.PropTypes.number.isRequired,
    subTotal: React.PropTypes.number.isRequired
  },
  render: function(){
    return (
      <tr>
        <td>{this.props.itemId}</td>
        <td>{this.props.product}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.price}</td>
        <td>{this.props.subTotal}</td>
      </tr>
    );
  }
});
