# Monash Automation Official Page

## Run in a container

```shell
docker build -t ma-home .
```

```shell
docker run -d --restart=always \
    --name monash-automation \
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

## DTL DNS

```shell
docker run -d --restart=always \
             --name coredns \
             -v ./coredns:/root \
             -p 53:53/udp \
             coredns/coredns:1.10.1 -conf /root/Corefile
```