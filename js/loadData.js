function loadData(url, parserType, options) {
  var parser = {
    parser_type: parserType,
    parser_options: options,
    loadData: function(url) {
      return url;
    }
  };
   
  return parser.loadData(url);
}

var psr1 = loadData('mydata.csv', 'csv', { delimiter: ','});
var psr2 = loadData('mydata.json', 'json');

console.log(psr1);
console.log(psr2);
