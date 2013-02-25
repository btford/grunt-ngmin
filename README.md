# grunt-ngmin
Grunt task for [ngmin](https://github.com/btford/ngmin).

## Example Task Config

```javascript
grunt.initConfig({
  ngmin: {
    dist: {
      files: [{
        expand: true,
        cwd: 'app/scripts',
        src: '*.js',
        dest: 'out/scripts'
      }]
    }
  }
});
```

## License
BSD
