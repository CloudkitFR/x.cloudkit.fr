FROM mongo:latest
 
RUN apt-get update \
    && apt-get install -y git build-essential \
    && git clone --depth=1 https://github.com/TylerBrock/mongo-hacker.git \
    && rm -rf ~/.mongorc.js \
    && cd mongo-hacker \
    && make install
 
CMD ["mongod", "-f", "/etc/mongod.conf"]