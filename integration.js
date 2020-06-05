let Logger;
const _ = require("lodash");

function startup(logger) {
  Logger = logger;
}


function doLookup(entities, options, cb) {
  let lookupResults = [];


  entities.forEach(entity => {
    let searchObject = [];
    let search = [];
    
    search.push(options.url1.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url2.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url3.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url4.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url5.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url6.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url7.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url8.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url9.replace(/{{ENTITY}}/, entity.value));
    search.push(options.url10.replace(/{{ENTITY}}/, entity.value));


    search.forEach(function(item){
      if(_.includes(item, '>')){
      let splitItems = item.split(">");
      if(splitItems[0] && splitItems[1]){
        searchObject.push({name: splitItems[0], urls: splitItems[1]});
      }
    } else {
        return {
          detail: "Incorrect URL Set up:", item 
        };
    }
    });

    
    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to Execute Search'],
        details: {
          searchObject: searchObject
        }
      }
    });
  });
  Logger.trace({lookupResults:lookupResults}, "Logging lookup results");
  cb(null, lookupResults);
}

module.exports = {
  doLookup: doLookup,
  startup:startup
};
