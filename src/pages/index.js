import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen w-full bg-gradient-to-tr from-[#FFF8F5] to-[#E9EFFD] flex items-center justify-center'>
      <div className='h-[80%] w-[90%] flex justify-between '>
        <div className=' bg-white rounded-md h-[100%] w-[40%] '>
          <div className='border h-[50px] -mt-[60px]'>
            ok
          </div>
          <div className=' mt-[10px] overflow-auto'>
            <Image src={"/nft.png"} width={400} height={400} className="w-full rounded-md"/>
          </div>
          <div className='border flex justify-between'>
            <div className='px-[10px] py-[3px] bg-[#F2F2F2] mt-3'>
              <p className=' font-medium text-xl text-[#565656]'>#0007 Flower Cloud</p>
            </div>
            <div className=''></div>
          </div>
          <div className=''></div>
        </div>
        <div className=' bg-white rounded-md h-[100%] w-[58%] '>
          right
        </div>
      </div>
    </main>
  )
}
