#!/usr/bin/env bash

# README
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
# This script is responsible for running the project
# in development, and replicated production modes,
# running linters, formatters, and type checks as
# needed. It may need to be customized to fit the
# requirements of the specific project if necessary. 
#
# Current File: run.sh
# Commands: 
#   | --dev
#   | --prod
#   | --only-lint
#   | --only-format
#   | --only-tc
#   | --all
#   | --default
# 
# Suplimentary Commands: 
#   | -d, 
#   | -p, 
#   | -ol, 
#   | -of, 
#   | -otc, 
#   | -a, 
#   | -def, -d
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

set -e
npm run dev -- --open