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


Interestingly enough, VSCode is telling me the plugin is actually a symbolic link?

```
WARNING: apt does not have a stable CLI interface. Use with caution in scripts.
```

```
E: Package 'php-cli' has no installation candidate
E: Package 'php-mbstring' has no installation candidate
```