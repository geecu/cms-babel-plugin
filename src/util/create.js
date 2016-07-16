const t = require('babel-types');

export const importReact = () => {
  return t.importDeclaration([
    t.importDefaultSpecifier(t.identifier('React')),
  ], t.stringLiteral('react'))
}
