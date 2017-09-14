var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./analytics');
for (var i = 0; i < files.length; i++) {
    load(files[i].name);
}

provDb.analytics.drop();

var records = [];

records = records.concat(filebeatTemplates);
records = records.concat(mappings);
records = records.concat(metricbeatDashboards);
records = records.concat(metricbeatSearches);
records = records.concat(metricbeatVisuals);
records = records.concat(metricbeatTemplates);
records = records.concat(nginxDashboardFilebeat);
records = records.concat(settings);
records = records.concat(nginxVisualsFilebeat);

provDb.analytics.insert(records);
