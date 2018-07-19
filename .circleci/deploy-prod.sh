sh ./.circleci/install-aws.sh
sh ./.circleci/auth-aws.sh
sh ./.circleci/install-sentry-cli.sh
npm install
npm run build-prod
aws s3 sync ./build s3://app.mobiliti-dev.com/ --acl=public-read --delete --exclude '.git/*'

SLACK_WEBHOOK_URL=https://hooks.slack.com/services/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
PACKAGE_VERSION=v$(awk '/version/ { print $2 }' package.json | sed 's/[,"]//g')

sentry-cli releases finalize $PACKAGE_VERSION
curl -X POST -H 'Content-type: application/json' --data "{'text': 'DONE: *Subscriber UI $PACKAGE_VERSION* is now live in *PRODUCTION*'}" $SLACK_WEBHOOK_URL
