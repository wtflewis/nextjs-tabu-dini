import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import data from '@/components/data'
import Link from 'next/link'
import useInterval from '@/utils/useInterval'
import ReactPlayer from 'react-player'
import { FaInstagram } from 'react-icons/fa'
const inter = Inter({ subsets: ['latin'] })


function rastgeleKelıme() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

export default function Home() {
  const [isBaslandi, setIsBaslandi] = useState(false);
  const [isBilgiler, setIsBilgiler] = useState(false);

  const [takımAdi, setTakımAdi] = useState();
  const [oyunSuresi, setOyunSuresi] = useState();
  const [pasTotal, setPasTotal] = useState(0);
  const [pasButton, setPasButton] = useState(1);


  const [topPuan, setTopPuan] = useState(0);
  const [tabuSayisi, setTabuSayisi] = useState(0);
  const [dogruSayisi, setDogruSayisi] = useState(0);

  const [oyunBitti, setOyunBitti] = useState(false);


  const takimAdiChange = (e) => {
    setTakımAdi(e.target.value);
  };
  const oyunSuresiChange = (e) => {
    setOyunSuresi(e.target.value);
  };
  const pasHakkıChange = (e) => {
    setPasTotal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Oyun şöyle basladı:', takımAdi, oyunSuresi);
    
  };




  const [kelıme, setKelıme] = useState(rastgeleKelıme());
  const [zaman, setZaman] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;
  
    if (isPlaying && zaman > 0) {
      intervalId = setInterval(() => {
        setZaman(prevTimer => prevTimer - 1);
       
      }, 1000);
    }
  
    if (zaman === 1) {
      setIsBaslandi(false);
      setIsBilgiler(true)
      setIsPlaying(false)
    }
  
    return () => clearInterval(intervalId);
  }, [isPlaying, zaman]);

  function handleBasla() {
    if(takımAdi && oyunSuresi) {

    setZaman(oyunSuresi * 60);
    setIsPlaying(true);
    setIsBaslandi(true)

    }
  }

  function handleYenıTur() {
    setZaman(oyunSuresi * 60);
    setIsPlaying(true);
    setIsBilgiler(false)
    setIsBaslandi(true)
    setTopPuan(0)
    setDogruSayisi(0)
    setTabuSayisi(0)
    setPasButton(0)

  }

  function handleCikis() {
    setZaman(0);
    setIsPlaying(false);
    setIsBaslandi(false);
    setTopPuan(0)
    setDogruSayisi(0)
    setTabuSayisi(0)
    setPasButton(0)

  }

  function handlesPas() {
    setKelıme(rastgeleKelıme());
    setPasButton(pasButton + 1);

  }

  function handleDogru() {
    setKelıme(rastgeleKelıme());
    setTopPuan(topPuan + 1);
    setDogruSayisi(dogruSayisi + 1)
  }

  function handleTabu() {
    setKelıme(rastgeleKelıme());
    setTopPuan(topPuan - 1);
    setTabuSayisi(tabuSayisi + 1)
  }

  return (
    <>



    <div className='flex justify-center items-center h-screen '>

   <div className='bg-slate-200 w-full sm:w-6/12 rounded-lg items-center justify-center flex flex-col'>


  
  {isBaslandi ? (

   
      <div>
    <div className="flex flex-col text-center justify-center mt-14">
    <h1 className="text-3xl font-bold mb-4 underline decoration-blue-200 decoration-2">{kelıme.kelime}</h1>
    <table className="table-auto">
      <thead>
        <tr>
          <th className="border px-4 py-2">Yasaklı Kelimeler</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {kelıme.yasakliKelimeler.map((kelime, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{kelime.charAt(0).toUpperCase() + kelime.slice(1)}</td>
          </tr>
        ))}
      </tbody>
      </table>
    
<div className='border-2 border-rose-300 flex flex-col justify-center rounded-lg'>
    <p className="m-2 font-bold">Süre: <a className='underline decoration-slice text-green-700 decoration-2 decoration-red-200'> {zaman}</a> sn</p>
    <p className='m-2 font-bold'>Puan: <a className='underline decoration-slice text-green-700 decoration-2 decoration-red-200'>{topPuan}</a> </p>
    
 </div>
 
 </div>
  
    <div className="flex justify-center mt-8 ">
      <button className="m-2 hover:shadow-2xl hover:shadow-slate-400 duration-200 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleCikis}>Çıkış</button>
      <button className={`m-2 hover:shadow-2xl hover:shadow-slate-400 duration-200 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg ${pasButton > pasTotal ? 'bg-red-300 cursor-not-allowed hover:bg-red-200': ''}`} disabled={pasButton > pasTotal} onClick={handlesPas}>Pas</button>
      <button className="m-2 hover:shadow-2xl hover:shadow-slate-400 duration-200 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleDogru}>Doğru</button>
      <button className="m-2 hover:shadow-2xl hover:shadow-slate-400 duration-200 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg" onClick={handleTabu}>Tabu</button>
    </div>
   
    
    </div> 
  
   
      ) : (

        <div className={`mt-14 flex justify-center ${isBilgiler && 'hidden'}`}>

   <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <input value={takımAdi} onChange={takimAdiChange} type="text" placeholder="Takım adı" className="mb-2 w-36 py-2 px-4 rounded-md bg-gray-100 focus:border-green-500 border-2 focus:outline-none focus:shadow-outline"/>
      
          <input value={oyunSuresi} onChange={oyunSuresiChange} type="text" placeholder="Oyun süresi" className="mb-2 w-36 py-2 px-4 rounded-md bg-gray-100 focus:border-green-500 border-2 focus:outline-none focus:shadow-outline"/>
     
          <input value={pasTotal} onChange={pasHakkıChange} type="text" placeholder="Pas hakkı" className="w-36 py-2 px-4 rounded-md bg-gray-100 focus:border-green-500 border-2 focus:outline-none focus:shadow-outline"/>

     <span className='mt-2 mb-2 text-sm text-gray-700 font-bold text-center flex items-center'>
      <a> Oyun süresine dakika cinsinden sayı yazınız 1 dakika için 1 yazmanız yeterli</a>
     </span>

 

          <button onClick={handleBasla} disabled={!takımAdi && !oyunSuresi} type='submit' className={`mt-4 bg-green-500 border-2 duration-200 hover:text-green-400 hover:shadow-2xl hover:shadow-green-300 hover:bg-white text-white font-bold py-2 px-4 rounded-lg ${
          takımAdi && oyunSuresi ? '' : 'cursor-not-allowed bg-red-300 border-2 border-red-300 hover:border-red-300 hover:shadow-red-300 hover:text-red-300'
        }`}>
            Başla

          </button>

    </form> 

    </div>
  
    
 ) }

 { isBilgiler && !isPlaying ? 
 <div className='mt-4 border-2 rounded-lg flex flex-col justify-center items-center'>
  <span className='text-3xl text-center text-green-700 font-bold'>
    <a>{takımAdi}</a>
  </span>
  <span className='text-center text-gray-900 font-bold'>
    <a> Toplam puanınız: <a className='text-red-600'>{topPuan}</a> </a>
    <a> Doğru sayınız: <a className='text-red-600'>{dogruSayisi}</a> </a>
    <a> Tabu sayınız: <a className='text-red-600'>{tabuSayisi}</a> </a>

  </span>

  <button onClick={handleYenıTur} type='submit' className={`mb-8 mt-4 bg-green-500 border-2 duration-200 hover:text-green-400 hover:shadow-2xl hover:shadow-green-300 hover:bg-white text-white font-bold py-2 px-4 rounded-lg }`}>
            Yeni tur
   </button>

   <ReactPlayer  width={280} height={170} playing={true} url='https://www.youtube.com/watch?v=v1gumYJiAS4' />
</div>

 : null
 
 }


   <div className='flex select-none flex-col jsutify-center items-center mb-8'>
     <span className='text-center text-2xl font-bold mt-8 text-black'>
     <Link target='_blank' href={'https://lewis3-wtflewis.vercel.app'}>Lewis</Link>
     </span>
    <Link className='flex' target='_blank' href={'https://instagram.com/ali3xw'}> <FaInstagram size={25} /> Instagram</Link>

   <Link target='_blank' href={'https://github.com/wtflewis/nextjs-tabu-dini'} className='mt-2 bg-gray-600 font-bold rounded-lg border-2 border-gray-600 hover:bg-white px-2 py-2 hover:text-gray-700 text-white duration-200'> Proje link </Link>
  
   </div>


          </div>

       </div>

    </>
  )
}
