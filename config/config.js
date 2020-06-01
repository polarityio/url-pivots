module.exports = {
    name: "SIEM Pivot",
    acronym: "SIEM",
    entityTypes: ['IPv4', 'domain', 'hash', 'email'],
    block: {
        component: {
            file: "./components/pivot-block.js"
        },
        template: {
            file: "./templates/pivot-block.hbs"
        }
    },
    logging:{
        level: 'trace'
    }, options: [
        {
        key: 'url1',
        name: 'SIEM Pivot Search 1',
        description:'Search you want to perform, replace the url below with the search that users can run. The {{ENTITY}} is the information that will get passed into the search. Name- is the name of the search that will be occuring, please ensure the name of the search ends with "-"',
        default: 'GoogleExample-https://google.com/{{ENTITY}}',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url2',
        name: 'SIEM Pivot Search 2',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url3',
        name: 'SIEM Pivot Search 3',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url',
        name: 'SIEM Pivot Search 4',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url4',
        name: 'SIEM Pivot Search 5',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url5',
        name: 'SIEM Pivot Search 6',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url6',
        name: 'SIEM Pivot Search 7',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url7',
        name: 'SIEM Pivot Search 8',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url8',
        name: 'SIEM Pivot Search 9',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url9',
        name: 'SIEM Pivot Search 10',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        },
        {
        key: 'url10',
        name: 'SIEM Pivot Search 11',
        description:'Search you want to perform',
        default: '',
        type: 'text',
        userCanEdit: false,
        adminOnly: true
        }
    ]
    
};
