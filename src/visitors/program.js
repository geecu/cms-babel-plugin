import { importReact } from '../util/create';

export default ({ node }) => {
  node.body.unshift(importReact());
}
