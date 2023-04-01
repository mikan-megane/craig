#!/bin/sh

cd /app \
&& echo "entrypoint running..." \
&& echo "yarn install" \
&& yarn install \
&& echo "yarn prisma:generate" \
&& yarn prisma:generate \
&& echo "yarn build" \
&& yarn build \
&& echo "yarn prisma:deploy" \
&& yarn prisma:deploy