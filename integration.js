let Logger;
const _ = require('lodash');
const configJson = require('./config/config.json');
const configJs = require('./config/config.js');

const substitutionRegex = /{{([.a-zA-Z12456|\s]+)}}/gi;

const regexes = {
  url: /{{URL}}/gi,
  ip: /{{IP}}/gi,
  ipv4: /{{IPV4}}/gi,
  ipv6: /{{IPV6}}/gi,
  domain: /{{DOMAIN}}/gi,
  email: /{{EMAIL}}/gi,
  md5: /{{MD5}}/gi,
  sha1: /{{SHA1}}/gi,
  sha256: /{{SHA256}}/gi,
  hash: /{{HASH}}/gi,
  cve: /{{CVE}}/gi,
  ipv4cidr: /{{IPV4CIDR}}/gi,
  entity: /{{ENTITY}}/gi
};

const urlOptions = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8', 'url9', 'url10'];

let customTypes = [];

function startup(logger) {
  Logger = logger;
  if (Array.isArray(configJson.customTypes)) {
    customTypes = configJson.customTypes;
  } else if (Array.isArray(configJs.customTypes)) {
    customTypes = configJs.customTypes;
  }

  customTypes.forEach((type) => {
    type.urlMatchRegex = new RegExp(`{{custom\.${type.key}}}`, 'gi');
  });
}

function doLookup(entities, options, cb) {
  let lookupResults = [];

  entities.forEach((entity) => {
    let searchObject = [];
    let urlPivots = [];

    urlOptions.forEach((urlOptionName) => {
      let urlOptionValue = options[urlOptionName].trim();
      if (urlOptionValue.length > 0) {
        let [name, url] = urlOptionValue.split('>');
        expandUrl(url).forEach((expandedUrl) => {
          let formattedUrl = formatUrl(entity, expandedUrl);
          Logger.trace({expandedUrl, formattedUrl}, 'Expanded and Formatted URL');
          if (formattedUrl) {
            urlPivots.push({
              name: name.trim(),
              url: formattedUrl,
              description: options[urlOptionName + 'Description']
            });
          }
        });
      }
    });

    if (urlPivots.length === 0) {
      // skip this entity as there are no searches configured for the entity type
      return;
    }

    lookupResults.push({
      entity: entity,
      data: {
        summary: ['Expand to Execute a URL Pivot Search'],
        details: {
          urlPivots
        }
      }
    });
  });

  Logger.trace({ lookupResults: lookupResults }, 'Lookup Results');

  cb(null, lookupResults);
}

function expandUrl(url) {
  const expandedUrls = [];
  let matches = url.matchAll(substitutionRegex);

  for (const match of matches) {
    let captureGroup = match[1];
    if (captureGroup.includes('|')) {
      const types = captureGroup.split('|');
      types.forEach((type) => {
        expandedUrls.push(url.replace(substitutionRegex, `{{${type.trim()}}}`));
      });
    }
  }

  if (expandedUrls.length === 0) {
    expandedUrls.push(url.trim());
  }

  return expandedUrls;
}

function formatUrl(entity, url) {
  let urlCopy = url;

  if (entity.isIPv4) {
    urlCopy = urlCopy.replace(regexes.ipv4, entity.value);
  }
  if (entity.isIPv6) {
    urlCopy = urlCopy.replace(regexes.ipv6, entity.value);
  }
  if (entity.isIPv4CIDR) {
    urlCopy = urlCopy.replace(regexes.ipv4cidr, entity.value);
  }
  if (entity.isIP) {
    urlCopy = urlCopy.replace(regexes.ip, entity.value);
  }
  if (entity.isDomain) {
    urlCopy = urlCopy.replace(regexes.domain, entity.value);
  }
  if (entity.isEmail) {
    urlCopy = urlCopy.replace(regexes.email, entity.value);
  }
  if (entity.isMD5) {
    urlCopy = urlCopy.replace(regexes.md5, entity.value);
  }
  if (entity.isSHA1) {
    urlCopy = urlCopy.replace(regexes.sha1, entity.value);
  }
  if (entity.isSHA256) {
    urlCopy = urlCopy.replace(regexes.sha256, entity.value);
  }
  if (entity.isHash) {
    urlCopy = urlCopy.replace(regexes.hash, entity.value);
  }
  if (entity.types.indexOf('cve') >= 0) {
    // Many CVE lookup links require the CVE to be in uppercase so we do that here
    urlCopy = urlCopy.replace(regexes.cve, entity.value.toUpperCase());
  }
  if (entity.isURL) {
    urlCopy = urlCopy.replace(regexes.url, entity.value);
  }
  if (customTypes.length > 0) {
    customTypes.forEach((type) => {
      if (entity.types.indexOf(`custom.${type.key}`) >= 0) {
        urlCopy = urlCopy.replace(type.urlMatchRegex, entity.value);
      }
    });
  }

  urlCopy = urlCopy.replace(regexes.entity, entity.value);

  if (urlCopy !== url) {
    return urlCopy;
  }
}

function validateOptions(options, cb) {
  let errors = [];
  if (options.url1.value && !_.includes(options.url1.value, '>')) {
    errors.push({
      key: 'url1',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url2.value && !_.includes(options.url2.value, '>')) {
    errors.push({
      key: 'url2',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url3.value && !_.includes(options.url3.value, '>')) {
    errors.push({
      key: 'url3',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url4.value && !_.includes(options.url4.value, '>')) {
    errors.push({
      key: 'url4',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url5.value && !_.includes(options.url5.value, '>')) {
    errors.push({
      key: 'url5',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url6.value && !_.includes(options.url6.value, '>')) {
    errors.push({
      key: 'url6',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url7.value && !_.includes(options.url7.value, '>')) {
    errors.push({
      key: 'url7',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url8.value && !_.includes(options.url8.value, '>')) {
    errors.push({
      key: 'url8',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url9.value && !_.includes(options.url9.value, '>')) {
    errors.push({
      key: 'url9',
      message: 'You must provide a > before the URL'
    });
  } else if (options.url10.value && !_.includes(options.url10.value, '>')) {
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
  startup: startup
};
