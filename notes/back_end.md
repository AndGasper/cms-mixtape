- Classic WP, if you specify just https://github.com/WordPress/WordPress, I think it tries to load all the things, and the command times out if unauthed.
- Seems like there's a bit of a debate about whether or not wordpress should consider itself a package, so it doesn't specify a `composer.json` 
```
{
    "type": "package",
    "package": {
        "name": "wordpress",
        "version": "5.2.1",
        "url": "https://github.com/WordPress/WordPress.git",
        "trunk-path": "trunk",
        "branches-path": "branches",
        "tags-path": "tags"
    }
}
```

- [WordPress Add `composer.json` File](https://core.trac.wordpress.org/ticket/23912)