var Pagination = React.createClass({
  handleClick: function(i) {
    this.props.onPageChange(i);
  },
  pages: function(){
    var arr = [];
    // Javascript sendo javascript:
    // 5 + 5 == 55 :P
    // 5 * 1 + 5 = 10 :P
    var min = this.props.page * 1 - 5;
    var max = this.props.page * 1 + 5;

    if(min < 1) min = 1;
    if(max > this.props.maxPages) max = this.props.maxPages;
    if(this.props.page <= 4) max = 10;

    for(i = min; i <= max; i++){
      arr.push(<Pagination.Item key={i} page={i} isCurrentPage={this.props.page == i} click={this.handleClick} />);
    }
    return arr;
  },
  previousPage: function(){
    var pp = this.props.page - 1;
    if(pp < 1) pp = 1;
    return pp;
  },
  nextPage: function(){
    var np = this.props.page + 1;
    if(np > this.props.maxPages) np = this.props.maxPages;
    return np;
  },
  render: function(){
    var pages = []
    return (
      <Row>
        <ColMd12>
          <ul className="pagination pull-right no-margin-pagination">
            <Pagination.Previous page={this.previousPage()} click={this.handleClick} />
            { this.pages() }
            <Pagination.Next page={this.nextPage()} click={this.handleClick} />
          </ul>
        </ColMd12>
      </Row>
    );
  }
});

Pagination.Previous = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    return (
      <li>
        <a href="#" aria-label="Previous" onClick={this.handleClick}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>      
    );
  }
});

Pagination.Next = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    return (
      <li>
        <a href="#" aria-label="Next" onClick={this.handleClick}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>      
    );
  }
});

Pagination.Item = React.createClass({
  handleClick: function(evt){
    this.props.click(this.props.page);
    evt.preventDefault();
  },
  render: function(){
    var classes = '';
    if(this.props.isCurrentPage){
      classes = 'active';
    }
    return (
      <li className={classes}><a href="#" onClick={this.handleClick}>{this.props.page}</a></li>
    );
  }
});
