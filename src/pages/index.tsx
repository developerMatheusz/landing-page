import Link from "next/link";

export default function Index() {
  return(
    <div className="flex w-full flex-col h-full">
      <div className="w-full h-full custom-background pb-6">
      <div className="flex items-center justify-between">
      <div className="w-full text-white flex items-center gap-8">
        <div className="my-2 ml-4"><img src="/logo.png" className="w-24 h-20" /></div>
        <div className="h-16 border-r-2 border-gray-400" />
        <div className="gap-8 flex items-center">
          <Link href="/" className="font-bold hover:text-gray-300">Home</Link>
          <Link href="/" className="font-bold hover:text-gray-300">Features</Link>
          <Link href="/" className="font-bold hover:text-gray-300">Blog</Link>
          <Link href="/" className="font-bold hover:text-gray-300">Contato</Link>
        </div>
      </div>
      <div className="w-44 mr-4">
        <button className="bg-[#343236] text-white px-4 py-2 shadow-xl rounded font-semibold text-lg">Baixar grátis</button>
      </div>
      </div>
      <div className="w-full flex items-center">
        <div className="w-3/5 ml-44 mt-20">
          <div className="flex items-center gap-2">
          <div className="inline-block rounded-full bg-[#343236] text-white p-2">
            <div className="flex items-center gap-2 font-light">
            <img src="/round.png" alt="" className="w-8 h-8" />
            Team Management App
            </div>
          </div>
          <img src="/point.png" alt="" className="w-6 -ml-6 -mt-9" />
          </div>
          <div className="flex flex-col max-w-xl mt-6">
            <span className="text-white font-extrabold text-4xl text-left">DOMINO O JOGO COM UM TIME CAMPEÃO!</span>
            <span className="text-white mt-2 font-light">Alcance a vitória de forma completa, tenha estratégias avançadas e análises de desempenho em tempo real para seu time de futebol.</span>
          </div>
          <div className="flex items-center gap-8 mt-10">
            <div className="bg-[#343236] px-4 py-2 rounded-2xl flex items-center justify-center gap-2">
              <img src="/google_play.png" alt="" className="w-10 h-10" />
              <span className="text-white flex flex-col items-start justify-start"><p className="font-light text-left">GET IN ON</p><p className="font-bold text-xl text-left">Google Play</p></span>
            </div>
            <div className="bg-[#343236] px-4 py-2 rounded-2xl flex items-center justify-center gap-2">
              <img src="/apple.png" alt="" className="w-10 h-12" />
              <span className="text-white flex flex-col items-start justify-start"><p className="font-light text-left">Download on the</p><p className="font-bold text-xl text-left">App Store</p></span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/dotted.png" alt="" className="w-14 h-14" />
            <div className="w-full -mt-8 -mr-10"><img src="/group_people.png" alt="" className="h-16" /></div>
            <div className="w-full mt-2 ml-2"><img src="/group_star.png" alt="" className="h-5" /></div>
          </div>
        </div>
        <div className="w-2/5 flex items-center justify-center ml-10 mr-20">
          <img src="/iphone.png" alt="" className="h-96 z-50 absolute" />
          <img src="/x.png" alt="" className="-mb-44 -ml-60 h-28 z-10 absolute" />
          <img src="/points.png" alt="" className=" -mr-60 z-10 absolute" />
        </div>
      </div>
      </div>
    </div>
  )
}