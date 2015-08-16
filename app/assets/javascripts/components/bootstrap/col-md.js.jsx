var ColMd = React.createClass({
  render: function(){
    var colWith = 'col-md-' + this.props.size
    return (<div className={colWith}>{this.props.children}</div>);
  }
});
