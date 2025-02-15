const forEach = (arr, fn) => {
  let str = '';
  arr.forEach(i => str += fn(i) || '');
  return str;
};

const article = (item) => `
  <article class="item">
    <header class="item__header">
      <a class="article-title" href="${item.link}" target='_blank' rel='noopener norefferer nofollow'>
        ${item.title}
      </a>
      ${item.feedUrl ? `<span class="item__feed-url monospace">${item.feedUrl}</span>` : ''}
      <ul class="article-links">
        <li class="monospace">${item.timestamp || ''}</li>
        ${item.comments ? `
          <li class="article-links-item"><a href="${item.comments}" target='_blank' rel='noopener norefferer nofollow'>💬</a></li>
        ` : ''
        }
        <li class="article-links-item"><a href="https://txtify.it/${item.link}" target='_blank' rel='noopener norefferer nofollow'>[txtfy]</a></li>
		<li class="article-links-item"><a href="https://r3ad.deno.dev/${item.link}" target='_blank' rel='noopener norefferer nofollow'>[r3ad]</a></li>
        <li class="article-links-item"><a href="https://archive.md/${item.link}" target='_blank' rel='noopener norefferer nofollow'>[a.md]</a></li>
      </ul>
    </header>
  </article>
`;

export const template = ({ allItems, groups, errors, now }) => (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>🦉 reader</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="app">
    <input type="checkbox" class="menu-btn" id="menu-btn" />
    <label class="menu-label" for="menu-btn"></label>

    <div class="sidebar">
      <header>
        <h1 class="inline" style="user-select: none;">🦉</h1>
        <ul class="group-selector">
          <li><a href="#all-firehose">all - firehose</a></li>
          ${forEach(groups, group => `
            <li><a href="#${group[0]}" target="_top">${group[0]}</a></li>
          `)}
        </ul>
      </header>

      <footer>
        ${errors.length > 0 ? `
          <h2>Errors</h2>
          <p>There were errors trying to parse these feeds:</p>
          <ul>
          ${forEach(errors, error => `
            <li>${error}</li>
          `)}
          </ul>
        ` : ''
        }

        <p>
          Last updated ${now}. Powered by <a href="https://github.com/kevinfiol/rss-reader">Bubo Reader</a>, a project by <a href="https://george.mand.is">George Mandis</a> and <a href="https://kevinfiol.com">Kevin Fiol</a>.
        </p>
      </footer>
    </div>

    <main>
      <section id="all-firehose">
        <h2>all - firehose</h2>
        ${forEach(allItems, item => article(item))}
      </section>

      ${forEach(groups, ([groupName, feeds]) => `
        <section id="${groupName}">
          <h2>${groupName}</h2>

          ${forEach(feeds, feed => `
            <details open="">
              <summary>
                <span class="feed-title">${feed.title}</span> 
              </summary>
              ${forEach(feed.items, item => article(item))}
            </details>
          `)}
        </section>
      `)}

        <div class="default-text">
          <p>🦉📚 welcome to bubo reader</p>
          <p>select a feed group to get started</p>
        </div>
    </main>
  </div>
</body>
</html>
`);