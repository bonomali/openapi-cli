import { RulesConfig } from './config';

export default {
  rules: {
    'tags-alphabetical': 'off',

    'no-server-example.com': 'warning',
    'no-server-trailing-slash': 'error',
    'no-empty-servers': 'warning',

    'parameter-description': 'off',
    'no-path-trailing-slash': 'error',
    'path-declaration-must-exist': 'error',
    'path-not-include-query': 'error',
    'path-parameters-defined': 'error',
    'operation-description': 'off',
    'operation-2xx-response': 'warning',
    'operation-operationId-unique': 'error',
    'operation-parameters-unique': 'error',
    'operation-tag-defined': 'warning',
    'operation-security-defined': 'warning',
    'operationId-valid-in-url': 'error',
    'operation-singular-tag': 'off',

    'no-example-value-and-externalValue': 'error',

    'no-unused-components': 'warning',
    'no-unresolved-refs': 'error',
    'no-enum-type-mismatch': 'error',

    'boolean-parameter-prefixes': 'off',
    'paths-kebab-case': 'off',
    'defined-and-no-empty-string': {
      severity: 'warning',
      options: {
        'Info.description': true,
        'Tag.description': true,
        'Info.license': true,
        'Info.contact': true,
        'License.url': false,
      },
    },
    spec: 'error',
  }
} as RulesConfig
