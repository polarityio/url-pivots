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
        level: 'info'
    }
};
