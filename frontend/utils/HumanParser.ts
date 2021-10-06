const human = require('humanparser');

export default function HumanParser(info: string | null) {
  const attrs = human.parseName(info);
  return {
    first: attrs.firstName,
    last: attrs.lastName,
    type: "Person"
  }
}