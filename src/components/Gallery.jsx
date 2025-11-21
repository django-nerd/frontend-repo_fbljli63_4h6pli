import React from 'react'

const Card = ({ children }) => (
  <article className="group relative bg-[#FAF6EE] border border-[#e8dcc4] rounded-xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
    <div className="p-6">
      {children}
    </div>
  </article>
)

export const WritingCard = ({ title, excerpt }) => (
  <Card>
    <h3 className="text-2xl font-serif text-[#3a2f20]">{title}</h3>
    <p className="mt-3 text-[#5a4a34]/90 leading-relaxed">{excerpt}</p>
    <button className="mt-6 text-sm tracking-widest uppercase text-[#a8842a] hover:text-[#b18b2e]">Read story</button>
  </Card>
)

export const VideoCard = ({ title, thumbnail }) => (
  <Card>
    <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#efe6d2]">
      {thumbnail ? (
        <img src={thumbnail} alt="thumbnail" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full grid place-items-center text-[#b18b2e]">Video</div>
      )}
    </div>
    <h3 className="mt-4 text-2xl font-serif text-[#3a2f20]">{title}</h3>
    <button className="mt-3 text-sm tracking-widest uppercase text-[#a8842a] hover:text-[#b18b2e]">Play film</button>
  </Card>
)

export const ImageCard = ({ title, image }) => (
  <Card>
    <div className="aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#efe6d2]">
      {image ? (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full grid place-items-center text-[#b18b2e]">Artwork</div>
      )}
    </div>
    <h3 className="mt-4 text-2xl font-serif text-[#3a2f20]">{title}</h3>
  </Card>
)

const Gallery = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <WritingCard title="Salt on the Wind" excerpt="A meditation on belonging, coastlines, and the soft weight of memory." />
      <VideoCard title="Gleam" />
      <ImageCard title="Graphite Figure" />
      <ImageCard title="Sunlit Courtyard" />
      <WritingCard title="Quiet Rooms" excerpt="Fragments of mornings, cities, and in-between moments." />
      <VideoCard title="Tide Letters" />
    </div>
  )
}

export default Gallery
