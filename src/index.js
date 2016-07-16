import Program from './visitors/program';

export default function ({ types: t }) {
  return {
    visitor: {
      Program
    }
  };
}
