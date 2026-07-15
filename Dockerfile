FROM node:24.13-alpine

# Serves the assembled static output; baked into the image (not under /app,
# so it survives the docker-compose bind mount described below).
RUN npm install -g serve@14.2.6

EXPOSE 5555

# TEMPORARY: skip install/build entirely and just serve a dummy page, to
# isolate whether OOM is coming from yarn install / turbo build. Restore
# the full install + build-storybook CMD once diagnosed.
RUN mkdir -p /srv/storybooks && \
    printf '%s\n' \
      '<!doctype html>' \
      '<html>' \
      '<head><title>Lido UI Storybooks (dummy)</title></head>' \
      '<body>' \
      '<h1>Dummy placeholder page</h1>' \
      '</body>' \
      '</html>' \
      > /srv/storybooks/index.html

CMD ["serve", "-l", "5555", "/srv/storybooks"]
