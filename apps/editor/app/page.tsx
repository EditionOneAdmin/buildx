'use client'

import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('@pascal-app/editor').then(m => ({ default: m.Editor })),
  { ssr: false, loading: () => (
    <div className="flex items-center justify-center h-screen bg-neutral-950">
      <div className="text-center">
        <div className="text-4xl mb-4">🏗️</div>
        <div className="text-lg font-bold text-white mb-1">BuildX</div>
        <div className="text-sm text-neutral-400">Lade 3D Engine...</div>
      </div>
    </div>
  )}
)

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Editor />
    </div>
  )
}
