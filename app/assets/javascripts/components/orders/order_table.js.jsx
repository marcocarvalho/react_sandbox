var Row = React.createClass({
  render: function(){
    return (<div className="row">{this.props.children}</div>);
  }
});

var ColMd12 = React.createClass({
  render: function(){
    return (<div className="col-md-12">{this.props.children}</div>);
  }
});

var Panel = React.createClass({
  render: function(){
    return (<div className="panel panel-info">{this.props.children}</div>);
  }
});

Panel.Heading = React.createClass({
  render: function(){
    return (
      <div className="panel-heading">
        <h3 className="panel-title">{this.props.title}</h3>
      </div>
    );
  }
});

Panel.Body = React.createClass({
  render: function(){
    return (<div className="panel-body">{this.props.children}</div>);
  }
});

var OrderList = React.createClass({
  getInitialState: function() {
    return { orders: [], page: 1, per_page: 10, total_pages: 0, loading: true };
  },
  loadOrders: function(){
    $.ajax({
      // TODO: filtros
      url: '/orders.json',
      data: {
        page: this.state.page,
        per_page: this.state.per_page
      },
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ orders: data.orders, page: data.page, per_page: data.per_page, total_pages: data.total_pages, loading: false });
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function(){
    this.loadOrders();
  },
  render: function(){
    return (
      <Row>
        <ColMd12>
          <Panel>
            <Panel.Heading title="Pedidos" loading={this.state.loading} />
            <Panel.Body>
              <OrderList.Table orders={this.state.orders}></OrderList.Table>
            </Panel.Body>
          </Panel>
        </ColMd12>
      </Row>
    );
  }
});

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
