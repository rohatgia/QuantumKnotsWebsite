#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $0); pwd)
cd ${SCRIPT_DIR}

exe() { echo; echo; echo "#### $@" ; "$@" ; }

echo "First we will build the server"
cd backend
sudo podman build --rm -t QuantumKnotsBackend:latest
echo "Server build completed!"
echo ""

#echo "Second we will build the ui"
#cd ../frontend
#sudo podman build --rm -t QuantumKnotsUI:latest
#echo "UI Build completed!"
#echo ""

while getopts f: option
do
case "${option}"
in
f) FILENAME=${OPTARG}; echo "Now we will save the docker images, starting with the server"; podman save QuantumKnotsBackend:latest > qk_server_${FILENAME}.tar; echo "Server completed! Now we will save the ui"; podman save QuantumKnotsUI:latest > qk_ui_${FILENAME}.tar; echo "UI Completed!";
esac
done
