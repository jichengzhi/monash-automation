# Monash Automation Official Page

## Run in a container

```shell
docker build -t ma-home .
```

```shell
docker run \
    -it \
    --name monash-automation \
    --rm \
    -p 4173:4173 \
    ma-home
```

## Dependencies

* `React js`
* `Tailwind CSS`
* `cva` and `twjoin` for joining CSS classes

## Contribute

* fork
* install `nodejs` and `npm`
* run `npm install`
* run `npm run dev`
* create and work on a new branch
* submit a pull request