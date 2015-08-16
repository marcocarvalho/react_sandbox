Detail.Buyer = React.createClass({
  // propTypes:{
  //   buyerId: React.PropTypes.number,
  //   name: React.PropTypes.string,
  //   address: React.PropTypes.string,
  //   city: React.PropTypes.string,
  //   email: React.PropTypes.string,
  //   updatedAt: React.PropTypes.string
  // },
  render: function() {
    return (
      <table className="table table-striped table-hover">
        <tr>
          <th>#</th>
          <td>{this.props.buyerId}</td>
        </tr>
        <tr>
          <th>Nome</th>
          <td>{this.props.name}</td>
        </tr>
        <tr>
          <th>Endereço</th>
          <td>{this.props.address}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{this.props.city}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{this.props.email}</td>
        </tr>
        <tr>
          <th>Ult.Atualização</th>
          <td>{this.props.updatedAt}</td>
        </tr>
      </table>
    );
  }
});
