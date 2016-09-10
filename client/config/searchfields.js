import setValues from './values/sets';

export default [
  {name: 'name', type: 'text'},
  // {name: 'foreignName', type: 'text'},
  // {name: 'language', type: 'text' },
  {
    name: 'gameFormat',
    type: 'choice',
    values: [{
      value: 'Commander',
    }, {
      value: 'Standard',
    }, {
      value: 'Legacy'
    }],
  },
  // { name: 'multiverseid', type: 'text' },
  // {
  //   name: 'layout',
  //   type: 'choice',
  //   values: [{"name": "normal"}, {"name": "split"}, {"name": "flip"}, {"name": "double-faced"}, {"name": "token"}, {"name": "plane"}, {"name": "scheme"}, {"name": "phenomenon"}, {"name": "leveler"}, {"name": "vanguard"}],
  // },
  // { name: 'names', type: 'text' },
  // { name: 'manaCost', type: 'text' },
  {name: 'cmc', type: 'number'},
  {name: 'colors', type: 'text'},
  // {name: 'type', type: 'text'},
  { name: 'types', type: 'text' },
  { name: 'subtypes', type: 'text' },
  {
    name: 'rarity',
    type: 'choice',
    values: [{"name":"Common"},{"name":"Uncommon"},{"name":"Rare"},{"name":"Mythic Rare"},{"name":"Special"},{"name":"Basic Land"}],
  },
  {name: 'text', type: 'text' },
  // { name: 'flavor', type: 'text' },
  { name: 'artist', type: 'text' },
  // { name: 'number', type: 'text' },
  {name: 'power', type: 'number'},
  {name: 'toughness', type: 'number'},
  // { name: 'reserved', type: 'text' },
  {name: 'rulings', type: 'text'},
  // { name: 'printings', type: 'text' },
  // { name: 'originalText', type: 'text' },
  // { name: 'originalType', type: 'text' },
  // { name: 'legalities', type: 'text' },
  // { name: 'source', type: 'text' },
  // { name: 'imageUrl', type: 'text' },
  {
    name: 'set',
    type: 'choice',
    values: setValues,
  },
  // { name: 'id', type: 'text' },
];