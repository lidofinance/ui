FROM node:24.13-alpine

WORKDIR /app

# Yarn workspaces need every package.json present to resolve the graph,
# so install after copying the full source rather than just the root
# manifest (installing against the root manifest alone leaves workspace
# packages under-linked, e.g. missing bins like `storybook`).
COPY . .
RUN corepack enable && \
    yarn install && \
    yarn cache clean

# Serves the assembled static output; baked into the image (not under /app,
# so it survives the docker-compose bind mount described below).
RUN npm install -g serve@14.2.6

# Built at image-build time and written outside /app (/srv/storybooks) so
# the output survives the deployment docker-compose.yml bind-mounting the
# host checkout over /app at container start. Note this means the served
# storybook reflects the source at image-build time, not the live mount.
RUN yarn turbo run build-storybook && \
    rm -rf /srv/storybooks && \
    mkdir -p /srv/storybooks/lido-ui /srv/storybooks/lido-landing-ui /srv/storybooks/lido-app-ui && \
    cp -r packages/lido-ui/storybook-static/. /srv/storybooks/lido-ui/ && \
    cp -r packages/lido-landing-ui/storybook-static/. /srv/storybooks/lido-landing-ui/ && \
    cp -r packages/lido-app-ui/storybook-static/. /srv/storybooks/lido-app-ui/ && \
    printf '%s\n' \
      '<!doctype html>' \
      '<html>' \
      '<head><title>Lido UI Storybooks</title></head>' \
      '<body>' \
      '<h1>Lido UI Storybooks</h1>' \
      '<ul>' \
      '<li><a href="lido-ui/">lido-ui</a></li>' \
      '<li><a href="lido-landing-ui/">lido-landing-ui</a></li>' \
      '<li><a href="lido-app-ui/">lido-app-ui</a></li>' \
      '</ul>' \
      '</body>' \
      '</html>' \
      > /srv/storybooks/index.html

EXPOSE 5555

CMD ["serve", "-l", "5555", "/srv/storybooks"]

