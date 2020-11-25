#!/bin/bash

## copy files 
rm -rf browser/data-sources/
rm -rf browser/dist/
rm -rf browser/tmp/

mkdir -p browser/data-sources/awslabs-open-data-registry
cp -R datasets browser/data-sources/awslabs-open-data-registry/

cd browser && npm run build && cd ..

#aws s3 ls s3://aws-new-pault/
aws s3 sync browser/dist/ s3://aws-new-pault/ --delete --acl public-read

