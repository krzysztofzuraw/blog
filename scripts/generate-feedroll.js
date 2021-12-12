const parseOpml = require('node-opml-parser');
const fs = require('fs');
const path = require('path');

const opmlFile = fs.readFileSync(path.resolve(process.cwd(), 'Feeds.opml'), 'utf8');

parseOpml(opmlFile, (err, items) => {
  if (err) {
    console.error(err);
    return;
  }

  const data = items.map(item => ({ title: item.title, url: item.url }));

  fs.writeFileSync(
    path.resolve(process.cwd(), 'src', '_data', 'feedroll.json'),
    JSON.stringify(data)
  );
  console.log('Fedroll generated 🎉');
});
