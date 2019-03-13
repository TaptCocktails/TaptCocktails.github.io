/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  '1BXZSZ3QVP',
  '91db0dafaa0a1070a5b73f7bc4c78032'
);

const search = instantsearch({
  indexName: 'Retail',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article>
          <h1>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</h1>
          <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
          <a target="_blank" href="{{#helpers.highlight}}{ "attribute": "link" }{{/helpers.highlight}}"> Open </a>


        </article>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
