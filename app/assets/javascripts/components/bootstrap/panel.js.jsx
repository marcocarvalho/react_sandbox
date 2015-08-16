var Panel = React.createClass({
  render: function(){
    return (<div className="panel panel-info">{this.props.children}</div>);
  }
});

Panel.Success = React.createClass({
  render: function(){
    return (<div className="panel panel-success">{this.props.children}</div>);
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

Panel.Body.Tabbable = React.createClass({
  render: function(){
    return (<div className="panel-body tabbable">{this.props.children}</div>);
  }
});

Panel.Body.Tabbable.Tabs = React.createClass({
  render: function(){
    tabs = this.props.tabs.map(
      function(t) {
        return (<Panel.Body.Tabbable.Tabs.Tab {...t} />)
      }
    );

    return (
      <ul className="nav nav-tabs" role="tablist">
        { tabs }
      </ul>
    );
  }
});

// Panel.Body.Tabbable.TabContent = React.createClass({
//   render: function(){
//     return (
//       this.props.tabs.map(
//       function(t) {
//         return (<Panel.Body.Tabbable.Tabs.Tab {...t} />)
//       }
//     );
//   }
// });


Panel.Body.Tabbable.Tabs.Tab = React.createClass({
  render: function(){
    var classes = '';
    var href = '#' + this.props.name;
    if(this.props.active){
      classes = 'active';
    }
    return (
      <li className={classes} role="presentation">
        <a aria-controls={this.props.name} data-toggle="tab" href={href} role="tab">
          {this.props.label}
        </a>
      </li>      
    );
  }
});

Panel.Footer = React.createClass({
  render: function(){
    return (<div className="panel-footer">{this.props.children}</div>);
  }
});
