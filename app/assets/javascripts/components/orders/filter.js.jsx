var Filter = React.createClass({
  render: function(){
    return (
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              Filtros
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-5">
                  <label>De</label>
                </div>
                <div className="col-md-5">
                  <label>Até</label>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-2">
                  <label>Data</label>
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="date_ini" type="date" />
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="date_end" type="date" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-2">
                  <label>Valor</label>
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="money_ini" type="number" />
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="money_end" type="number" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-2">
                  <label>No. Itens </label>
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="itens_ini" type="number" />
                </div>
                <div className="col-md-5">
                  <input className="form-control" name="itens_end" type="number" />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-5 col-md-offset-7">
                  <button className="btn btn-primary pull-right" type="submit">Filtrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
