/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AttributesIndexImport } from './routes/attributes.index'
import { Route as AttributesAttributeImport } from './routes/attributes.attribute'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AttributesIndexRoute = AttributesIndexImport.update({
  path: '/attributes/',
  getParentRoute: () => rootRoute,
} as any)

const AttributesAttributeRoute = AttributesAttributeImport.update({
  path: '/attributes/attribute',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/attributes/attribute': {
      preLoaderRoute: typeof AttributesAttributeImport
      parentRoute: typeof rootRoute
    }
    '/attributes/': {
      preLoaderRoute: typeof AttributesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AttributesAttributeRoute,
  AttributesIndexRoute,
])

/* prettier-ignore-end */
