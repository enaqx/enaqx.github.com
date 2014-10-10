/** @jsx React.DOM */

var d3 = require('d3');
var _ = require('underscore');

var Chart = React.createClass({
  render: function() {
    return (
      <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
    );
  }
});

var Bar = React.createClass({
  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  onSelect: function(event) {
    alert(Math.round(this.props.height/8.33));
  },

  render: function() {
    return (
      <rect onClick={this.onSelect} fill={this.props.color}
        width={this.props.width} height={this.props.height} 
        x={this.props.offset} y={this.props.availableHeight - this.props.height} transform = "rotate(90 0 0) translate(0 -100)"/>
    );
  }
});

var DataSeries = React.createClass({
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    }
  },

  render: function() {
    var props = this.props;

    var yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);

    var bars = _.map(this.props.data, function(point, i) {
      return (
        <Bar  
          height={yScale(point)}
          width={xScale.rangeBand()} 
          offset={xScale(i)} 
          availableHeight={props.height} 
          color={props.color} 
          key={i} />
      )
    });

    return (
      <g>{bars}</g>
    );
  }
});

var BarChart = React.createClass({
  render: function() {
    return (
      <div>
      <div>Click on the bar for index</div>
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={[ 3, 6, 12, 4, 8 ]} width={this.props.width} height={this.props.height} color="gray" />
      </Chart>
      </div>
    );
  }
});

module.exports = BarChart;