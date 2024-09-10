import Image from 'next/image';
import yourImage from './img/female.png';

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center bg-[color: var(---roxo-escuro)] text-white p-10">
      <div className="flex flex-col items-center"></div>
      <h1 className="text-5xl font-bold  mb-4">ProVest</h1>
      <p className="text-xl mb-6">OLÁ, ESTAMOS MUITO FELIZES POR TE VER POR AQUI!</p>
      <Image src={yourImage} alt="Mulher escrevendo e pensando" width={600} height={400} className="mb-6" />
      <a href="/explore" className="bg-blue-500 text-black py-2 px-4 rounded hover:bg-blue-600">Explore Agora</a>
    </div>
  );
}

