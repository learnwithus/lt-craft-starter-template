# Learning Tech Craft CMS Starter Template

Simple craft cms starter template fully responsive, built with Petite Vue, ViteJS and Twig Components (like Laravel Blade Components but for twig).

## How to Use
```
composer create-project vch/craft-starter-template name-of-site
```

The template will then automatically run the following commands:
- composer install
- php craft setup/welcome
- php craft plugin/install vite
**If you cancel out of this, you may need to rerun these commands**

After installing craft install the vite plugin, then you can install dependencies and start vite dev server.
```
npm install
npm run dev
```

If your environment is dev, the vite plugin will try to access the dev server, in production the vite plugin will try to access compiled assets. More info at [https://nystudio107.com/docs/vite/](https://nystudio107.com/docs/vite)

## Macros
- Image

## Components with [Twig Components](https://github.com/giorgiopogliani/twig-components)
- button


## Pages
- 404
- 503

## Partials (in _layoyts)
- favicon (with asset field in globals)
- footer
- header
- seo (ether/seo plugin)

## Extensions
added functions, available globally with a twig extension, you can add your own at `modules/extensions\UtilsExtension.php`


## Plugins

List of preinstalled plugins to solve common task when building a website.
``` 
craftcms/redactor 
ether/seo 
nystudio107/craft-vite
performing/twig-components 
```

## License

The MIT License (MIT)
