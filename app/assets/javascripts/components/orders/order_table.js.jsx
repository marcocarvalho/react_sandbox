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
    var classes = 'fa fa-refresh fa-spin';
    if(!this.props.loading){
      classes = classes + ' hidden';
    }
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className={classes}></i>
          &nbsp;
          {this.props.title}
        </h3>
      </div>
    );
  }
});

Panel.Body = React.createClass({
  render: function(){
    return (<div className="panel-body">{this.props.children}</div>);
  }
});

Panel.Footer = React.createClass({
  render: function(){
    return (<div className="panel-footer">{this.props.children}</div>);
  }
});

var Pagination = React.createClass({
  handleClick: function(i) {
    this.props.onPageChange(i);
  },
  pages: function(){
    var arr = [];
    // Javascript sendo javascript:
    // 5 + 5 == 55 :P
    // 5 * 1 + 5 = 10 :P
    var min = this.props.page * 1 - 5;
    var max = this.props.page * 1 + 5;

    if(min < 1) min = 1;
    if(max > this.props.maxPages) max = this.props.maxPages;
    if(this.props.page <= 4) max = 10;

    for(i = min; i <= max; i++){
      arr.push(<Pagination.Item key={i} page={i} isCurrentPage={this.props.page == i} click={this.handleClick} />);
    }
    return arr;
  },
  previousPage: function(){
    var pp = this.props.page - 1;
    if(pp < 1) pp = 1;
    return pp;
  },
  nextPage: function(){
    var np = this.props.page + 1;
    if(np > this.props.maxPages) np = this.props.maxPages;
    return np;
  },
  render: function(){
    var pages = []
    return (
      <Row>
        <ColMd12>
          <ul className="pagination pull-right no-margin-pagination">
            <Pagination.Previous page={this.previousPage()} click={this.handleClick} />
            { this.pages() }
            <Pagination.Next page={this.nextPage()} click={this.handleClick} />
          </ul>
        </ColMd12>
      </Row>
    );
  }
});

Pagination.Previous = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    return (
      <li>
        <a href="#" aria-label="Previous" onClick={this.handleClick}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>      
    );
  }
});

Pagination.Next = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    return (
      <li>
        <a href="#" aria-label="Next" onClick={this.handleClick}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>      
    );
  }
});

Pagination.Item = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    var classes = '';
    if(this.props.isCurrentPage){
      classes = 'active';
    }
    return (
      <li className={classes}><a href="#" onClick={this.handleClick}>{this.props.page}</a></li>
    );
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
  handlePageChange: function(page){
    var st = this.state;
    st.page = page;
    st.loading = true;
    this.setState(st);
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
            <Panel.Footer>
              <Pagination onPageChange={this.handlePageChange} maxPages={this.state.total_pages} page={this.state.page} />
            </Panel.Footer>
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
