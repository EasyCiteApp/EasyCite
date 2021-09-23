const human = require('humanparser');

export default function HumanParser(str = null) {
  const attrs = human.parseName(str);
  return {
    first: attrs.firstName,
    last: attrs.lastName,
    type: "Person"
  }
}