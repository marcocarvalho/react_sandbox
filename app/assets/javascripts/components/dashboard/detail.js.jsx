var Detail = React.createClass({
  handleOrderChange: function(evt, orderId) {
    console.log('Order::Selected ' + orderId);
  },
  handleBuyerChange: function(evt, buyerId) {
    console.log('Order::Selected ' + buyerId);
  },
  componentDidMount: function(){
    $(document).on('Order::Selected', this.handleOrderChange);
    $(document).on('Buyer::Selected', this.handleBuyerChange);
  },
  componentWillUnmount: function(){
    $(document).off('Order::Selected', this.handleOrderChange);
    $(document).off('Buyer::Selected', this.handleBuyerChange);
  },
  render: function(){
    var tabs = [
      {
        name: 'items',
        label: 'Itens',
        active: true
      },
      {
        name: 'buyer',
        label: 'Comprador'
      }
    ];
    return (
      <ColMd size="6">
        <Panel.Success>
          <Panel.Body.Tabbable>
            <Panel.Body.Tabbable.Tabs tabs={tabs} />
            <div className="tab-content">
              <div className="tab-pane active" id="home" role="tabpanel">
                Itens 
              </div>
              <div className="tab-pane" id="profile" role="tabpanel">
                Comprador 
              </div>
            </div>
          </Panel.Body.Tabbable>
        </Panel.Success>
      </ColMd>
    );
  }
});
