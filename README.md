# Transportation Performance Measures (TPM)
Federal legislation requires state departments of transportation, transit operators, and metropolitan planning organizations (MPOs) to establish and use a performance-based approach for transportation decision-making to achieve national transportation goals. This includes tracking performance measures, setting data-driven targets, and selecting projects to help meet those targets.

DVRPC has included descriptions of projects and their anticipated effects on achieving the established targets in the region's Long-Range Plan and the Pennsylvania and New Jersey Transportation Improvement Programs. The Federal Highway Administration has established three performance measure regulations for Roadway Safety, Bridge and Pavement Condition, and System Performance. The Federal Transit Administration has established performance measures for Transit Asset Management and Transit Safety.

## Development
This is a static webpage developed entirely in native HTML, CSS and Javascript. The only dependencies are from the build process. All resources are loaded locally. The bulk of the content will eventually be loaded via API/CDN once a pipeline is set up.

## Build Process
`npm run build`
* change `<script defer="defer" type="module" src="./js/index.js"></script>` to `<script defer type="text/javascript" src="bundle.js"></script>` from the head of `index.html`
* delete `<script src="bundle.js"></script>` from bottom of `index.html`
* copy files from build folder to staging folder