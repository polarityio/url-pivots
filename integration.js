function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach(entity => {
    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to Execute Search'],
        details: {
          entity: entity.value
        }
      }
    });
  });
  cb(null, lookupResults);
}

module.exports = {
  doLookup: doLookup
};
