cd `dirname $0`

DOCKER_BUILDKIT=1 docker build ../../ -f Dockerfile -t kojiroueda/ssr:latest
