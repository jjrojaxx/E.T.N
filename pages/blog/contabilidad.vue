<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const svgColors = ref([])
const items = [
    'Contador Público',
    'Analista Financiero',
    'Legislación Tributaria',
    'Contabilidad de Costos',
    'Finanzas Empresariales',
    'Contabilidad Financiera',
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
    if (score.value === 100) return "🎉 ¡Excelente! Has dominado el tema de la telemática.";
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
                <h1 class="text-center mb-4 text-3xl font-bold md:text-5xl lg:text-6xl gradient-text">Impulsa el
                    futuro digital con <br> la Contabilidad</h1>
                <p class="text-center max-w-2xl mb-6 font-normal gradient-p lg:mb-8 md:text-lg lg:text-xl">Explora
                    una
                    carrera que une redes, telecomunicaciones y tecnología. Pon a prueba lo aprendido con un test
                    interactivo y descubre si estás listo para transformar el mundo digital.</p>
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
                            d="M3 15v3c0 .5523.44772 1 1 1h10.5M3 15v-4m0 4h11M3 11V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v5M3 11h18m0 0v1M8 11v8m4-8v8m4-8v2m1 4h2m0 0h2m-2 0v2m0-2v-2" />
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
            <img class="w-full rounded-xl" src="../../assets/img/contablida.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 dark:text-white">¿Que es la
                    Contabilidad?
                </h2>
                <p class="mb-6 font-normal text-gray-500 md:text-lg">La contabilidad es una disciplina que se encarga de
                    registrar, clasificar y resumir todas las operaciones económicas y financieras de una organización o
                    individuo. Su propósito es ofrecer información clara, precisa y útil para la toma de decisiones, el
                    control de recursos y el cumplimiento de obligaciones legales y fiscales.
                    Gracias a la contabilidad, se puede conocer en todo momento la situación económica de una empresa,
                    evaluar su rentabilidad, gestionar sus recursos y planificar su crecimiento.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-6">
            <h2 class="mb-8 text-3xl lg:text-5xl tracking-tight font-bold text-gray-950 text-center">Preguntas
                frecuentes sobre contabilidad
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

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-[#150484]">¿Quién puede llevar la
                        contabilidad de una empresa?</h5>
                    <p class="font-normal text-gray-800 text-center">Un contador público titulado o un profesional
                        capacitado en contabilidad. Las pequeñas empresas pueden apoyarse en asesores o software
                        contable.</p>
                </div>
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight  text-[#150484] text-center">¿Qué es el estado de
                        resultados?
                    </h5>
                    <p class="font-normal text-gray-800 text-center">Es un informe contable que muestra las ganancias o
                        pérdidas de una empresa durante un periodo determinado, considerando ingresos y gastos.</p>
                </div>
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                        <path
                            d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-[#150484]">¿La contabilidad es
                        solo para empresas grandes?</h5>
                    <p class="font-normal text-gray-800 text-center">No. Toda actividad económica, por pequeña que sea,
                        se beneficia del control contable para ser más eficiente y cumplir con las leyes.</p>
                </div>

            </div>

        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-center flex-col sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Origen y evolución de la
                    contabilidad
                </h2>
                <p class="mb-6 font-normal text-gray-900 md:text-lg">
                    La historia de la contabilidad se remonta a las civilizaciones antiguas, como la egipcia,
                    mesopotámica y romana, donde ya se llevaban registros básicos de bienes y transacciones. Sin
                    embargo, fue en el siglo XV cuando el monje franciscano Luca Pacioli sistematizó el método de
                    partida doble, base de la contabilidad moderna.
                    Desde entonces, la contabilidad ha evolucionado junto con la economía, incorporando normativas
                    internacionales, tecnología y enfoques especializados que permiten una gestión más eficiente y
                    transparente.
                </p>
            </div>
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/contabilidad2.jpg"
                    alt="dashboard image">
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-start flex flex-col-reverse sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/contabilidad1.jpg"
                    alt="dashboard image">
            </div>
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Importancia de la
                    Contabilidad</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Tomar decisiones inteligentes basadas en datos reales.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Asegurar la transparencia ante socios, empleados y entidades fiscales.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Controlar el uso de los recursos financieros, materiales y humanos.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-7.5 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Planificar el crecimiento y prever posibles riesgos.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-7.5 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Cumplir con las normativas legales que rigen la actividad económica.</strong>
                    </li>

                </ul>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="w-full flex flex-col lg:flex-row items-start pt-0 pb-2 px-4 mx-auto max-w-screen-xl">
            <div class="w-full lg:w-1/2 mb-4">
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Estudio Clave / Asignaturas
                    Principales</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contabilidad Financiera</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contabilidad de Costos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Finanzas Empresariales</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Auditoría</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Legislación Tributaria</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Matemáticas Financieras</strong>
                    </li>

                </ul>
            </div>

            <div class="w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Tipos de Contabilidad
                </h3>

                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-9 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contabilidad financiera: Registra todas las operaciones para informar a terceros como bancos, inversionistas o entes fiscales.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-9 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contabilidad administrativa: Se usa dentro de la empresa para tomar decisiones estratégicas y mejorar la eficiencia interna.</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-9 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contabilidad de costos: Analiza y controla los costos de producción, muy utilizada en empresas manufactureras.</strong>
                    </li>
                </ul>
            </div>
        </div>

        <div class="gap-8 w-full flex flex-col lg:flex-row items-start py-8 px-4 mx-auto max-w-screen-xl  ">
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
                        <strong>Contador Público</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Auditor Financiero</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Analista Financiero</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Asesor Fiscal</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-black-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Consultor en Gestión Financiera</strong>
                    </li>

                </ul>
            </div>

            <div class="md:mt-0 w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">¿Por que estudiar
                    Contabilidad?
                </h3>
                <strong>Estudiar Contabilidad te brinda las herramientas para comprender, analizar y gestionar la
                    información financiera de empresas y organizaciones. Es una carrera esencial para el control
                    económico, la toma de decisiones y el cumplimiento de obligaciones fiscales. Además, ofrece amplias
                    oportunidades laborales en sectores públicos y privados, con gran demanda de profesionales
                    capacitados y responsables.</strong>

            </div>
        </div>
    </section>

    <section class="bg-gray-950">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden rounded-xl" src="../../assets/img/foto4.jpg" alt="dashboard image">
            <img class="w-full rounded-xl hidden dark:block" src="../../assets/img/contabilidad3.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Perfil del Estudiante
                </h2>
                <p class="mb-6 font-normal text-gray-500 md:text-lg">El perfil de un estudiante de contabilidad se
                    caracteriza por una combinación de habilidades analíticas, atención al detalle y capacidad para
                    interpretar información financiera. Este perfil requiere conocimientos sólidos en normas contables,
                    capacidad para manejar datos numéricos con precisión, y competencias para asesorar en la gestión
                    financiera y el cumplimiento de obligaciones fiscales en distintos tipos de organizaciones.</p>
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
                            nuestro test sobre la Contanbilidadd</h3>
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
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 1: ¿Qué es la
                                contabilidad?</h2>
                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'A'
                                }">

                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q1" value="A"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>El análisis de
                                        encuestas de mercado.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>La disciplina que
                                        registra, clasifica y resume las operaciones financieras de una empresa.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>El estudio de los
                                        clientes potenciales.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Una técnica para
                                        redactar contratos legales.</p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 2: ¿Cuál es
                                el principal objetivo de la contabilidad?</h2>

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
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Evitar que las
                                        empresas paguen impuestos.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Aumentar los
                                        precios de los productos.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Proporcionar
                                        información financiera útil para la toma de decisiones.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Diseñar campañas
                                        publicitarias.

                                    </p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 3: ¿Qué representa un activo en contabilidad?</h2>

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
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Un gasto mensual de la empresa.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Cualquier obligación financiera pendiente.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong> Todo bien o derecho que posee una empresa y que genera beneficios.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>El salario del personal administrativo.</p>
                                </div>
                            </label>
                        </div>

                        <div class="question mb-4">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Preguntas 4: ¿Cuál de los siguientes es un estado financiero básico?</h2>

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
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Hoja de vida del gerente.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Informe de recursos humanos.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Estado de resultados.</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Manual de operaciones internas.</p>
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