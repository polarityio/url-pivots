module.exports = {
  name: 'URL Pivot',
  acronym: 'URLP',
  entityTypes: ['IPv4', 'IPv6', 'IPv4CIDR', 'MD5', 'SHA1', 'SHA256', 'domain', 'email', 'url', 'cve'],
  defaultColor: 'light-gray',
  block: {
    component: {
      file: './components/pivot-block.js'
    },
    template: {
      file: './templates/pivot-block.hbs'
    }
  },
  styles: ['styles/pivot.less'],
  logging: {
    level: 'info'
  },
  onDemandOnly: true,
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: ''
  },
  options: [
    {
      key: 'url1',
      name: '1) URL Pivot Search 1',
      description:
        'Search you want to perform.  Replace the URL below with the search that users can run. The string `{{ENTITY}}` will be replace by the looked up indicator.  You can also use a specific entity type such as `{{IPv4}}`, `{{hash}}`, or `{{cve}}`. You can "or" together multiple entity types with a "|" (e.g., `{{IP|domain}}`. Name> is the name of the search that will be occuring, please ensure the name of the search ends with ">"',
      default: 'GoogleExample>https://google.com/{{ENTITY}}',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url1Description',
      name: '1) URL Pivot Search 1 Description',
      description: 'Add an optional description to display for URL Pivot Search 1',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url2',
      name: '2) URL Pivot Search 2',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url2Description',
      name: '2) URL Pivot Search 2 Description',
      description: 'Add an optional description to display for URL Pivot Search 2',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url3',
      name: '3) URL Pivot Search 3',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url3Description',
      name: '3) URL Pivot Search 3 Description',
      description: 'Add an optional description to display for URL Pivot Search 3',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url4',
      name: '4) URL Pivot Search 4',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url4Description',
      name: '4) URL Pivot Search 4 Description',
      description: 'Add an optional description to display for URL Pivot Search 4',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url5',
      name: '5) URL Pivot Search 5',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url5Description',
      name: '5) URL Pivot Search 5 Description',
      description: 'Add an optional description to display for URL Pivot Search 5',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url6',
      name: '6) URL Pivot Search 6',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url6Description',
      name: '6) URL Pivot Search 6 Description',
      description: 'Add an optional description to display for URL Pivot Search 6',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url7',
      name: '7) URL Pivot Search 7',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url7Description',
      name: '7) URL Pivot Search 7 Description',
      description: 'Add an optional description to display for URL Pivot Search 7',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url8',
      name: '8) URL Pivot Search 8',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url8Description',
      name: '8) URL Pivot Search 8 Description',
      description: 'Add an optional description to display for URL Pivot Search 8',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url9',
      name: '9) URL Pivot Search 9',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url9Description',
      name: '9) URL Pivot Search 9 Description',
      description: 'Add an optional description to display for URL Pivot Search 9',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url10',
      name: '10) URL Pivot Search 10',
      description: 'Search you want to perform',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    },
    {
      key: 'url10Description',
      name: '10) URL Pivot Search 10 Description',
      description: 'Add an optional description to display for URL Pivot Search 10',
      default: '',
      type: 'text',
      userCanEdit: false,
      adminOnly: true
    }
  ]
};
