const t = require('babel-types');

export const importReact = () => {
  return t.importDeclaration([
    t.importDefaultSpecifier(t.identifier('React')),
  ], t.stringLiteral('react'))
}

export const statelessComponent = ( jsx ) => {
  return t.arrowFunctionExpression(
    [t.identifier('props')],
    t.blockStatement([t.returnStatement(jsx)])
  )
}

export const exportDefault = ( body ) => {
  return t.exportDefaultDeclaration(body);
}
