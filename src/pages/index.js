import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen w-full bg-gradient-to-tr from-[#FFF8F5] to-[#E9EFFD] flex items-center justify-center'>
      <div className='h-[80%] w-[90%] flex justify-between '>
        <div className=' bg-white rounded-md h-[100%] w-[40%] '>
          <div className=' h-[50px] -mt-[60px] flex items-center'>
            <div className='border bg-[#d9d9d923] hover:bg-[#d9d9d950] hover:cursor-pointer flex items-center px-2 py-1 rounded'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
              </svg>
              <p className='ml-2 font-medium text-[#515357]'>NFT music list</p>
            </div>
          </div>
          <div className=' mt-[10px] overflow-auto hover:scale-125 transform transition-all duration-[500ms]'>
            {/* <Image src={"/nft.png"} width={400} height={400} className="w-full rounded-md"/> */}
            <iframe _ngcontent-dyi-c98="" width="100%" height="500" allow="accelerometer; camera; gyroscope; microphone; xr-spatial-tracking; midi;" className="rounded-md w-full" sandbox="allow-scripts allow-downloads" scrolling="" src="https://assets.objkt.media/file/assets-003/QmcTuv6dfyXfPz9Mpk8PcpXjwguwHucTEiQf5c3cikBSu9/artifact/index.html?objkt=8&amp;creator=tz1XxTKUFaCRZqv5BMQviuxrQs8VciG9ffE6&amp;viewer=null"></iframe>
          </div>
          <div className=' flex justify-between items-center mt-3  mx-[2%]'>
            <div className='px-[15px] py-[3px] bg-[#F2F2F2] rounded-md hover:underline hover:cursor-pointer'>
              <p className=' font-medium text-2xl text-[#565656]'>#0007 Flower Cloud</p>
            </div>
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </div>
          </div>
          <div className=' flex items-center mt-3  mx-[2%]'>
            <div className=' p-[5px] rounded bg-[#F2F2F2]'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#565656" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
              </svg>
            </div>
            <p className='text-[#515357] ml-3'>Drag to rotate the sculpture</p>
          </div>
        </div>
        <div className=' bg-white rounded-md h-[100%] w-[58%] flex flex-col'>
          <div className='border-b border-b-[#E9EFFD] h-[10%] flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5 ml-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            </svg>
            <p className='ml-5'>Details</p>
          </div>
          <div className='flex-1 w-full flex flex-col  mt-3'>
            {/* -------> Description */}
            <div className='flex flex-col h-[34%] w-[96%] px-[1%] mx-auto rounded border border-[#E9EFFD]
                            '>
              <div className='flex items-center w-full mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                <p className='ml-5'>Description</p>
              </div>
              <div className='flex items-center w-full mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5 opacity-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                <p className=' ml-5 text-[#0000005e]'>
                  Holographic Dreams is a collection of AI generated images converted to interactive holograms.
                  <div className='mt-2'></div>
                  For iOS/Mac turn on Advanced Mode.
                  <div className='mt-2'></div>
                  cables.gl patch: <a className='text-[#0055ffa7]' href={"https://cables.gl/p/ZNOQhB"}>https://cables.gl/p/ZNOQhB</a>
                </p>
              </div>
            </div>
            {/* -------> Hashtags */}
            <div className='flex flex-col h-[16%] w-[96%] px-[1%] mx-auto rounded border border-[#E9EFFD] mt-2'>
              <div className='flex items-center w-full mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                </svg>

                <p className='ml-5'>Hashtags</p>
              </div>
              <div className='flex items-center w-full mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5 opacity-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                <p className=' ml-5 text-[#0000005e] flex gap-1'>
                  <span className='border border-[#0000] hover:border hover:border-[#00000010] hover:cursor-pointer px-2 hover:rounded'>ai</span>
                  <span className='border border-[#0000] hover:border hover:border-[#00000010] hover:cursor-pointer px-2 hover:rounded'>flowers</span>
                  <span className='border border-[#0000] hover:border hover:border-[#00000010] hover:cursor-pointer px-2 hover:rounded'>pointcloud</span>
                  
                </p>
              </div>
            </div>
            {/* -------> Properties */}
            <div className='flex-1 w-[96%] px-[1%] mx-auto rounded border border-[#E9EFFD] mt-2 mb-[2%]'>
              <div className='flex items-center w-full mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <p className='ml-5'>Properties</p>
              </div>
              <div className='flex items-center w-full mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-5 h-5 opacity-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                <p className=' ml-5 text-[#0000005e]'>
                  <span className=' flex items-center border border-transparent hover:border hover:border-[#00000010] px-1 hover:rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <p className='ml-2 text-black'>Jul 14, 2023 <span className='text-[#0000005e] ml-1'>- minted</span></p>
                  </span>
                  <span className=' flex items-center mt-1 border border-transparent hover:border hover:border-[#00000010] px-1 hover:rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <p className='ml-2 text-black'>IFPS <span className='text-[#0000005e] ml-1'>- artifact</span></p>
                  </span>
                  <span className=' flex items-center mt-1 border border-transparent hover:border hover:border-[#00000010] px-1 hover:rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <p className='ml-2 text-black'>CDN <span className='text-[#0000005e] ml-1'>- artifact</span></p>
                  </span>
                  <span className=' flex items-center mt-1 border border-transparent hover:border hover:border-[#00000010] px-1 hover:rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <p className='ml-2 text-black'>Contract <span className='text-[#0000005e] ml-1'></span></p>
                  </span>
                  <span className=' flex items-center mt-1 border border-transparent hover:border hover:border-[#00000010] px-1 hover:rounded'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <p className='ml-2 text-black'>License <span className='text-[#0000005e] ml-1'></span></p>
                  </span>
                  
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}
