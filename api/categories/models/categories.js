'use strict';
const axios = require("axios");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterCreate(data) {
            const url = "https://api.github.com/repos/shelleyphant/elowen/actions/workflows/rebuild-on-publish.yml/dispatches";
        
            const token = process.env.GITHUB_AUTH;
        
            const headers = {
                Authorization: `token ${token}`,
                "Content-Type": "application/json",
                Accept: "application/vnd.github.v3+json",
            };
            const body = {
                ref: 'main'
            };
        
            const axiosResult = await axios.post(
                url,
                { event_type: "created" },
                { headers },
                { body }
            );
        },
    },
};
