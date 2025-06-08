<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const svgColors = ref([])
const items = [
    'Tecnología',
    'Proyectos de Economía Socio productivo',
    'Programación',
    'Diseño de Software',
    'Redes',
    'Algebra',
    'ingeniería en Telemática',
    'Desarrollar y Aplicar Servicios Telemáticos',
    'Ingeniería en Redes y Comunicaciones',
    'Ingeniería en Sistemas de Información',
]

const track = ref(null)
let translateX = ref(0)
let animationFrameId
let speed = 1 // píxeles por frame (~60fps)

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

onMounted(() => {
    // Genera un color inicial para cada ítem
    svgColors.value = items.map(() => getRandomColor())

    // Cambia los colores cada 2 segundos
    setInterval(() => {
        svgColors.value = svgColors.value.map(() => getRandomColor())
    }, 2000)
})

onMounted(() => {
    const loop = () => {
        if (track.value) {
            translateX.value -= speed

            const firstItem = track.value.children[0]
            const firstItemWidth = firstItem.offsetWidth + 16 // incluye gap

            if (-translateX.value >= firstItemWidth) {
                // mueve el primer elemento al final
                track.value.appendChild(firstItem)
                translateX.value += firstItemWidth
            }
        }

        animationFrameId = requestAnimationFrame(loop)
    }

    loop()
})

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId)
})

