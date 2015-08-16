OrderList.Table = React.createClass({
  render: function() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Comprador</th>
            <th>qtd. itens</th>
            <th>Data</th>
            <th>Valor total</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.orders.map(function(order){
              return <OrderList.Table.Order key={order.orderId} {...order} />
            })
          }
        </tbody>
        </table>
    );
  }
});

OrderList.Table.Order = React.createClass({
  propTypes:{
    orderId: React.PropTypes.number.isRequired,
    buyer: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    total: React.PropTypes.number.isRequired
  },

  render: function(){
    return (
      <tr>
        <td>{this.props.orderId}</td>
        <td>{this.props.buyer}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.date}</td>
        <td>{this.props.total}</td>
      </tr>
    );
  }
});
