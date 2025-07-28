FROM node:20-alpine

WORKDIR /app

# Copy package.json and yarn.lock first to leverage Docker cache
COPY package.json yarn.lock ./
RUN corepack enable

# Install dependencies
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose the port Storybook runs on
EXPOSE 5555

# Command to run Storybook
CMD ["yarn", "dev", "--host", "0.0.0.0", "--ci"]
