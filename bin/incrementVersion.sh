#/bin/bash
OLD_VERSION=0.2.6
NEW_VERSION=0.2.7
git mv Imap-ACL-Extension-$OLD_VERSION.xpi Imap-ACL-Extension-$NEW_VERSION.xpi
sed -i "s/$OLD_VERSION/$NEW_VERSION/" ../src/chrome/content/about.xul
sed -i "s/$OLD_VERSION/$NEW_VERSION/" ../src/chrome/content/overlay.js
sed -i "s/$OLD_VERSION/$NEW_VERSION/" ../src/install.rdf
sed -i "s/$OLD_VERSION/$NEW_VERSION/" ./build.sh
