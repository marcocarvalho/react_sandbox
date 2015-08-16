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
