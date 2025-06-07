<script setup>
onMounted(() => {
    import('flowbite').then(({ Carousel }) => {
        const carouselEl = document.getElementById('default-carousel')
        const items = carouselEl?.querySelectorAll('[data-carousel-item]') ?? []

        const instance = new Carousel(carouselEl, {
            defaultPosition: 0,
            interval: 5000, // autoplay cada 5 segundos
            indicators: {
                activeClasses: 'bg-white',
                inactiveClasses: 'bg-gray-300',
            },
        })

        instance.cycle() // inicia autoplay
    })
})

const images = [
    '/img/carrusel-1.png',
    '/img/carrusel-2.jpg',
    '/img/carrusel-1.jpg',
    '/img/carrusel-3.jpg',
    '/img/carrusel-4.jpg',
]
</script>
<template>
    <!-- Hero de pagina -->
    <section class="bg-white dark:bg-gray-950 mt-23">
        <div class="max-w-screen px-4 py-42 mx-auto bg-img">
            <div class="flex flex-col items-center">
                <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span
                        class="text-[#150484]">Educación con
                        valores</span> y excelencia</h1>
                <p class="text-center max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl">
                    Formamos personas desde el nivel inicial hasta el secundario con un enfoque integral, moderno y
                    humano.
                </p>
                <div class="flex flex-row">
                    <a href="/sobre-nosotros"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">
                        Conocer mas
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L13.586 9H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Seccion Carrreras escolares -->

    <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900">Conoce las Menciones que
                    ofrece la <br />E.T.N Manuel Atanasio Girardot</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-600 text-center px-10">Las menciones que ofrece
                    nuestra escuela técnica es una oportunidad para todo joven que desee alcanzar una gran profesión y
                    tener un futuro profesional para ejercer, por eso he aquí donde encontrarás los nombres y la
                    información de cada una de ellas.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 justify-center">
                <div class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer"">
                    <div class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12
                    lg:w-12 dark:bg-primary-900 bg-[#150484]">
                    <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2" />
                    </svg>
                </div>
                <h3 class="mb-2 text-xl font-bold text-gray-900">Administracion</h3>
                <p class="text-gray-500 dark:text-gray-700 text-center">Carrera enfocada en la gestión eficiente de
                    recursos, liderazgo organizacional y toma de decisiones estratégicas para el éxito empresarial.</p>
            </div>
            <a href="blog/aduana"
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">

                    <div
                        class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12
                bg-[#150484]">
                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Aduana</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera orientada al control, gestión y regulación
                del comercio exterior, garantizando el cumplimiento de normativas aduaneras y fiscales.</p>
        
            </div>
            </a>
        <div
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-[#150484]">
                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                    <path
                        d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z">
                    </path>
                </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Contabilidad</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera centrada en el registro, análisis e
                interpretación de la información financiera para la toma de decisiones en organizaciones públicas y
                privadas.</p>
        </div>
        <div
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12
            lg:w-12 bg-[#150484]">
                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"></path>
                </svg>

            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Electricidad</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera técnica enfocada en la instalación,
                mantenimiento y supervisión de sistemas eléctricos, promoviendo la seguridad y eficiencia energética.
            </p>
        </div>
        <div
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12
            bg-[#150484]">
                <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z">
                    </path>
                </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Economia Digital</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera orientada al uso estratégico de tecnologías
                digitales, datos y plataformas online para impulsar modelos de negocio innovadores y transformar la
                economía global.</p>
        </div>
        <div
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class=" text-center flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#150484]
            lg:h-12 lg:w-12">

                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                        clip-rule="evenodd" />
                </svg>

            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Turismo</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center"> Carrera enfocada en la gestión y promoción de
                actividades turísticas, impulsando el desarrollo sostenible y la experiencia cultural de los destinos.
            </p>
        </div>
        <a href="blog/telematica"
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class=" text-center flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#150484]
            lg:h-12 lg:w-12">
                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 " fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900">Telematica</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera que combina telecomunicaciones y tecnologías
                de la información para diseñar, implementar y mantener redes y sistemas de comunicación eficientes</p>
        </a>

        <a href="/blog/telematica"
            class="flex flex-col items-center hover:scale-105 duration-300 p-4 rounded-2xl hover:bg-blue-300 transition-all cursor-pointer">
            <div class=" text-center flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#150484]
            lg:h-12 lg:w-12">
                <svg class="w-5 h-5 text-white lg:w-6 lg:h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3" stroke="#ffffff" fill="none">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="33.69" cy="32" r="24.99" stroke-linecap="round"></circle>
                        <polygon points="33.43 20.18 22.84 27.88 26.89 40.32 39.98 40.32 44.02 27.88 33.43 20.18"
                            stroke-linecap="round"></polygon>
                        <polyline points="40.41 7.92 33.43 13.48 26.59 8.04" stroke-linecap="round"></polyline>
                        <line x1="33.43" y1="20.18" x2="33.43" y2="13.48" stroke-linecap="round"></line>
                        <polyline points="58.68 32 50.6 25.92 53.78 17.14" stroke-linecap="round"></polyline>
                        <polyline points="40.72 55.99 44.02 46.39 54.05 46.49" stroke-linecap="round"></polyline>
                        <polyline points="25.61 55.65 22.55 46.39 13.26 46.39" stroke-linecap="round"></polyline>
                        <polyline points="8.7 32 15.99 25.97 13.16 17.76" stroke-linecap="round"></polyline>
                        <line x1="22.84" y1="27.88" x2="15.99" y2="25.97" stroke-linecap="round"></line>
                        <line x1="26.89" y1="40.32" x2="22.55" y2="46.39" stroke-linecap="round"></line>
                        <line x1="39.98" y1="40.32" x2="44.02" y2="46.39" stroke-linecap="round"></line>
                        <line x1="44.02" y1="27.89" x2="50.6" y2="25.92" stroke-linecap="round"></line>
                    </g>
                </svg>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 text-center">Promotor de entrenamiento deportivo</h3>
            <p class="text-gray-500 dark:text-gray-700 text-center">Carrera orientada a la preparación física,
                planificación de rutinas y promoción de hábitos saludables, formando profesionales capaces de guiar y
                motivar en el ámbito del deporte y la actividad física.</p>
        </a>
        </div>
        </div>
    </section>

    <section class="bg-white dark:bg-gray-950">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4  text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Conoce la historia de
                    nuestra escuela E.T.N “Manuel Atanasio Girardot</h2>
                <p class="mb-4"> La E.T.C. "Manuel Atanasio Girardot", fundada el 29 de enero de 1973, busca formar
                    tecnólogos eficientes con valores morales y culturales. Con el apoyo del Ministerio de Educación,
                    directivos, docentes y empresarios, la institución ha reestructurado su especialidad técnica para
                    ofrecer una formación integral. El objetivo es que los estudiantes desarrollen conocimientos
                    generales, pensamiento crítico, disciplina y habilidades en comercio y servicios administrativos,
                    facilitando su incorporación al mercado laboral. </p>

                <a href="/sobre-nosotros"
                    class="mt-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">
                    Leer mas
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L13.586 9H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>

            <img src="../public/img/carrusel-1.jpg" alt="" class="w-full h-auto rounded-lg shadow-lg">
        </div>

    </section>

    <section class="bg-white">
        <div class="gap-4 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
            <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-center text-4xl tracking-tight font-bold text-gray-900">Un vistazo a algunos de
                    nuestros momentos</h2>
                <p class="text-center mb-6 text-gray-700 font-normal">Sumérgete en nuestra galería y revive la historia,
                    los logros y la vibrante vida de la E.T.C. "Manuel Atanasio Girardot". Cada imagen captura un
                    pedacito de nuestra comunidad, desde eventos memorables hasta el día a día de nuestros estudiantes y
                    docentes, reflejando el compromiso con la formación integral y el futuro de Venezuela.</p>
            </div>
            <div class="grid grid-cols-4 gap-4">
                <img src="../public/img/carrusel-1.jpg" alt=""
                    class="w-full h-auto rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
                <img src="../public/img/carrusel-2.jpg" alt=""
                    class="w-full h-auto rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
                <img src="../public/img/carrusel-3.jpg" alt=""
                    class="w-full h-auto rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
                <img src="../public/img/carrusel-4.jpg" alt=""
                    class="w-full h-auto rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
            </div>
            <div class="grid grid-cols-2 grid-rows-1 gap-4">
                <img src="../public/img/carrusel-5.jpg" alt=""
                    class="w-full h-80 rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
                <img src="../public/img/carrusel-1.jpg" alt=""
                    class="w-full h-80 rounded-lg shadow-lg hover:scale-102 transition-all cursor-pointer">
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div class="flex flex-row mx-auto max-w-screen-xl py-8 px-5">
            <div class="w-1/2">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900">Contáctanos</h2>
                <p class="mb-6 text-gray-700 font-normal">¿Tienes dudas? Escríbenos y te responderemos lo antes posible.
                </p>
                <div class="flex flex-row gap-2">
                    <a href="https://www.facebook.com/profile.php?id=61576302114497&rdid=KiXO4FNqYAbqnAkd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16ShF2pzJW%2F#"
                        class="flex flex-col p-3 rounded-full text-white bg-[#150484] hover:bg-blue-400 transition-all items-center cursor-pointer">
                        <svg className="w-8 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/e.t.c.n_manuelatanasiogirardot?igsh=MWtxbHhlaGF5aXM0cw=="
                        class="flex flex-col p-3 rounded-full text-white bg-[#150484] hover:bg-blue-400 transition-all items-center cursor-pointer">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@e.t.n.manuel.atanasio?_t=ZM-8wt6LM8p46P&_r=1"
                        class="flex flex-col p-3 rounded-full text-white bg-[#150484] hover:bg-blue-400 transition-all items-center cursor-pointer">
                        <svg class="size-5.5 hover:text-[#250e8f] transition-all text-gray-800 dark:text-white"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 449.45 515.38">
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div class="w-1/2">
                <h2 class="mb-4  text-4xl tracking-tight font-bold text-gray-900">Ubicación</h2>
                <p class="mb-6 text-gray-700 font-normal">Ven a visitarnos o conoce dónde estamos ubicados.</p>
                <div class="w-full h-1/2 md:h-full rounded-md overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.9698012310487!2d-67.5852299!3d10.2640168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803b452e825e31%3A0x7aa73765bd6f13b3!2sE.T.C.N%20Manuel%20Atanasio%20Girardot!5e0!3m2!1ses-419!2suk!4v1748925379254!5m2!1ses-419!2suk"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.bg-img {
    background-image: url('../assets/img/bg-hero.jpg');
    background-size: cover;
    background-position: center;
}

.bg-img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.897);
    /* negro con opacidad */
    z-index: 1;
}

.bg-img>* {
    position: relative;
    z-index: 2;
}
</style>