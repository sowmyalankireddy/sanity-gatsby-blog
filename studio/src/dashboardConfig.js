export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6017dd14cb006f797f89bd21',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ufgxyrtt',
                  apiId: '13231f2d-4df7-43a5-ae7c-4a69d7b79de5'
                },
                {
                  buildHookId: '6017dd144133dc4e4451a383',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tu16u6du',
                  apiId: 'f41ceb88-3a64-44f7-a2f5-055ca2be3378'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sowmyalankireddy/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tu16u6du.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
