import { useState } from 'react'

type Props = {
  src: string
  alt: string
  ratio?: '16/9' | '4/3' | '1/1'
  className?: string
}

const ratioClassMap: Record<NonNullable<Props['ratio']>, string> = {
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
}

export default function ImageSlot({
  src,
  alt,
  ratio = '4/3',
  className = '',
}: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-brand-border/70 bg-brand-canvas ${ratioClassMap[ratio]} ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-canvas to-brand-canvas/50">
          <p className="px-4 text-center text-xs tracking-[0.12em] text-brand-muted">
            图片占位 · 请放入 {src}
          </p>
        </div>
      )}
    </div>
  )
}
