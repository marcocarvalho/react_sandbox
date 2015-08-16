var Detail = React.createClass({
  render: function(){
    return (
      <div className="col-md-6">
        <div className="panel panel-success">
          <div className="panel-body tabbable">
            <ul className="nav nav-tabs" role="tablist">
              <li className="active" role="presentation">
                <a aria-controls="itens" data-toggle="tab" href="#itens" role="tab">Itens </a>
              </li>
              <li role="presentation">
                <a aria-controls="buyer" data-toggle="tab" href="#buyer" role="tab">Comprador </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="home" role="tabpanel">
                Itens 
              </div>
              <div className="tab-pane" id="profile" role="tabpanel">
                Comprador 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
