SLACK_WEBHOOK_URL=https://hooks.slack.com/services/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
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_URL="https://github.com/mobiliti-inc/subscriber-ui/commit/$COMMIT_HASH"

curl -X POST -H 'Content-type: application/json' --data "{'text': 'STARTED: *Subscriber UI* is deploying to *STAGING* with commit hash $COMMIT_HASH ($COMMIT_URL)'}" $SLACK_WEBHOOK_URL

sh ./.circleci/install-aws.sh
sh ./.circleci/auth-aws.sh
npm install
npm run build-staging
aws s3 sync ./build s3://staging.app.mobiliti-dev.com/ --acl=public-read --delete --exclude '.git/*'

curl -X POST -H 'Content-type: application/json' --data "{'text': 'DONE: *Subscriber UI* is now live in *STAGING* with commit hash $COMMIT_HASH ($COMMIT_URL)'}" $SLACK_WEBHOOK_URL