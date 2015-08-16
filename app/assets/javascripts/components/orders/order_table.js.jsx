var OrderTable = React.createClass({
  getInitialState: function() {
    return { orders: [] };
  },
  loadOrderTable: function(){
    $.ajax({
      // TODO: filtros
      url: '/orders.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ orders: data.orders });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadOrderTable();
  },
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
            this.state.orders.map(function(order){
              return <OrderTable.Order key={order.orderId} {...order} />
            })
          }
        </tbody>
        </table>
    );
  }
});

OrderTable.Order = React.createClass({
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
