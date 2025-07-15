<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const svgColors = ref([])
const items = [
    'Emprendimiento e Innovación',
    'Marketing Digital',
    'Comercio Electrónico',
    'Economía Digital',
    'Análisis y Ciencia de Datos',
    'Consultoría en Transformación Digital',
]

//-- VARIABLES DE TEST --//
const showResult = ref(false)
const selectedAnswers = ref([])
const correctAnswers = ['B', 'C', 'C', 'C']
const score = ref(0)
const showModal1 = ref(false)


// Modal para mostrar el test
const calcularResultado = () => {
    let puntos = 0
    selectedAnswers.value.forEach((respuesta, index) => {
        if (respuesta === correctAnswers[index]) {
            puntos += 25
        }
    })
    score.value = puntos
    showModal1.value = false
    showResult.value = true
}

const reiniciarTest = () => {
    // Reinicia el score y vuelve a mostrar el modal de preguntas
    score.value = 0
    showModal1.value = true
    showResult.value = false

    // Limpia las respuestas seleccionadas
    selectedAnswers.value = [];
}

const closetModalResult = () => {
    score.value = 0
    showResult.value = false
    selectedAnswers.value = [];
}

const obtenerMensaje = () => {
    if (score.value === 100) return "🎉 ¡Excelente! Has dominado el tema de la Economia Digital.";
    if (score.value >= 75) return "💪 Muy bien, tienes buen conocimiento.";
    if (score.value >= 50) return "👍 Aceptable, pero aún puedes mejorar.";
    if (score.value >= 25) return "🧐 Necesitas repasar un poco más.";
    return "😅 No acertaste ninguna. ¡Intenta de nuevo!";
}

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
                <h1 class="text-center mb-4 text-3xl font-bold md:text-5xl lg:text-6xl gradient-text">Conecta los negocios con<br> la Economia Digital</h1>
                <p class="text-center max-w-2xl mb-6 font-normal gradient-p lg:mb-8 md:text-lg lg:text-xl">Explora una carrera que une negocios, innovación y tecnología.
                  Pon a prueba lo aprendido con un test interactivo y descubre si estás listo para liderar el mundo digital con la Economía Digital.
                </p>
                <div class="flex flex-col sm:flex-row">
                    <div @click="showModal1 = true" 
                        class="mb-2 sm:mb-0 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">Relizar
                        Test</div>
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
                            d="M9.57909 21.7008c5.35781 1.3356 10.78401-1.9244 12.11971-7.2816 1.3356-5.35745-1.9247-10.78433-7.2822-12.11995C9.06034.963624 3.6344 4.22425 2.2994 9.58206.963461 14.9389 4.22377 20.3652 9.57909 21.7008ZM14.2085 8.0526c1.3853.47719 2.3984 1.1925 2.1997 2.5231-.1441.9741-.6844 1.4456-1.4013 1.6116.9844.5128 1.485 1.2987 1.0078 2.6612-.5915 1.6919-1.9987 1.8347-3.8697 1.4807l-.454 1.8196-1.0972-.2734.4481-1.7953c-.2844-.0706-.575-.1456-.8741-.2269l-.44996 1.8038-1.09594-.2735.45407-1.8234c-.10059-.0258-.20185-.0522-.30385-.0788-.15753-.0411-.3168-.0827-.47803-.1231l-1.42812-.3559.54468-1.2563s.80844.215.7975.1991c.31063.0769.44844-.1256.50282-.2606l.71781-2.8766.11562.0288c-.04375-.0175-.08343-.0288-.11406-.0366l.51188-2.05344c.01375-.23312-.06688-.52719-.51125-.63812.01718-.01157-.79688-.19813-.79688-.19813l.29188-1.17187 1.51313.37781-.0013.00562c.2275.05657.4619.11032.7007.16469l.4497-1.80187 1.0965.27343-.4406 1.76657c.2944.06718.5906.135.8787.20687l.4375-1.755 1.0975.27344-.4493 1.8025Z" />
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
            <img class="w-full rounded-xl" src="../../assets/img/economia11.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 colorblan">¿Qué es la
                    Economia Digital?
                </h2>
                <p class="colorblan mb-6 font-normal text-gray-500 md:text-lg">La economía digital se refiere al uso intensivo de
                    las tecnologías de la información y comunicación (TIC) en la producción, comercialización y consumo
                    de bienes y servicios. Este modelo transforma industrias tradicionales y genera nuevos modelos de
                    negocio basados en la conectividad global y la digitalización.
                    Desde la banca digital hasta el comercio electrónico, la economía digital está presente en múltiples
                    sectores, permitiendo mayor eficiencia, accesibilidad y alcance mundial.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-6">
            <h2 class="mb-8 text-3xl lg:text-5xl tracking-tight font-bold text-gray-950 text-center"> Las tres
                características principales de la economía digital
            </h2>
            <div class="flex gap-4 flex-wrap justify-center">
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                            clip-rule="evenodd" />
                    </svg>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-[#150484]">Infraestructura
                        tecnológica</h5>
                    <p class=" colorne font-normal text-gray-800 text-center">Incluye hardware, software y talento humano
                        especializado que sostiene el funcionamiento de los negocios digitales.</p>
                </div>
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight  text-[#150484] text-center">Negocio electrónico
                    </h5>
                    <p class="colorne font-normal text-gray-800 text-center">Se refiere a la gestión y operación de procesos
                        mediante plataformas digitales y herramientas informáticas.</p>
                </div>
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight  text-[#150484] text-center">Comercio electrónico
                    </h5>
                    <p class="colorne font-normal text-gray-800 text-center">La compra y venta de productos y servicios a través
                        de Internet, facilitando transacciones rápidas y seguras.</p>
                </div>
            </div>

        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-center flex-col sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Sectores transformados por
                    la economía digital
                </h2>
                <p class="colorne mb-6 font-normal text-gray-900 md:text-lg">
                    Sectores tradicionales como la agricultura están incorporando tecnologías digitales que permiten
                    monitoreo remoto, análisis de datos en tiempo real y gestión eficiente de recursos, mejorando la
                    productividad y sostenibilidad.
                </p>
            </div>
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/economiaa.jpg"
                    alt="dashboard image">
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-start flex flex-col-reverse sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/economia33.jpg"
                    alt="dashboard image">
            </div>
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Ventajas de la economía
                    digital</h2>
                <ul>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Acceso a información: Facilita la toma de decisiones informadas gracias a datos
                            disponibles en tiempo real y opiniones de usuarios.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Cercanía: Comunicación directa y rápida entre clientes y empresas a través de múltiples
                            canales digitales.</strong>
                    </li>
                    <li class="icon-list-item">

                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Seguridad: Transacciones digitales protegidas con tecnología avanzada, como la
                            autenticación reforzada.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Presencia global: Empresas pueden ofrecer productos y servicios sin límites
                            geográficos.</strong>
                    </li>

                </ul>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="w-full flex flex-col lg:mb-12 lg:flex-row justify-between items-start pt-0 pb-2 px-4 mx-auto max-w-screen-xl">
            <div class="w-full lg:w-1/2">
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Estudio Clave / Asignaturas
                    Principales</h2>
                <ul>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Tecnologías de la Información y la Comunicación (TIC)</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Economía Digital y Comercio Electrónico</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Análisis de Datos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Marketing Digital</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Emprendimiento e Innovación</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Matemáticas y Estadística Aplicada</strong>
                    </li>

                </ul>
            </div>

            <div class="w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">El futuro de la economía
                    digital y la innovación tecnológica
                </h3>
                <P><strong>Vivimos una transformación sin precedentes, donde la tecnología redefine cómo producimos, consumimos y nos conectamos. La economía digital impulsa nuevos modelos de negocio basados en datos, automatización e inteligencia artificial. En este entorno, la innovación no es una opción: es el motor del crecimiento. Prepararse para este futuro significa desarrollar habilidades digitales, emprender con visión global y adaptarse a un mundo en constante evolución.</strong></P>
            </div>
        </div>

        <div class="gap-8 flex flex-col lg:flex-row items-start py-8 px-4 mx-auto max-w-screen-xl  ">
            <div class="md:mt-0 w-full lg:w-1/2">
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Oportunidades Futuras</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Consultoría en Transformación Digital</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Análisis y Ciencia de Datos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Gestión de Comercio Electrónico</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Marketing Digital y Publicidad Online</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Desarrollo de Nuevos Modelos de Negocio Digital</strong>
                    </li>

                </ul>
            </div>

            <div  class="md:mt-0 w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">¿Por que estudiar
                    Electricidad?
                </h3>
                <strong>Estudiar Economía Digital te prepara para entender y aprovechar el impacto de las tecnologías
                    digitales en los negocios y la economía global. Esta carrera ofrece oportunidades en áreas como
                    comercio electrónico, análisis de datos, marketing digital y transformación digital, sectores en
                    rápido crecimiento. Además, te permite desarrollar habilidades para innovar y adaptarte a un mercado
                    cada vez más digitalizado y competitivo.</strong>

            </div>
        </div>



    </section>

    <section class="bg-gray-950">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden rounded-xl" src="../../assets/img/foto4.jpg" alt="dashboard image">
            <img class="w-full rounded-xl hidden dark:block" src="../../assets/img/economia22.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 colorblan">Perfil del Estudiante
                </h2>
                <p class="colorblan mb-6 font-normal text-gray-500 md:text-lg">El estudiante de economía digital se caracteriza
                    por combinar conocimientos en economía, tecnología y análisis de datos, lo que le permite comprender
                    y aprovechar las oportunidades que ofrecen las plataformas digitales y los nuevos modelos de
                    negocio. Este perfil requiere habilidades analíticas, capacidad para la innovación, manejo de
                    herramientas digitales y una visión estratégica orientada a la transformación digital.</p>
            </div>
        </div>
    </section>


    <button @click="showModal1 = true" data-popover-target="popover-animation" id="extralarge-modal" type="button"
        class="text-white bg-[#150484] focus:ring-4 focus:outline-none cursor-pointer focus:ring-blue-300 font-medium rounded-full fixed bottom-6 right-6 text-sm px-5 py-5 text-center transition-all hover:scale-101 "><svg
            class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
                d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                clip-rule="evenodd" />
        </svg>
    </button>

    <div data-popover id="popover-animation" role="tooltip"
        class="absolute z-10 inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-1 dark:text-gray-400 dark:border-gray-900 dark:bg-gray-950">
        <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-800 dark:bg-gray-900">
            <h3 class="font-semibold text-gray-900 dark:text-white">Realiza nuestro test</h3>
        </div>
        <div class="px-3 py-2">
            <p>Haga click aqui para hacer la pequeña encuesta</p>
        </div>
        <div data-popper-arrow></div>
    </div>

    <transition name="fade">
        <div v-if="showModal1"
            class="fixed w-full inset-0 z-50 flex items-center justify-center bg-[#000000ec] bg-opacity-50 px-4 py-8">
            <transition name="scale">
                <div
                    class="bg-white dark:bg-gray-950 rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in">
                    <!-- HEADER -->
                    <div class="flex items-center justify-between p-5 border-b border-gray-200 dark:border-gray-900">
                        <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">🎉Bienvenido a
                            nuestro test sobre la Economia digital</h3>
                        <button @click="showModal1 = false"
                            class="cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                            <svg class="w-3 h-3" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <!-- BODY -->
                    <div class="py-6 px-4 sm:px-18 space-y-4 text-gray-700 dark:text-gray-300">
                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 1: ¿Qué es la economía digital?</h2>
                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'A'
                                }">

                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q1" value="A"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>El estudio de los minerales preciosos.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'B'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q1" value="B"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>La economía que se basa en el uso de tecnologías digitales para producir, distribuir y consumir bienes y servicios. </p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q1" value="C"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Un tipo de contabilidad automatizada.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q1" value="D"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>El comercio realizado únicamente con tarjetas de crédito.</p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 2: ¿Cuál de los siguientes elementos es fundamental en la economía digital?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[1] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[1] !== 'A'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q2" value="A"
                                        v-model="selectedAnswers[1]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>La maquinaria pesada.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[1] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[1] !== 'B'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q2" value="B"
                                        v-model="selectedAnswers[1]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Las transacciones en efectivo.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[1] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[1] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q2" value="C"
                                        v-model="selectedAnswers[1]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>El acceso a internet y las plataformas digitales</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[1] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[1] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q2" value="D"
                                        v-model="selectedAnswers[1]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>La agricultura tradicional.

                                    </p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 3: ¿Qué es el comercio electrónico (e-commerce)?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'A'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q3" value="A"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Una forma de distribución de alimentos frescos.</p>
                                </div>
                            </label>

                            <label class="flex items-center transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'B'
                                }">
                                <div
                                    class="flex items-center p-2 hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q3" value="B"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>La venta de productos exclusivamente por televisión.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q3" value="C"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>El proceso de comprar y vender productos o servicios a través de plataformas digitales.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q3" value="D"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Una técnica para generar electricidad en línea.</p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-4">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 4: ¿Cuál de los siguientes es un beneficio de la economía digital?</h2>

                            <label class="flex items-center p-2  transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'A'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q4" value="A"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Aumento del uso de papel en las oficinas.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'B'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q4" value="B"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Reducción de la conectividad global.</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2  transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q4" value="C"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Acceso a mercados más amplios y mejora en la eficiencia operativa.</p>
                                </div>
                            </label>
                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input class="hidden" type="radio" name="q4" value="D"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Disminución de la productividad laboral.</p>
                                </div>

                            </label>
                        </div>
                    </div>

                    <!-- FOOTER -->
                    <div class="flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-900">
                        <button @click="calcularResultado()"
                            class="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Mostrar
                            resultado 🖍️</button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>

    <transition name="fade">
        <div v-if="showResult"
            class="fixed inset-0 z-50 flex items-center justify-center bg-[#000000ec] bg-opacity-50 px-4 py-8">
            <div class="bg-white dark:bg-gray-950 rounded-2xl shadow-lg w-full max-w-xl p-8">
                <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">🎯 Resultado del Test</h2>
                <p class="text-xl text-center text-gray-700 dark:text-gray-300">Obtuviste <strong>{{ score }}%</strong>
                    de respuestas correctas.</p>
                <p class="text-lg text-center text-gray-700 dark:text-gray-300 italic">
                    {{ obtenerMensaje() }}
                </p>

                <div class="mt-6 text-center">

                    <button @click="reiniciarTest()"
                        class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg mr-3">
                        🔁 Volver a intentar
                    </button>
                    <button @click="closetModalResult()"
                        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </transition>

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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: transform 0.25s ease;
}

.scale-enter-from,
.scale-leave-to {
    transform: scale(0.95);
}

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

@media screen and (max-width: 369px) {}
</style>