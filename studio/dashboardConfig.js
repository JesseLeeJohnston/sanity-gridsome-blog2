export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ee2a08500c1fe01d905a126',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog2-studio-3xq4wo95',
                  apiId: '9c07f805-a297-4275-a990-d0cb02ed6d3b'
                },
                {
                  buildHookId: '5ee2a085d717520198c5b8f7',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog2-web',
                  apiId: 'f3427e74-c0cb-41a3-ada8-7ab89d14408f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JesseLeeJohnston/sanity-gridsome-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog2-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
