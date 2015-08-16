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
    // i18n?
    return (
      <ColMd size="12">
        <Panel>
          <Panel.Heading title="Pedidos" loading={this.state.loading} />
          <Panel.Body>
            <OrderList.Table orders={this.state.orders}></OrderList.Table>
          </Panel.Body>
          <Panel.Footer>
            <Pagination onPageChange={this.handlePageChange} maxPages={this.state.total_pages} page={this.state.page} />
          </Panel.Footer>
        </Panel>
      </ColMd>
    );
  }
});
