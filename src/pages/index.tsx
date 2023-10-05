/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let perView;
  let spacing;
  let isMdScreen;

  if (typeof window !== "undefined") {
    isMdScreen = window.innerWidth < 1000;
    perView = isMdScreen ? 1.3 : 2.9;
    spacing = isMdScreen ? 10 : 35;
  }

  console.log(currentSlide);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    mode: "free",
    loop: true,
    slides: { origin: "auto", perView, spacing },
    range: {
      min: -5,
      max: 5
    }
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full custom-background">
        <div className="w-full flex items-center justify-between bg-[#343236] md:bg-transparent">
          <div className="w-full flex items-center text-white gap-8">
            <div className="p-3 pl-4">
              <Link href="/">
                <img
                  className="w-24 h-20 object-contain"
                  src="/images/logo.svg"
                />
              </Link>
            </div>
            <div className="h-16 border-r-2 md:block hidden" />
            <div className="md:block hidden flex items-center gap-11 z-50">
              <Link
                href="/"
                className="font-light pr-14 2xl:text-xl hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="/"
                className="font-light pr-14 2xl:text-xl hover:text-gray-300"
              >
                Features
              </Link>
              <Link
                href="/"
                className="font-light pr-14 2xl:text-xl hover:text-gray-300"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="font-light pr-14 2xl:text-xl hover:text-gray-300"
              >
                Contato
              </Link>
            </div>
          </div>
          <div className="mr-6 2xl:mr-8 md:block hidden">
            <button
              className="bg-[#343236] text-white 2xl:px-8 2xl:py-3 px-6 py-3 shadow-xl rounded-lg font-normal text-lg 2xl:text-xl"
              style={{ whiteSpace: "nowrap" }}
            >
              Baixar Grátis
            </button>
          </div>
          <div className="relative">
            <div
              className="flex items-center justify-center md:hidden cursor-pointer"
              onClick={toggleModal}
            >
              <img
                src="/images/hamburguer.svg"
                alt=""
                className="object-cover mr-6"
              />
            </div>
            {modalOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-[#343236] z-50 flex flex-col items-center">
                <div
                  className="w-full flex items-end justify-end pr-5 pt-5 text-white cursor-pointer"
                  onClick={toggleModal}
                >
                  <img src="/images/x.svg" alt="" />
                </div>
                <div className="w-full flex items-center justify-center mt-8">
                  <img src="/images/logo.svg" alt="" />
                </div>
                <div className="w-full flex flex-col gap-8 items-center justify-center mt-14">
                  <Link
                    href="/"
                    className="font-light text-xl text-white hover:text-gray-300"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="font-light text-xl text-white hover:text-gray-300"
                  >
                    Features
                  </Link>
                  <Link
                    href="/"
                    className="font-light text-xl text-white hover:text-gray-300"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    className="font-light text-xl text-white hover:text-gray-300"
                  >
                    Contato
                  </Link>
                  <button
                    className="bg-[#42BD3D] text-white 2xl:px-8 2xl:py-3 px-8 py-3 rounded-md font-normal text-lg 2xl:text-xl mt-5 drop-shadow"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Baixar Grátis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex-col md:flex-row flex items-center pb-10">
          <div className="md:w-1/2 w-full h-screen flex flex-col items-start justify-center md:justify-start md:pl-32 md:pt-14">
            <div className="flex items-center ml-8 md:ml-0 gap-2">
              <div className="inline-block rounded-full bg-[#343236] text-white p-2">
                <div className="flex items-center gap-2 font-light">
                  <div className="rounded-full bg-green-300/25 p-1">
                    <img src="/images/round.svg" alt="" className="w-8 h-8" />
                  </div>
                  Team Management App
                </div>
              </div>
              <img src="/images/point.svg" alt="" className="w-9 -ml-8 -mt-9" />
            </div>
            <div className="flex flex-col inline-block ml-8 md:ml-0 mt-6 mr-10">
              <span className="text-white font-bold md:text-4xl 2xl:text-6xl text-3xl text-left">
                DOMINE O JOGO COM UM TIME CAMPEÃO!
              </span>
              <span className="text-white md:text-normal 2xl:text-lg text-sm mt-4 md:mr-0 mr-2 font-light">
                Alcance a vitória de forma completa, tenha estratégias avançadas
                e análises de desempenho em tempo real para seu time de futebol.
              </span>
            </div>
            <div className="pl-5 md:pl-0 w-full flex flex-col items-start">
              <div className="flex items-center justify-center md:justify-start mt-6 gap-4">
                <Link href="https://play.google.com/store" target="_blank">
                  <img
                    src="/images/googleplay.png"
                    alt=""
                    className="w-72 object-contain"
                  />
                </Link>
                <Link href="https://play.google.com/store" target="_blank">
                  <img
                    src="/images/appstore.png"
                    alt=""
                    className="w-72 object-contain"
                  />
                </Link>
              </div>
              <div className="flex justify-start items-start my-10 w-full">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-center">
                    <img
                      src="/images/group_people.svg"
                      alt=""
                      className="h-28 object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center -mt-8 -ml-10">
                  <img
                    src="/images/dotted.svg"
                    alt=""
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-screen w-full flex items-center justify-center">
            <img
              src="/images/group_phone_1.svg"
              alt=""
              className="h-full w-full object-contain p-5"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative z-40 -mb-10">
          <img
            src="/images/button.svg"
            alt=""
            className="object-contain md:block hidden w-12"
          />
        </div>
      </div>
      <div className="flex w-full items-center flex-col md:flex-row md:h-screen bg-[#343236] justify-between">
        <div className="md:w-1/2 w-full h-full relative">
          <img
            src="/images/player_soccer.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 pl-8 pb-10 md:pb-0 w-full md:h-screen flex flex-col relative">
          <div className="h-full w-full md:mt-0 pr-4 pt-5 2xl:pt-14">
            <h1 className="text-green-600 md:text-2xl 2xl:text-3xl text-2xl font-normal">
              Junte-se a nós
            </h1>
            <h2 className="my-4 md:text-4xl text-2xl 2xl:text-5xl font-bold text-white">
              A VIDA É UM JOGO E PRECISAMOS DE GOLS
            </h2>
            <div>
              <span className="font-light text-gray-300 text-white text-normal 2xl:text-xl">
                Descubra o app perfeito para apaixonados por futebol!
                <br /> Mantenha seus jogos organizados, registre os resultados
                do seu time e acompanhe a agenda dos próximos desafios de forma
                prática e eficiente.
              </span>
            </div>
            <div className="w-24 rounded-full bg-green-600 mt-4 h-1" />
            <div className="flex flex-col gap-4 2xl:gap-8 w-full mt-6 2xl:mt-10">
              <div className="flex items-center text-xl 2xl:text-2xl font-normal text-white">
                <img src="/images/radio.svg" alt="" className="w-8 2xl:w-10" />
                Banners profissionais
              </div>
              <div className="flex items-center text-xl 2xl:text-2xl font-normal text-white">
                <img src="/images/radio.svg" alt="" className="w-8 2xl:w-10" />
                Gráficos e estatísticas detalhadas
              </div>
              <div className="flex items-center text-xl 2xl:text-2xl font-normal text-white">
                <img src="/images/radio.svg" alt="" className="w-8 2xl:w-10" />
                Agenda de Jogos
              </div>
              <div className="flex items-center text-xl 2xl:text-2xl font-normal text-white">
                <img src="/images/radio.svg" alt="" className="w-8 2xl:w-10" />
                Gerenciamento de times
              </div>
              <div className="flex items-center text-xl 2xl:text-2xl font-normal text-white">
                <img src="/images/radio.svg" alt="" className="w-8 2xl:w-10" />
                Análise de jogadores
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center right-0 h-full items-end absolute">
          <img
            src="/images/rounded_right.svg"
            alt=""
            className="md:block hidden -mb-20 z-40"
          />
        </div>
      </div>
      <div className="w-full h-full bg-[#343236] flex items-center justify-center">
        <div className="flex flex-col w-full h-full bg-[url('/images/vector_1.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-center justify-center md:flex-row w-full md:h-screen h-full">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="w-full h-full hidden md:block flex items-center justify-center pr-10">
                <div className="w-full flex flex-col items-end justify-center">
                  <div className="flex items-center">
                    <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-white text-center md:text-right">
                      BANNERS
                      <br />
                      PROFISSIONAIS
                    </h1>
                    <div className="ml-4 w-44 md:h-20 2xl:h-24 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
                  </div>
                </div>
                <div className="w-full flex items-center md:justify-end justify-center mt-4">
                  <span className="md:text-right text-center md:px-0 md:ml-10 px-10 font-normal text-gray-300 text-lg 2xl:text-xl">
                    Faça seu time brilhar nas redes sociais, impressione seus
                    adversários e atraia torcedores de todos os cantos com
                    designs profissionais e personalizados. Deixe a concorrência
                    no chinelo com banners únicos e arrasadores. Diga adeus à
                    mesmice e mergulhe em um mundo de criatividade e vitórias,
                    porque o seu time merece brilhar como nunca!
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full flex items-center justify-center text-center p-10">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="/images/group_phone_2.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full h-full md:hidden block py-10">
              <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center md:mt-24">
                <h1 className="text-3xl font-bold text-white text-center md:text-right">
                  BANNERS
                  <br />
                  PROFISSIONAIS
                </h1>
                <div className="ml-4 w-44 md:h-20 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
              </div>
              <div className="w-full flex items-center justify-center mt-8">
                <span className="text-center px-10 font-normal text-gray-300">
                  Faça seu time brilhar nas redes sociais, impressione seus
                  adversários e atraia torcedores de todos os cantos com designs
                  profissionais e personalizados. Deixe a concorrência no
                  chinelo com banners únicos e arrasadores. Diga adeus à mesmice
                  e mergulhe em um mundo de criatividade e vitórias, porque o
                  seu time merece brilhar como nunca!
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full h-full md:h-screen justify-between md:pl-8">
            <div className="md:w-1/2 w-full h-full flex items-center justify-center text-center p-10">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="/images/group_phone_3.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center md:pl-10 py-10">
              <div className="w-full flex flex-col md:flex-row items-center md:justify-start justify-center">
                <div className="mr-4 h-20 w-1 bg-green-600 rounded-full hidden md:block 2xl:h-24" />
                <h1 className="text-3xl 2xl:text-5xl font-bold text-white text-center md:text-left">
                  GRÁFICOS E
                  <br />
                  ESTATÍSTICAS
                </h1>
                <div className="md:pr-4 md:h-20 md:w-1 w-32 mt-2 md:mt-0 h-1 bg-green-600 rounded-full md:hidden block" />
              </div>
              <div className="w-full flex items-center md:justify-start justify-center px-10 md:px-0 mt-4">
                <span className="md:text-left text-center font-normal text-gray-300 md:text-lg md:pr-20 2xl:text-xl pt-5">
                  Deixe a magia dos números trabalhar a seu favor! Com nossos
                  gráficos e estatísticas incríveis, você terá o poder de
                  transformar dados em vitórias! Descubra os segredos ocultos
                  nos números, analise o desempenho do seu time como um
                  verdadeiro detetive esportivo e surpreenda-se com insights
                  poderosos. Afinal, o jogo não é só sobre gols, é sobre
                  estratégia e ciência!
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row w-full md:h-screen h-full md:h-screen">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="w-full h-full hidden md:block flex items-center justify-center pr-10">
                <div className="w-full flex flex-col items-end justify-center">
                  <div className="flex items-center">
                    <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-white text-center md:text-right">
                      AGENDA DE
                      <br />
                      JOGOS
                    </h1>
                    <div className="ml-4 w-44 md:h-20 2xl:h-24 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
                  </div>
                </div>
                <div className="w-full flex items-center md:justify-end justify-center mt-4">
                  <span className="md:text-right text-center md:px-0 md:ml-10 px-10 font-normal text-gray-300 text-lg 2xl:text-xl">
                    Chega de perder jogos por falta de organização! Com nossa
                    feature de agenda de jogos, você será o mestre do cronograma
                    esportivo! Esqueça os tempos confusos de marcar jogos no
                    papel, agora é tudo digital e simples como dar um drible
                    desconcertante! Agende partidas com facilidade, receba
                    lembretes para nunca mais perder um único chute ao gol e
                    mantenha seu time no caminho certo para a vitória.
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full flex items-center justify-center text-center p-10">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="/images/group_phone_4.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full h-full md:hidden block py-10">
              <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center md:mt-24">
                <h1 className="text-3xl font-bold text-white text-center md:text-right">
                  AGENDA DE
                  <br />
                  JOGOS
                </h1>
                <div className="ml-4 w-44 md:h-20 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
              </div>
              <div className="w-full flex items-center justify-center mt-8">
                <span className="text-center px-10 font-normal text-gray-300">
                  Chega de perder jogos por falta de organização! Com nossa
                  feature de agenda de jogos, você será o mestre do cronograma
                  esportivo! Esqueça os tempos confusos de marcar jogos no
                  papel, agora é tudo digital e simples como dar um drible
                  desconcertante! Agende partidas com facilidade, receba
                  lembretes para nunca mais perder um único chute ao gol e
                  mantenha seu time no caminho certo para a vitória.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full h-full md:h-screen justify-between md:pl-8">
            <div className="md:w-1/2 w-full h-full flex items-center justify-center text-center p-10">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="/images/group_phone_5.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full flex flex-col items-center justify-center md:pl-10 py-10">
              <div className="w-full flex flex-col md:flex-row items-center md:justify-start justify-center">
                <div className="mr-4 h-20 w-1 bg-green-600 rounded-full hidden md:block 2xl:h-24" />
                <h1 className="text-3xl 2xl:text-5xl font-bold text-white text-center md:text-left">
                  GERENCIAMENTO
                  <br />
                  DE TIMES
                </h1>
                <div className="md:pr-4 md:h-20 md:w-1 w-32 mt-2 md:mt-0 h-1 bg-green-600 rounded-full md:hidden block" />
              </div>
              <div className="w-full flex items-center md:justify-start justify-center px-10 md:px-0 mt-4">
                <span className="md:text-left text-center font-normal text-gray-300 md:text-lg md:pr-20 2xl:text-xl pt-5">
                  Gerencie, motive e leve cada equipe à glória, tudo com apenas
                  alguns toques mágicos no seu celular. Aplique sua estratégia
                  em múltiplos campos, conquiste títulos em todas as ligas e
                  mostre ao mundo que você é o manager supremo! Afinal, não há
                  limites para o poder do seu dedo no futebol virtual.
                  Prepare-se para dominar os gramados, pois a conquista de
                  múltiplos campeonatos está em suas mãos (literalmente)!
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row w-full md:h-screen h-full">
            <div className="flex items-center justify-center md:w-1/2">
              <div className="w-full h-full hidden md:block flex items-center justify-center pr-10">
                <div className="w-full flex flex-col items-end justify-center">
                  <div className="flex items-center">
                    <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-bold text-white text-center md:text-right">
                      ANÁLISE DE
                      <br />
                      JOGADORES
                    </h1>
                    <div className="ml-4 w-44 md:h-20 2xl:h-24 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
                  </div>
                </div>
                <div className="w-full flex items-center md:justify-end justify-center mt-4">
                  <span className="md:text-right text-center md:px-0 md:ml-10 px-10 font-normal text-gray-300 text-lg 2xl:text-xl">
                    &quot;Vasculhe cada detalhe, desde as habilidades mágicas
                    até os pontos fracos, e torne-se o especialista em
                    escalações perfeitas. Abrace a ciência dos pés à cabeça,
                    decifre estatísticas como um gênio e monte o time dos sonhos
                    que deixará seus adversários de queixo caído. Desvende o
                    potencial oculto, pois a vitória está nos detalhes, e você
                    está pronto para brilhar!&quot;
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-full flex items-center justify-center text-center p-10">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src="/images/group_phone_6.svg"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full h-full md:hidden block py-10">
              <div className="w-full flex flex-col md:flex-row items-center md:justify-end justify-center md:mt-24">
                <h1 className="text-3xl font-bold text-white text-center md:text-right">
                  ANÁLISE DE
                  <br />
                  JOGADORES
                </h1>
                <div className="ml-4 w-44 md:h-20 md:w-1 bg-green-600 h-1 md:h-0 rounded-full mt-2 md:mt-0" />
              </div>
              <div className="w-full flex items-center justify-center mt-8">
                <span className="text-center px-10 font-normal text-gray-300">
                  &quot;Vasculhe cada detalhe, desde as habilidades mágicas até
                  os pontos fracos, e torne-se o especialista em escalações
                  perfeitas. Abrace a ciência dos pés à cabeça, decifre
                  estatísticas como um gênio e monte o time dos sonhos que
                  deixará seus adversários de queixo caído. Desvende o potencial
                  oculto, pois a vitória está nos detalhes, e você está pronto
                  para brilhar!&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full items-center justify-center md:justify-start pl-10 md:pl-32 py-24 bg-[#343236]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-lg md:text-2xl text-left font-bold text-white w-full">
            RECOMENDADO POR CENTENAS DE JOGADORES COMO VOCÊ
          </h1>
          <div className="flex items-center md:gap-8 gap-4 justify-center w-full">
            {loaded && instanceRef.current && (
              <>
                <img
                  src="/images/arrow_left.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                />
                <img
                  src="/images/arrow_right.svg"
                  alt=""
                  className="cursor-pointer"
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </>
            )}
          </div>
        </div>
        <div
          className="flex items-center justify-center w-full mt-10 md:mt-20 keen-slider"
          ref={sliderRef}
        >
          <div className="keen-slider__slide">
            <img src="/images/card1.svg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/card2.svg" alt="" />
          </div>
          <div className="keen-slider__slide">
            <img src="/images/card3.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-full gap-4 bg-[#343236] justify-center md:justify-end md:pr-32">
        <Link href="https://play.google.com/store" target="_blank">
          <img
            src="/images/googleplay.png"
            alt=""
            className="w-72 object-contain"
          />
        </Link>
        <Link href="https://play.google.com/store" target="_blank">
          <img
            src="/images/appstore.png"
            alt=""
            className="w-72 object-contain"
          />
        </Link>
      </div>
      <div className="flex w-full bg-[#343236]">
        <img
          src="/images/bottom_cover.svg"
          alt=""
          className="md:pt-24 pt-10 w-full"
        />
      </div>
      <div className="flex items-center w-full flex-col justify-center md:mt-24 pt-10 bg-white">
        <h1 className="md:text-6xl text-3xl text-[#343236] font-bold mb-10 md:mb-24">
          BLOGS E ARTIGOS
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:mb-0 mb-10">
          <Link href="#" target="_blank">
            <img src="/images/card_1.svg" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#" target="_blank">
            <img src="/images/card_2.svg" alt="" className="cursor-pointer" />
          </Link>
          <Link href="#" target="_blank">
            <img src="/images/card_3.svg" alt="" className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-8 md:px-20 my-8 md:my-24">
        <div className="bg-[#343236] flex items-center justify-between w-full rounded-2xl">
          <div className="p-8 hidden md:block">
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="flex flex-col pl-4 md:py-4 py-8 md:pl-0 md:py-0">
            <div className="flex items-center justify-end gap-4">
              <div className="bg-[#42BD3D] rounded-lg p-2">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/images/facebook_logo.svg"
                    alt=""
                    className="w-6 md:w-10"
                  />
                </Link>
              </div>
              <div className="bg-[#42BD3D] rounded-lg p-2">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/images/instagram_logo.svg"
                    alt=""
                    className="w-6 md:w-10"
                  />
                </Link>
              </div>
              <div className="bg-[#42BD3D] rounded-lg p-2 md:mr-10 mr-4">
                <Link href="https://www.instagram.com/" target="_blank">
                  <img
                    src="/images/mail_logo.svg"
                    alt=""
                    className="w-6 md:w-10"
                  />
                </Link>
              </div>
            </div>
            <div className="mt-4 text-right md:text-center pr-4">
              <span className="text-white md:text-sm text-xs md:text-normal italic pr-8">
                © 2023 JogueirosFC. Todos os direitos reservados - CNPJ:
                59.546.515/0045-55
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
