var Detail = React.createClass({
  handleOrderChange: function(evt, orderId) {
    console.log('Order::Selected ' + orderId);
  },
  handleBuyerChange: function(evt, buyerId) {
    this.setState({
      buyerId: buyerId,
      items: this.state.items,
      activeTab: this.state.activeTab,
      buyer: { buyerId: buyerId },
    }, this.loadBuyer);
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
    return { items:[], activeTab: 'items', buyer: {}, buyerId: null };
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
        console.log('loaded buyer');
        console.log(state);
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.buyerId, status, err.toString());
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
