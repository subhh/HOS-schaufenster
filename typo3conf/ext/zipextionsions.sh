#!/bin/sh
find . -name 'DEADJOE' -delete
find . -name '*~' -delete 
zip -r extensions.zip discovery/* find/*