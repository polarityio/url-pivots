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
      let splitItems = item.split(">");
      if(splitItems[0] && splitItems[1]){
        searchObject.push({name: splitItems[0], urls: splitItems[1]});
      }
    });

    
    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to Execute a URL Pivot Search'],
        details: {
          searchObject: searchObject
        }
      }
    });
  });
  Logger.trace({lookupResults:lookupResults}, "Logging lookup results");
  cb(null, lookupResults);
}

function validateOptions(options, cb) {
  let errors = [];
  if (options.url1.value && !_.includes(options.url1.value, '>')){
    errors.push({
      key: 'url1',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url2.value && !_.includes(options.url2.value, '>')){
    errors.push({
      key: 'url2',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url3.value && !_.includes(options.url3.value, '>')){
    errors.push({
      key: 'url3',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url4.value && !_.includes(options.url4.value, '>')){
    errors.push({
      key: 'url4',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url5.value && !_.includes(options.url5.value, '>')){
    errors.push({
      key: 'url5',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url6.value && !_.includes(options.url6.value, '>')){
    errors.push({
      key: 'url6',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url7.value && !_.includes(options.url7.value, '>')){
    errors.push({
      key: 'url7',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url8.value && !_.includes(options.url8.value, '>')){
    errors.push({
      key: 'url8',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url9.value && !_.includes(options.url9.value, '>')){
    errors.push({
      key: 'url9',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url10.value && !_.includes(options.url10.value, '>')){
    errors.push({
      key: 'url10',
      message: 'You must provide a > before the URL'
    });
  }
  cb(null, errors);
} 

module.exports = {
  doLookup: doLookup,
  validateOptions: validateOptions,
  startup:startup
};
