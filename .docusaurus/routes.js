
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ru/',
    component: ComponentCreator('/ru/','8ba'),
    exact: true
  },
  {
    path: '/ru/markdown-page',
    component: ComponentCreator('/ru/markdown-page','361'),
    exact: true
  },
  {
    path: '/ru/docs',
    component: ComponentCreator('/ru/docs','d95'),
    routes: [
      {
        path: '/ru/docs/alosaur-lite',
        component: ComponentCreator('/ru/docs/alosaur-lite','348'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/App',
        component: ComponentCreator('/ru/docs/basics/App','137'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Area',
        component: ComponentCreator('/ru/docs/basics/Area','786'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Context',
        component: ComponentCreator('/ru/docs/basics/Context','e4e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Controllers',
        component: ComponentCreator('/ru/docs/basics/Controllers','8f8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/DI',
        component: ComponentCreator('/ru/docs/basics/DI','7f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Hooks',
        component: ComponentCreator('/ru/docs/basics/Hooks','6e2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Middleware',
        component: ComponentCreator('/ru/docs/basics/Middleware','fa7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Render pages',
        component: ComponentCreator('/ru/docs/basics/Render pages','035'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Security',
        component: ComponentCreator('/ru/docs/basics/Security','813'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/basics/Standard Hooks',
        component: ComponentCreator('/ru/docs/basics/Standard Hooks','041'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/intro',
        component: ComponentCreator('/ru/docs/intro','a0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/sponsors',
        component: ComponentCreator('/ru/docs/sponsors','7cf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/CORS',
        component: ComponentCreator('/ru/docs/techniques/CORS','cea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/Custom decorators',
        component: ComponentCreator('/ru/docs/techniques/Custom decorators','f28'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/Database',
        component: ComponentCreator('/ru/docs/techniques/Database','39e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/Microservice',
        component: ComponentCreator('/ru/docs/techniques/Microservice','5c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/OpenAPI',
        component: ComponentCreator('/ru/docs/techniques/OpenAPI','e7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/SPA',
        component: ComponentCreator('/ru/docs/techniques/SPA','4dc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/SSE',
        component: ComponentCreator('/ru/docs/techniques/SSE','e37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ru/docs/techniques/WebSocket',
        component: ComponentCreator('/ru/docs/techniques/WebSocket','d15'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
