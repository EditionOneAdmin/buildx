import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/buildx",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['three', '@pascal-app/viewer', '@pascal-app/core', '@pascal-app/editor', '@pascal-app/ui'],
  turbopack: {
    resolveAlias: {
      '@pascal-app/core': '../../packages/core/src/index.ts',
      '@pascal-app/viewer': '../../packages/viewer/src/index.ts',
      '@pascal-app/editor': '../../packages/editor/src/index.tsx',
    },
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
