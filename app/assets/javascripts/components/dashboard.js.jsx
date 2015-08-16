var Dashboard = React.createClass({
  render: function(){
    return (
      <div>
        <Row>
          <Filter />
          <Detail />
        </Row>
        <Row>
          <OrderList />
        </Row>
      </div>
    );
  }
});
