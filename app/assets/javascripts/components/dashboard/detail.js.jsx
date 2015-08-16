var Detail = React.createClass({
  handleOrderChange: function(evt, orderId) {
    var state = this.state;
    state.orderId = orderId;
    this.setState(state, this.loadOrder);
  },
  handleBuyerChange: function(evt, buyerId) {
    var state = this.state;
    state.buyerId = buyerId;
    state.buyer.buyerId = buyerId;
    this.setState(state, this.loadBuyer);
  },
  componentDidMount: function(){
    $(document).on('Order::Selected', this.handleOrderChange);
    $(document).on('Buyer::Selected', this.handleBuyerChange);
  },
  componentWillUnmount: function(){
    $(document).off('Order::Selected', this.handleOrderChange);
    $(document).off('Buyer::Selected', this.handleBuyerChange);
  },
  getInitialState: function(){
    return { items:[], activeTab: 'items', buyer: {}, buyerId: null, orderId: null };
  },
  loadBuyer: function(){
    if(this.state.buyerId == null) return;
    $.ajax({
      // TODO: filtros
      url: '/buyers/'+ this.state.buyerId +'.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        var state = this.state;
        state.buyer = data;
        this.setState(state);
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.buyerId, status, err.toString());
      }.bind(this)
    });
  },
  loadOrder: function(){
    if(this.state.orderId == null) return;
    $.ajax({
      // TODO: filtros
      url: '/orders/'+ this.state.orderId +'/items.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        var state = this.state;
        state.items = data.items;
        this.setState(state);
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.orderId, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    var tabs = [
      {
        name: 'items',
        label: 'Itens',
        active: true,
      },
      {
        name: 'buyer',
        label: 'Comprador'
      }
    ];
    return (
      <ColMd size="6">
        <Panel.Success>
          <Panel.Body.Tabbable tabs={tabs} items={this.state.items} buyer={this.state.buyer} />
        </Panel.Success>
      </ColMd>
    );
  }
});
