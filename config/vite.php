<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('DEV_MODE'),
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerPublic' => 'http://localhost:8080/',
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
    // 'includeReactRefreshShim' => false,
    'criticalPath' => '@webroot/dist/critical-css',
    'criticalSuffix' => '_critical.min.css',
];