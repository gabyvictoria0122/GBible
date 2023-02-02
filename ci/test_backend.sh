#!/bin/bash
export COMPOSE_PROJECT_NAME=gbible_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run gbible unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
