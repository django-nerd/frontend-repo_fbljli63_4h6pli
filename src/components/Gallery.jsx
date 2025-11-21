import React from 'react'

const Card = ({ children, tone = 'default' }) => (
  <article className={`group relative rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] border ${
    tone === 'ink' ? 'bg-[#F2EBDD] border-[#e4d7bd]' : 'bg-[#FAF6EE] border-[#e8dcc4]'
  }`}>
    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <div className="p-6">
      {children}
    </div>
  </article>
)

export const WritingCard = ({ title, excerpt, tag = 'Essay' }) => (
  <Card tone="ink">
    <div className="text-[11px] uppercase tracking-[0.22em] text-[#a8842a]">{tag}</div>
    <h3 className="mt-1 text-2xl serif-luxe text-[var(--ink)]">{title}</h3>
    <p className="mt-3 text-[color:var(--ink-soft)]/90 leading-relaxed">{excerpt}</p>
    <button className="mt-6 text-sm tracking-widest uppercase text-[#a8842a] hover:text-[#b18b2e]">Read story</button>
  </Card>
)

export const VideoCard = ({ title, thumbnail, duration = '02:31' }) => (
  <Card>
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#efe6d2] relative">
      {thumbnail ? (
        <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full grid place-items-center text-[#b18b2e]">Video</div>
      )}
      <span className="absolute bottom-2 right-2 text-[11px] bg-black/40 text-white px-2 py-0.5 rounded">{duration}</span>
    </div>
    <h3 className="mt-4 text-2xl serif-luxe text-[var(--ink)]">{title}</h3>
    <button className="mt-3 text-sm tracking-widest uppercase text-[#a8842a] hover:text-[#b18b2e]">Play film</button>
  </Card>
)

export const ImageCard = ({ title, image, medium = 'Graphite on paper' }) => (
  <Card>
    <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#efe6d2]">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full grid place-items-center text-[#b18b2e]">Artwork</div>
      )}
    </div>
    <h3 className="mt-4 text-2xl serif-luxe text-[var(--ink)]">{title}</h3>
    <p className="text-sm text-[color:var(--ink-soft)]/80">{medium}</p>
  </Card>
)

const Gallery = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <WritingCard title="Salt on the Wind" excerpt="A meditation on belonging, coastlines, and the soft weight of memory." tag="Letter" />
      <VideoCard title="Gleam" duration="03:08" />
      <ImageCard title="Graphite Figure" medium="Graphite study" />
      <ImageCard title="Sunlit Courtyard" medium="35mm photograph" />
      <WritingCard title="Quiet Rooms" excerpt="Fragments of mornings, cities, and in-between moments." tag="Fragment" />
      <VideoCard title="Tide Letters" />
    </div>
  )
}

export default Gallery