</script>
<template>
    <!-- Hero de pagina -->
    <section class="bg-img mt-23 pt-15 pb-15">
        <div class="max-w-screen px-4 px mx-auto">
            <div class="flex flex-col items-center mb-4">
                <h1 class="text-center mb-4 text-3xl font-bold md:text-5xl lg:text-6xl gradient-text">Impulsa el
                    futuro digital con <br> la Turismo</h1>
                <p class="text-center max-w-2xl mb-6 font-normal gradient-p lg:mb-8 md:text-lg lg:text-xl">Explora
                    una
                    carrera que une redes, telecomunicaciones y tecnología. Pon a prueba lo aprendido con un test
                    interactivo y descubre si estás listo para transformar el mundo digital.</p>
                <div class="flex flex-col sm:flex-row">
                    <a href="test/telematica"
                        class="mb-2 sm:mb-0 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">Relizar
                        Test</a>
                    <a href="/"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white border-3 border-white rounded-lg hover:border-[#041184] hover:bg-[#041184] transition-all focus:ring-4">Ver
                        otras mensiones
                    </a>
                </div>
            </div>
        </div>

        <div class="overflow-hidden relative">
            <div ref="track" class="flex gap-4 whitespace-nowrap will-change-transform"
                :style="{ transform: `translateX(${translateX}px)` }">
                <div v-for="(item, index) in items" :key="index"
                    class="flex-shrink-0 py-4 px-6 rounded-full font-bold text-2xl flex items-center gradient-text">

                    <svg class="size-10 mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ stroke: svgColors[index], transition: 'stroke 0.6s ease' }">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2" />
                    </svg>

                    {{ item }}
                </div>
            </div>
        </div>
    </section>

    <!--Carrusel de palabras-->
    <section class="bg-gray-950">
        <div
            class="gap-8 items-center justify-between py-12 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
            <img class="w-full rounded-xl" src="../../assets/img/telematicaHero.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 dark:text-white">¿Que es la Telematica?
                </h2>
                <p class="mb-6 font-normal text-gray-500 md:text-lg">El concepto de telemática refiere a la combinación
                    de la informática y de la tecnología de la comunicación para el envío y la recepción de datos. La
                    noción se asocia a diferentes técnicas, procesos, conocimientos y dispositivos propios de las
                    telecomunicaciones y de la computación.</p>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-6">
            <h2 class="mb-8 text-3xl lg:text-5xl tracking-tight font-bold text-gray-950 text-center">Los 3 planos de la telemática
            </h2>
            <div class="flex gap-4 flex-wrap justify-center">
                <div class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                            clip-rule="evenodd" />
                    </svg>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#150484]">Plano del usuario</h5>
                    <p class="font-normal text-gray-800 text-center">Procesa y distribuye la
                        información que
                        llega al usuario final</p>
                </div>
                <div class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#150484] text-center">Plano de señalización y control
                    </h5>
                    <p class="font-normal text-gray-800 text-center">Maneja la comunicación entre el sistema y el
                        usuario para decisiones efectivas</p>
                </div>
                <div class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                        <path
                            d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#150484]">Plano de gestión</h5>
                    <p class="font-normal text-gray-800 text-center">Administra la información operativa y la relación
                        con operadores de red</p>
                </div>

            </div>

        </div>
    </section>

    <section class="bg-blue-100">
        <div class="gap-8 items-center flex-col sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Origen e historia de la telemática
                </h2>
                <p class="mb-6 font-normal text-gray-900 md:text-lg">
                    El término telemática fue acuñado en <strong> Francia en 1976 </strong> en el Informe Nora-Minc
                    ("Informatización de la sociedad"). Desde entonces, ha evolucionado y es conocida también como
                    Computer and Communications o Ingeniería telemática.</p>
            </div>
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/seccion-1.png"
                    alt="dashboard image">
            </div>
        </div>
    </section>
    <section class="bg-blue-100">
        <div class="gap-8 items-start flex flex-col-reverse sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/seccion-1.png"
                    alt="dashboard image">
            </div>
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Aplicaciones de la telemática</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Diseño y mejora de redes informáticas</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Facilitar trámites cotidianos vía
                            Internet</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Optimización de la calidad en la transmisión de datos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-7.5 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Sistemas avanzados para toma de decisiones en industrias, negocios y gobiernos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Tele-educación, e-commerce y administración pública digital</strong>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div class="w-full flex flex-col lg:flex-row justify-between items-start pt-0 pb-2 px-4 mx-auto max-w-screen-xl">
            <div>
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Estudio Clave / Asignaturas Principales</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Tecnología</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Proyectos de Economía Socio productivo</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Programación</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Diseño de Software</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Redes</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Algebra</strong>
                    </li>

                </ul>
            </div>

            <div>
                <h3 class="mb-4 mt-6 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Aplicaciones de la
                    telemática
                </h3>

                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Permite automatización y control remoto con menor riesgo humano</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Mejora productividad y visibilidad empresarial</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-7 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Facilita comunicación y comercio a larga distancia con rapidez y
                            eficiencia</strong>
                    </li>
                </ul>
            </div>
        </div>

        <div class="gap-8 items-start py-8 px-4 mx-auto max-w-screen-xl ">
            <div class="md:mt-0 w-full lg:w-1/2">
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Oportunidades Futuras</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>ingeniería en Telemática</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Ingeniería en Telecomunicaciones</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>OIngeniería en Redes y Comunicaciones</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Ingeniería en Sistemas de Información</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Ingeniería Informática con especialización en redes o seguridad</strong>
                    </li>
                </ul>
            </div>

        </div>

    </section>
    <section class="bg-gray-950">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden rounded-xl" src="../../assets/img/foto4.jpg" alt="dashboard image">
            <img class="w-full rounded-xl hidden dark:block" src="../../assets/img/foto4.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Perfil del Estudiante
                </h2>
                <p class="mb-6 font-normal text-gray-500 md:text-lg">El perfil de un estudiante de telemática se
                    caracteriza por una combinación de intereses, habilidades y aptitudes que le permiten desenvolverse
                    con éxito en este campo multidisciplinario. La telemática, que fusiona la informática y las
                    telecomunicaciones, requiere un conjunto específico de cualidades en sus estudiantes.</p>
            </div>
        </div>
    </section>

</template>
<style scoped>
@keyframes scroll-left {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.marquee-track {
    animation: scroll-left 15s linear infinite;
}

.bg-img {
    background: linear-gradient(135deg,
            #0c0c3c 0%,
            #030712 20%,
            #4a4a4a 40%,
            #ffffff 60%,
            #3a2ba8 80%,
            #17057f 100%);
    background-size: 300% 300%;
    animation: pulseGradient 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}

@keyframes pulseGradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.gradient-text {
    background: linear-gradient(135deg,
            #ffffff,
            #ffffff,
            #02050c,
            #06061b);
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    line-height: 80px;
    animation: pulseGradient 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}

.gradient-p {
    background: linear-gradient(135deg,
            #ffffff,
            #ffffff,
            #02050c,
            #06061b);
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: pulseGradient 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}

.gradient-animated {
    background: linear-gradient(135deg,
            #ffffff,
            #ffffff,
            #02050c,
            #06061b);
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: pulseGradient 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}

.svg-gradient {
    animation: pulseGradient 10s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
}

@media screen {}

@media screen and (max-width: 1023px) {
    .gradient-text {
        line-height: 60px;
    }
}
@media screen and (max-width: 767px) {
    .gradient-text {
        line-height: 40px;
    }
}
@media screen and (max-width: 369px) {

}
</style>