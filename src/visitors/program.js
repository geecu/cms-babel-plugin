import {
  importReact,
  statelessComponent,
  exportDefault,
} from '../util/create';

export default ({ node }) => {
  node.body[0] = exportDefault(statelessComponent(node.body[0].expression));
  node.body.unshift(importReact());
}
