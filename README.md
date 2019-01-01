# create
- create-react-app my-app --scripts-version=react-scripts-ts

# tsconfig.json edit
-  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"] -> "extends": [],
-  addiing "defaultSeverity": "warning"

# rules 
- component is object
- if you wanna empty props interface... use object type!