const fs = require('fs');
const path = require('path');

const jsonFile = fs.readFileSync(path.resolve(process.cwd(), 'store.json'), 'utf8');

const data = JSON.parse(jsonFile);

const jsonOutput = data.children.links.value.value.map(link => {
  return {
    title: link.value.value.title.value.value,
    url: link.value.value.url.value.value,
    description: link.value.value.description.value.value,
    tags: link.value.value.tags.value.value.split(','),
    date: link.value.value.date.value.value,
  };
});

fs.writeFileSync(
  path.resolve(process.cwd(), 'src', '_data', 'links.json'),
  JSON.stringify(jsonOutput, null, 2)
);

console.log('Links generated 🎉');
