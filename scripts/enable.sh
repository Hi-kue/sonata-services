# README
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
# This is a bash script that is currently not
# implemented, and is also a script that is 
# dependent on the configuration/nature of
# your project.
#
# Given this, you may need to customize this script
# to fit the specific needs and requirements of your
# project.
#
# Current File: enable.sh
# Commands: N/A
# Suplimentary Commands: N/A
# *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../scripts" && pwd)"
source "$SCRIPT_DIR/logs.sh"

set -e

info "Setting 'chmod +x' for all scripts in the scripts/ directory..."
chmod +x "$SCRIPT_DIR"/*.sh

if [ $? -eq 0 ]; then
    success "All scripts in the scripts/ directory have been set to executable."
else
    error "Failed to set executable permissions for scripts in the scripts/ directory."
    exit 1
fi