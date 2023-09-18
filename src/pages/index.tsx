import Link from "next/link";
import * as S from "../styles/navbar";

export default function Index() {
  return (
    <S.Container>
      <S.ContainerHeader>
        <S.ContainerNavbar>
          <S.NavbarPrimary>
            <S.ContainerLogo>
              <S.Logo src="/logo.png" className="" />
            </S.ContainerLogo>
            <S.BorderRightGray />
            <div className="md:block hidden flex items-center gap-8 z-50">
              <Link href="/" className="font-bold pr-8 hover:text-gray-300">
                Home
              </Link>
              <Link href="/" className="font-bold pr-8 hover:text-gray-300">
                Features
              </Link>
              <Link href="/" className="font-bold pr-8 hover:text-gray-300">
                Blog
              </Link>
              <Link href="/" className="font-bold pr-8 hover:text-gray-300">
                Contato
              </Link>
            </div>
          </S.NavbarPrimary>
          <div className="w-44 pr-4 md:block hidden">
            <button className="bg-[#343236] text-white px-4 py-2 shadow-xl rounded font-semibold text-lg">
              Baixar grátis
            </button>
          </div>
          <div className="w-44 flex items-center justify-center md:hidden cursor-pointer">
            <img src="/hamburguer.png" alt="" />
          </div>
        </S.ContainerNavbar>
        <div className="w-full flex-col md:flex-row flex items-center">
          <div className="md:w-3/5 w-full md:ml-44 mt-10 md:mt-20">
            <div className="flex items-center ml-8 md:ml-0 gap-2">
              <div className="inline-block rounded-full bg-[#343236] text-white p-2">
                <div className="flex items-center gap-2 font-light">
                  <img src="/round.png" alt="" className="w-8 h-8" />
                  Team Management App
                </div>
              </div>
              <img src="/point.png" alt="" className="w-6 -ml-6 -mt-9" />
            </div>
            <div className="flex flex-col max-w-xl ml-8 md:ml-0 mt-6">
              <span className="text-white font-extrabold text-4xl text-left">
                DOMINO O JOGO COM UM TIME CAMPEÃO!
              </span>
              <span className="text-white mt-2 font-light">
                Alcance a vitória de forma completa, tenha estratégias avançadas
                e análises de desempenho em tempo real para seu time de futebol.
              </span>
            </div>
            <div className="flex items-center ml-8 md:ml-0 gap-8 mt-10">
              <Link href="https://play.google.com/store" target="_blank">
                <img src="/playstore.png" alt="" className="w-56" />
              </Link>
              <Link href="https://play.google.com/store" target="_blank">
                <img src="/appstore.png" alt="" className="w-56" />
              </Link>
            </div>
            <div className="flex flex-col items-center ml-8 md:ml-0 justify-center">
              <img
                src="/dotted.png"
                alt=""
                className="w-14 h-14 ml-48 md:-ml-20"
              />
              <div className="w-full -mt-8 -pr-10">
                <img src="/group_people.png" alt="" className="h-16" />
              </div>
              <div className="w-full mt-2 ml-2">
                <img src="/group_star.png" alt="" className="h-5" />
              </div>
            </div>
          </div>
          <div className="md:w-2/5 w-full flex items-center justify-center md:ml-10 my-20 md:my-0 pr-20">
            <img src="/iphone.png" alt="" className="h-96 z-50 md:absolute object-contain" />
            <img
              src="/x.png"
              alt=""
              className="-mb-44 md:-ml-60 -ml-40 h-16 md:h-28 z-10 absolute object-contain"
            />
            <img src="/points.png" alt="" className="-mr-60 z-10 absolute object-contain" />
          </div>
        </div>
      </S.ContainerHeader>
      <div className="flex items-center flex-col md:flex-row h-full bg-[#343236] justify-between">
        <div className="md:w-1/2 w-full h-full">
          <img src="/player.png" alt="" className="bg-cover" />
        </div>
        <div className="md:w-1/2 w-full md:h-screen flex-col md:ml-10 pl-10">
          <div className="h-full w-full mt-10 md:mt-0">
            <h1 className="text-green-600 md:text-3xl text-2xl font-light">
              Junte-se a nós
            </h1>
            <h2 className="my-4 md:text-4xl text-2xl md:pr-4 font-bold text-white">
              A VIDA É UM JOGO E PRECISAMOS DE GOLS
            </h2>
            <div className="md:w-[550px] w-[400px]">
              <span className="font-semibold text-gray-300 text-white text-lg">
                Descubra o app perfeito para apaixonados por futebol!
                <br /> Mantenha seus jogos organizados, registre os resultados
                do seu time e acompanhe a agenda dos próximos desafios de forma
                prática e eficiente.
              </span>
            </div>
            <div className="w-44 rounded-full bg-green-600 mt-4 h-2" />
            <div className="flex flex-col gap-8 w-full mt-10">
              <div className="flex items-center text-2xl font-semibold text-white">
                <img src="/radio.png" alt="" />
                Banners profissionais
              </div>
              <div className="flex items-center text-2xl font-semibold text-white">
                <img src="/radio.png" alt="" />
                Gráficos e estatísticas detalhadas
              </div>
              <div className="flex items-center text-2xl font-semibold text-white">
                <img src="/radio.png" alt="" />
                Agenda de Jogos
              </div>
              <div className="flex items-center text-2xl font-semibold text-white">
                <img src="/radio.png" alt="" />
                Gerenciamento de times
              </div>
              <div className="flex items-center text-2xl font-semibold text-white">
                <img src="/radio.png" alt="" />
                Análise de jogadores
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center h-full bg-[#343236] gap-20 justify-between p-20">
        <div className="md:w-1/2 h-full hidden md:block">
        <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center">
            <h1 className="text-4xl font-bold text-white text-center md:text-right">
              BANNERS
              <br />
              PROFISSIONAIS
            </h1>
            <div className="ml-4 w-44 md:h-20 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center md:px-0 px-10 font-semibold text-gray-300 text-lg w-[500px]">
              Faça seu time brilhar nas redes sociais, impressione seus
              adversários e atraia torcedores de todos os cantos com designs
              profissionais e personalizados. Deixe a concorrência no chinelo
              com banners únicos e arrasadores. Diga adeus à mesmice e mergulhe
              em um mundo de criatividade e vitórias, porque o seu time merece
              brilhar como nunca!
            </span>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full text-center">
          <div className="flex items-center justify-center">
            <img
              src="/iphonexr.png"
              alt=""
              className="md:h-[550px] h-[400px] z-50 relative object-contain"
            />
            <img
              src="/visa.png"
              alt=""
              className="md:h-96 absolute w-[28rem] z-10 object-contain"
            />
          </div>
        </div>
        <div className="md:w-1/2 h-full md:hidden">
        <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center md:mt-24">
            <h1 className="text-3xl font-bold text-white text-center md:text-right">
              BANNERS
              <br />
              PROFISSIONAIS
            </h1>
            <div className="ml-4 w-44 md:h-20 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center md:px-0 px-10 font-semibold text-gray-300 text-lg w-[500px]">
              Faça seu time brilhar nas redes sociais, impressione seus
              adversários e atraia torcedores de todos os cantos com designs
              profissionais e personalizados. Deixe a concorrência no chinelo
              com banners únicos e arrasadores. Diga adeus à mesmice e mergulhe
              em um mundo de criatividade e vitórias, porque o seu time merece
              brilhar como nunca!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center h-full bg-[#343236] md:gap-44 justify-between">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src="/group_phone.png"
            alt=""
            className="h-[600px] p-10 md:p-0 md:ml-60 z-50 relative object-contain"
          />
        </div>
        <div className="md:w-1/2 w-full h-full">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-start justify-center md:mt-24">
            <div className="pr-4 h-20 w-1 bg-green-600 rounded-full hidden md:block" />
            <h1 className="text-3xl font-bold text-white text-center md:text-left">
              GRÁFICOS E
              <br />
              ESTATÍSTICAS
            </h1>
            <div className="md:pr-4 md:h-20 md:w-1 w-32 mt-2 md:mt-0 h-1 bg-green-600 rounded-full md:hidden block" />
          </div>
          <div className="w-full flex items-center md:justify-start justify-center px-10 md:px-0 mt-4">
            <span className="md:text-left text-center font-semibold text-gray-300 text-lg w-[500px]">
              Deixe a magia dos números trabalhar a seu favor! Com nossos
              gráficos e estatísticas incríveis, você terá o poder de
              transformar dados em vitórias! Descubra os segredos ocultos nos
              números, analise o desempenho do seu time como um verdadeiro
              detetive esportivo e surpreenda-se com insights poderosos. Afinal,
              o jogo não é só sobre gols, é sobre estratégia e ciência!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full bg-[#343236] md:gap-44 md:justify-between">
        <div className="md:w-1/2 hidden md:block w-full h-full">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center mt-24">
            <h1 className="text-4xl font-bold text-white text-center md:text-right">
              AGENDA DE
              <br />
              JOGOS
            </h1>
            <div className="ml-4 h-20 w-1 bg-green-600 rounded-full hidden md:block" />
            <div className="h-1 w-32 mt-2 md:mt-0 bg-green-600 rounded-full md:hidden block" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center font-semibold text-gray-300 text-lg md:w-[500px] w-full px-10 md:px-0">
              Chega de perder jogos por falta de organização! Com nossa feature
              de agenda de jogos, você será o mestre do cronograma esportivo!
              Esqueça os tempos confusos de marcar jogos no papel, agora é tudo
              digital e simples como dar um drible desconcertante! Agende
              partidas com facilidade, receba lembretes para nunca mais perder
              um único chute ao gol e mantenha seu time no caminho certo para a
              vitória.
            </span>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center justify-center mt-20 md:mt-0">
          <img
            src="/group_play_soccer.png"
            alt=""
            className="md:h-[600px] h-[400px] md:mr-60 z-50 relative object-contain"
          />
        </div>
        <div className="md:w-1/2 block md:hidden w-full h-full">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center pt-10 md:pt-24">
            <h1 className="text-3xl font-bold text-white text-center md:text-right">
              AGENDA DE
              <br />
              JOGOS
            </h1>
            <div className="ml-4 h-20 w-1 bg-green-600 rounded-full hidden md:block" />
            <div className="h-1 w-32 mt-2 md:mt-0 bg-green-600 rounded-full md:hidden block" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center font-semibold text-gray-300 text-lg md:w-[500px] w-full px-10 md:px-0">
              Chega de perder jogos por falta de organização! Com nossa feature
              de agenda de jogos, você será o mestre do cronograma esportivo!
              Esqueça os tempos confusos de marcar jogos no papel, agora é tudo
              digital e simples como dar um drible desconcertante! Agende
              partidas com facilidade, receba lembretes para nunca mais perder
              um único chute ao gol e mantenha seu time no caminho certo para a
              vitória.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center h-full bg-[#343236] md:gap-44 md:justify-between justify-center pt-10 md:mt-0 pt-10">
        <div className="md:w-1/2 w-full h-full flex items-center justify-center">
          <img
            src="/group_phone_2.png"
            alt=""
            className="object-contain md:h-[37.5rem] h-[25rem] md:ml-60 z-50 relative"
          />
        </div>
        <div className="md:w-1/2 w-full h-full">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-start justify-center md:mt-24 mt-10">
            <div className="pr-4 hidden md:block h-20 w-1 bg-green-600 rounded-full" />
            <h1 className="text-3xl font-bold text-white text-center md:text-left">
              GERENCIAMENTO
              <br />
              DE TIMES
            </h1>
            <div className="pr-4 mt-2 block md:hidden h-1 w-32 bg-green-600 rounded-full" />
          </div>
          <div className="w-full flex items-center justify-start mt-4">
            <span className="md:text-left text-center px-10 px:0 font-semibold text-gray-300 text-lg md:w-[31.25rem] w-full">
              Gerencie, motive e leve cada equipe à glória, tudo com apenas
              alguns toques mágicos no seu celular. Aplique sua estratégia em
              múltiplos campos, conquiste títulos em todas as ligas e mostre ao
              mundo que você é o manager supremo! Afinal, não há limites para o
              poder do seu dedo no futebol virtual. Prepare-se para dominar os
              gramados, pois a conquista de múltiplos campeonatos está em suas
              mãos (literalmente)!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center h-full bg-[#343236] md:gap-44 md:justify-between justify-center">
        <div className="md:w-1/2 w-full h-full hidden md:block">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center mt-24">
            <h1 className="text-3xl font-bold text-white md:text-right text-center">
              ANÁLISE DE
              <br />
              JOGADORES
            </h1>
            <div className="ml-4 h-20 w-1 bg-green-600 rounded-full hidden md:block" />
            <div className="h-1 w-32 bg-green-600 rounded-full block md:hidden mt-2" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center px-10 md:px-0 font-semibold text-gray-300 text-lg w-[31.25rem]">
              Vasculhe cada detalhe, desde as habilidades mágicas até os pontos
              fracos, e torne-se o especialista em escalações perfeitas. Abrace
              a ciência dos pés à cabeça, decifre estatísticas como um gênio e
              monte o time dos sonhos que deixará seus adversários de queixo
              caído. Desvende o potencial oculto, pois a vitória está nos
              detalhes, e você está pronto para brilhar!
            </span>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex items-center justify-center mt-10">
          <img
            src="/group_phone_3.png"
            alt=""
            className="md:h-[600px] h-[400px] md:mr-60 z-50 relative object-contain"
          />
        </div>
        <div className="md:w-1/2 w-full h-full block md:hidden">
          <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center md:mt-24 mt-10">
            <h1 className="text-4xl font-bold text-white md:text-right text-center">
              ANÁLISE DE
              <br />
              JOGADORES
            </h1>
            <div className="ml-4 h-20 w-1 bg-green-600 rounded-full hidden md:block" />
            <div className="h-1 w-32 bg-green-600 rounded-full block md:hidden mt-2" />
          </div>
          <div className="w-full flex items-center md:justify-end justify-center mt-4">
            <span className="md:text-right text-center px-10 md:px-0 font-semibold text-gray-300 text-lg w-[500px]">
              Vasculhe cada detalhe, desde as habilidades mágicas até os pontos
              fracos, e torne-se o especialista em escalações perfeitas. Abrace
              a ciência dos pés à cabeça, decifre estatísticas como um gênio e
              monte o time dos sonhos que deixará seus adversários de queixo
              caído. Desvende o potencial oculto, pois a vitória está nos
              detalhes, e você está pronto para brilhar!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start h-full bg-[#343236] justify-center md:justify-start pl-10 md:pl-32 pt-24">
        <h1 className="text-xl font-bold text-white">
          RECOMENDADO POR CENTENAS DE JOGADORES COMO VOCÊ
        </h1>
        <div className="flex items-center gap-8 justify-end w-full mt-10 md:mt-20">
          <div className="bg-[#3F3E41] md:w-[500px] p-10 rounded-lg md:h-[300px]">
            <p className="font-semibold text-white text-lg">
              “Um app projetado para todos que desejam manter seus jogos
              organizados, guardando os resultados do seu time e mantendo uma
              agenda organizada dos próximos jogos.”
            </p>
            <div className="mt-4 flex items-center gap-4">
              <img src="/people1.png" alt="" className="object-contain" />
              <div>
                <p className="text-white font-bold text-lg">Rosélia Wolf</p>
                <p className="font-light text-green-600 text-lg">
                  Tão tão distante
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#3F3E41] w-[500px] p-10 rounded-lg h-[300px] hidden md:block">
            <p className="font-semibold text-white text-lg">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
            <div className="mt-4 flex items-center gap-4">
              <img src="/people2.png" alt="" className="object-contain" />
              <div>
                <p className="text-white font-bold text-lg">Erê Dias</p>
                <p className="font-light text-green-600 text-lg">Arapiraca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center h-full gap-4 bg-[#343236] justify-center md:justify-end md:pr-32 pt-16">
        <Link href="https://play.google.com/store" target="_blank">
          <img src="/playstore.png" alt="" className="md:pl-0 pl-4" />
        </Link>
        <Link href="https://play.google.com/store" target="_blank">
          <img src="/appstore.png" alt="" className="md:pl-0 pl-4 pr-4 md:pr-0" />
        </Link>
      </div>
      <div className="flex w-full bg-[#343236]">
        <img src="/bottom_cover.png" alt="" className="md:pt-24 pt-10" />
      </div>
      <div className="flex items-center flex-col justify-center md:mt-24 pt-10 bg-white">
        <h1 className="md:text-6xl text-3xl text-[#343236] font-bold mb-10 md:mb-24">
          BLOGS E ARTIGOS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:mb-0 mb-10">
          <Link href="#" target="_blank">
            <img src="/card1.png" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#" target="_blank">
            <img src="/card2.png" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#" target="_blank">
            <img src="/card3.png" alt="" className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-8 md:px-20 my-8 md:my-24">
        <div className="bg-[#343236] flex items-center justify-between w-full rounded-2xl">
          <div className="p-8 hidden md:block">
            <img src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col pl-4 md:py-4 py-8 md:pl-0 md:py-0">
            <div className="flex items-center justify-end">
              <div className="bg-[#42BD3D] rounded-lg p-2 mr-4">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img src="/facebook-circle-fill.png" alt="" className="w-6 md:w-10" />
                </Link>
              </div>
              <div className="bg-[#42BD3D] rounded-lg p-2 mr-4">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img src="/instagram-fill.png" alt="" className="w-6 md:w-10" />
                </Link>
              </div>
              <div className="bg-[#42BD3D] rounded-lg p-2 md:mr-8 mr-4">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img src="/mail-fill.png" alt="" className="w-6 md:w-10" />
                </Link>
              </div>
            </div>
            <div className="mt-4 text-right md:text-center pr-4">
              <span className="text-white text-sm md:text-normal italic mr-8">
                © 2023 JogueirosFC. Todos os direitos reservados - CNPJ:
                59.546.515/0045-55
              </span>
            </div>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
