# Learning Tech Craft CMS Starter Template

Simple craft cms starter template fully responsive, built with Petite Vue, ViteJS and Twig Components (like Laravel Blade Components but for twig).

## Start
```
composer create-project vendor/name path --repository-url=
```

Complelete the setup or edit your manually update your `.env` file to match your configuration. To manually install craft run this command.

```
php craft install/craft 
```

After installing craft install the vite plugin, then you can install dependencies and start vite dev server.
```
php craft plugin/install vite
npm install
npm run dev
```

If your environment is dev, the vite plugin will try to access the dev server, in production the vite plugin will try to access compiled assets. More info at [https://nystudio107.com/docs/vite/](https://nystudio107.com/docs/vite)

## Macros
- Forms
- Image
- Menu
- Image
- Pagination
- Title

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

The MIT License (MIT). Please see [License File](LICENSE) for more information.
