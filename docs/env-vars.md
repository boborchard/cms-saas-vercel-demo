[Back to readme](../README.md)
## Environment Variables
The frontend can be configured using the following environment variable. The default configuration leverages templates, to set default values based upon other environment variables. The template \${SITE_DOMAIN} will be replaced with the value for SITE_DOMAIN.

### General settings
| Variable | Default value | Usage |
| --- | --- | --- |
| DXP_URL | YOUR_CMS_DOMAIN_HERE | Put the URL of the CMS instance here, without a path. For example: https://example.cms.optimizely.com/ |
| SITE_DOMAIN | ${VERCEL_BRANCH_URL} | The domain where the site is running, this will be used to configure the publishing webhook on Optimizely Graph during the build process. The default value takes a stable URL from Vercel. See the [Vercel documentation](https://vercel.com/docs/projects/environment-variables/system-environment-variables)
| FRONTEND_PUBLISH_TOKEN | optly-PUBLISH_TOKEN | A token that makes it more difficult to flush the site cache. It must be provided to the /api/content/publish endpoint and is included by default when the webhook for publishing is registered. |

### Optimizely Graph
These settings are available on the Dashboard of the CMS, in the "Render Content" section.
| Variable | Default value | Usage |
| --- | --- | --- |
| OPTIMIZELY_CONTENTGRAPH_GATEWAY | https://cg.optimizely.com | The address of the Optimizely Graph instance |
| OPTIMIZELY_CONTENTGRAPH_APP_KEY | YOUR-KEY-HERE | The App key for the Optimizely Graph instance |
| OPTIMIZELY_CONTENTGRAPH_SECRET | YOUR-SECRET-HERE | The Secret for the Optimizely Graph instance |
| OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY | YOUR-KEY-HERE | The Single key for the Optimizely Graph instance |
| OPTIMIZELY_CONTENTGRAPH_UPDATE_DELAY | 2000 | The amount of time (in miliseconds) the frontend should wait before refreshing, after the CMS has notified the frontend of a saved change. Increase this value if you often experience the frontend not updating after a change |

### Next Auth
The frontend comes with Next-Auth pre-integrated, this table lists the defaults that are being set by the frontend. The full list of supported variables is available from the [NextAuth.js documentation](https://next-auth.js.org/configuration/options#environment-variables)
| Variable | Default value |
| --- | --- |
| NEXTAUTH_URL | https://\${SITE_DOMAIN} |
| NEXTAUTH_SECRET | SECRET-\${SITE_DOMAIN}-\${DXP_URL}-\${NODE_ENV} |

### Debugging output
| Variable | Default value | Usage |
| --- | --- | --- |
| DXP_DEBUG | 0 | Set this value to "1" to enable verbose output of the frontend to aid in debugging
| QUERY_LOG | 0 | Set this value to "1" to write all GraphQL queries to the console output |

### Integration with other Optimizely products
| Variable | Default value | Usage |
| --- | --- | --- |
| OPTIMIZELY_DATAPLATFORM_ID |  | Set this value to the ID of the JavaScript tracker of your Optimizely Data Platform instance to enable tracking and activate the "Optimizely Data Platform Embed" block.