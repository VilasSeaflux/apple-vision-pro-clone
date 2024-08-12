import React from 'react'

export default function Paragraph() {
  return (
    <div className='h-[50vh] px-10 grid grid-cols-1 md:grid-cols-5 content-start w-[90vw] mx-auto'>
        <div className='flex flex-row items-start justify-center col-span-2'>
            <h5 className='text-neutral-950 text-3xl font-bold w-[80%]'>A new dimension for entertainment</h5>
        </div>
        <div className='flex flex-col items-start justify-start gap-y-6 col-span-3'>
            <p className='text-xl font-medium text-gray-500 w-[80%]'>Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home.</p>
            <button className='text-xl bg-orange-600 px-10 py-4 rounded-full self-start'>
                + Learn more about entertainment
            </button>
        </div>
    </div>
  )
}
