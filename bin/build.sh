#!/bin/bash
if [ -f Imap-ACL-Extension-0.2.8.xpi ]; then
	rm Imap-ACL-Extension-0.2.8.xpi
fi
cd ../src
mv chrome/content/debug.js debug.js
zip -r ../bin/Imap-ACL-Extension-0.2.8.xpi chrome/ chrome.manifest defaults/ install.rdf
mv debug.js chrome/content/debug.js
