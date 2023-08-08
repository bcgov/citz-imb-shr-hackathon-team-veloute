#!/bin/bash

# script to process either the DPIA app or api deployment config templates and deploy it to a given namespace

oc process -f /home/runner/work/citz-imb-shr-hackathon-team-veloute/citz-imb-shr-hackathon-team-veloute/openshift/templates/$DIR/$DC_TEMPLATE --namespace=$NAMESPACE \
    -p APPLICATION_NAME=$APPLICATION_NAME \
    -p LICENSE_PLATE=$LICENSE_PLATE \
    -p IMAGESTREAM=$IMAGESTREAM \
    -p ENVIRONMENT=$ENVIRONMENT | \
    oc apply -f -
