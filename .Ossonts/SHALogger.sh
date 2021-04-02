#!/bin/bash
#Log every SHA for the CheckList file
#Open issue if late
#==================================
DEADLINE='2021-04-02 23:00:00'
EC_DEADLINE='2021-04-30 23:00:00'
EC_FILE='.Ossonts/EC.valid' # Only if recived valid notification via email/hub
#==================================
# EC invalid on Portfolios as best 10 of 12
#==================================
echo Deadine "$DEADLINE"
echo Repo "$GITHUB_REPOSITORY"
echo SHA "$GITHUB_SHA"
echo Actor "$GITHUB_ACTOR"

echo "GH prompt"
gh config set prompt disabled
gh config get prompt
echo "GH auth"
echo "$GITHUB_TOKEN" | gh auth login --with-token


URL_PREFIX="https://github.com/"
SHA_PREFIX="/tree/"
DATE=$(date +'%Y-%m-%d %H:%M:%S')
echo Date "$DATE"
DATE_S=$(date +%s)
echo Date "$DATE_S"

if test -f "$EC_FILE"; then
DEADLINE_S=$(date +%s -d "$EC_DEADLINE")
else
DEADLINE_S=$(date +%s -d "$DEADLINE")
fi


echo Deadine sec "$DEADLINE_S"
REMAINING_S=`echo $((DEADLINE_S - DATE_S))`
echo Number of seconds left "$REMAINING_S"
DATA="$URL_PREFIX$GITHUB_REPOSITORY$SHA_PREFIX$GITHUB_SHA $DATE $REMAINING_S $GITHUB_ACTOR"
echo "$DATA"
if (($REMAINING_S >= 0)); then
          echo "$GITHUB_SHA" > .Ossonts/latestSHA.log
          echo "$DATA" >> .Ossonts/latestSHA.log
else
          echo "$DATA" >> .Ossonts/lateSHA.log
          gh issue create -t "WARNING -- Late Commit" -b "Late commits are not marked. This commit is late: $GITHUB_SHA. @Ossonts"
fi
echo  "$DATA" >> .Ossonts/latestHistory.log
cat .Ossonts/latest*