<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const svgColors = ref([])
const items = [
    'Ejercicio',
    'Deporte',
    'Fuerza',
    'Flexibilidadsl',
    'Cardio',
    'Entrenador Personal',
    'Nutrición Deportiva',
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

//-- VARIABLES DE TEST --//
const showResult = ref(false)
const selectedAnswers = ref([])
const correctAnswers = ['B', 'C', 'B', 'C']
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
    if (score.value === 100) return "🎉 ¡Excelente! Has dominado el tema deL Promotor Deportivo.";
    if (score.value >= 75) return "💪 Muy bien, tienes buen conocimiento.";
    if (score.value >= 50) return "👍 Aceptable, pero aún puedes mejorar.";
    if (score.value >= 25) return "🧐 Necesitas repasar un poco más.";
    return "😅 No acertaste ninguna. ¡Intenta de nuevo!";
}


</script>
<template>
    <!-- Hero de pagina -->
    <section class="bg-img mt-23 pt-15 pb-15">
        <div class="max-w-screen px-4 px mx-auto">
            <div class="flex flex-col items-center mb-4">
                <h1 class="text-center mb-4 text-3xl font-bold md:text-5xl lg:text-6xl gradient-text">Impulsa el
                    bienestar y el rendimiento con el <br> Promotor de entrenamiento deportivo</h1>
                <p class="text-center max-w-2xl mb-6 font-normal gradient-p lg:mb-8 md:text-lg lg:text-xl">Explora
                    Explora una carrera que une actividad física, salud y liderazgo.
                    Pon a prueba lo aprendido con un test interactivo y descubre si estás listo para inspirar y
                    transformar vidas como Promotor Deportivo.
                </p>
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

                    <svg class="size-10 mt-1 mr-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" height="24"
                        fill="none" :style="{ stroke: svgColors[index], transition: 'stroke 0.6s ease' }">
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

                    {{ item }}
                </div>
            </div>
        </div>
    </section>

    <!--Carrusel de palabras-->
    <section class="bg-gray-950">
        <div
            class="gap-8 items-center justify-between py-12 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
            <img class="w-full rounded-xl" src="../../assets/img/deporte 1.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 colorblan">¿Qué es un
                    Promotor de entrenamiento deportivo?
                </h2>
                <p class="colorblan mb-6 font-normal text-gray-500 md:text-lg">Un Promotor de Entrenamiento Deportivo es un
                    profesional capacitado para organizar, coordinar e impulsar actividades físicas y deportivas en
                    comunidades, instituciones educativas o centros recreativos. Su labor está enfocada en fomentar el
                    ejercicio, el bienestar físico y los hábitos saludables en personas de todas las edades, adaptando
                    rutinas y programas de acuerdo con las necesidades de cada grupo.
                    Este profesional actúa como un enlace entre la población y el acceso a prácticas deportivas
                    organizadas, ya sea en el ámbito recreativo, competitivo o educativo.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid-cols-2 sm:py-16 lg:px-6">
            <h2 class="mb-8 text-3xl lg:text-5xl tracking-tight font-bold text-gray-950 text-center">Características de
                promotor deportivo
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

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-[#150484]"> Conocimiento técnico
                        y pedagógico</h5>
                    <p class="colorne font-normal text-gray-800 text-center"> Posee formación sólida en entrenamiento deportivo,
                        anatomía, nutrición y didáctica, lo que le permite planificar sesiones seguras y efectivas
                        adaptadas a las necesidades de cada población.
                    </p>
                </div>
                <div
                    class="border border-gray-200 rounded-lg shadow-sm bg-gray-50 p-4 flex flex-col items-center w-full md:w-1/3 lg:w-1/4">
                    <svg class="size-16 text-[#150484]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 15v4m6-6v6m6-4v4m6-6v6M3 11l6-5 6 5 5.5-5.5" />
                    </svg>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#150484] text-center">Liderazgo y motivación
                    </h5><br>
                    <p class="colorne font-normal text-gray-800 text-center">Es un agente de cambio que guía e inspira a otros a
                        adoptar estilos de vida saludables, fomentando la disciplina, el trabajo en equipo y la
                        perseverancia a través del deporte.</p>

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


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#150484] text-center">Fomento de la
                        actividad física</h5>
                    <p class="colorne font-normal text-gray-800 text-center">El Promotor Deportivo diseña, organiza y ejecuta
                        actividades físicas y recreativas orientadas a mejorar la salud, la condición física y la
                        integración social de diferentes grupos de personas.</p>
                </div>
            </div>

        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-center flex-col sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Origen y evolución del rol
                    del promotor deportivo</h2>
                <p class="colorne mb-6 font-normal text-gray-900 md:text-lg">
                    El rol del promotor deportivo surgió con la necesidad de democratizar el acceso al deporte y mejorar
                    la calidad de vida de las poblaciones mediante la actividad física. A partir del siglo XX, con el
                    crecimiento del deporte escolar, comunitario y profesional, se hizo evidente la necesidad de contar
                    con figuras especializadas que pudieran organizar y motivar la práctica deportiva de manera
                    inclusiva y estructurada.
                    Hoy en día, su presencia es clave en programas de salud pública, centros comunitarios, instituciones
                    educativas y clubes deportivo
                </p>
            </div>
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/deporte3.jpg"
                    alt="dashboard image">
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="gap-8 items-start flex flex-col-reverse sm:flex-row py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:flex md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="w-full">
                <img class="w-full dark:hiddenrounded-xl rounded-xl " src="../../assets/img/deporte2.jpg"
                    alt="dashboard image">
            </div>
            <div class="mt-4 md:mt-0 w-full">
                <h2 class="mb-4 text-3xl lg:text-5xl tracking-tight font-bold text-gray-900 ">Aplicaciones del Promotor
                    de entrenamiento</h2>
                <ul>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong> Desarrolla valores como disciplina, trabajo en equipo y liderazgo.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Diseña entrenamientos adaptados a cada persona o grupo.</strong>
                    </li>
                    <li class="icon-list-item">

                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong> Aplica en escuelas y comunidades promoviendo el deporte.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong> Evalúa el progreso físico mediante pruebas y seguimiento personalizado.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong> Organiza eventos deportivos que motivan la participación y el espíritu
                            competitivo.</strong>
                    </li>

                </ul>
            </div>
        </div>
    </section>

    <section class="bg-blue-100">
        <div
            class="w-full flex flex-col lg:flex-row justify-between items-start pt-0 pb-2 px-4 mx-auto max-w-screen-xl">
            <div class="w-full lg:w-1/2">
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
                        <strong>Anatomía y Fisiología</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Entrenamiento Deportivo</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Nutrición Deportiva</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Psicología del Deporte</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Biomecánica</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Gestión y Planificación de Actividades Físicas</strong>
                    </li>

                </ul>
            </div>

            <div class="w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Importancia promotor
                    deportivo
                </h3>

                <ul>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Incentiva la práctica deportiva en la comunidad.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Detecta y apoya nuevos talentos.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Fomenta valores como la disciplina y el trabajo en equipo.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Organiza eventos que fortalecen la convivencia social.</strong>
                    </li>
                    <li class="icon-list-item">
                        <svg class="icono-svg text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Contribuye al bienestar físico y mental de las personas.</strong>
                    </li>
                </ul>
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row items-start py-8 px-4 mx-auto max-w-screen-xl  ">
            <div class="md:mt-0 w-full lg:w-1/2">
                <h2 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">Oportunidades Futuras</h2>
                <ul>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Entrenador Personal</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Promotor y Coordinador de Actividad Física</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">

                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>

                        <strong>Preparador Físico en clubes deportivos</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Asesor en Nutrición y Salud Deportiva</strong>
                    </li>
                    <li class="mb-1 font-normal text-gray-900 md:text-lg flex items-center">
                        <svg class="size-6 text-blue-500 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor" viewBox="0 01aq 24 24">
                            <path fill-rule="evenodd"
                                d="M14.6144 7.19994c.3479.48981.5999 1.15357.5999 1.80006 0 1.6569-1.3432 3-3 3-1.6569 0-3.00004-1.3431-3.00004-3 0-.67539.22319-1.29865.59983-1.80006M6.21426 6v4m0-4 6.00004-3 6 3-6 2-2.40021-.80006M6.21426 6l3.59983 1.19994M6.21426 19.8013v-2.1525c0-1.6825 1.27251-3.3075 2.95093-3.6488l3.04911 2.9345 3-2.9441c1.7026.3193 3 1.9596 3 3.6584v2.1525c0 .6312-.5373 1.1429-1.2 1.1429H7.41426c-.66274 0-1.2-.5117-1.2-1.1429Z"
                                clip-rule="evenodd" />
                        </svg>
                        <strong>Instructor en programas de rehabilitación y bienestar</strong>
                    </li>

                </ul>
            </div>

            <div class="md:mt-0 w-full lg:w-1/2">
                <h3 class="mb-4 text-3xl lg:4xl tracking-tight font-bold text-gray-900 ">¿Por que estudiar Promotor
                    deportivo?
                </h3>
                <strong>Estudiar para ser promotor deportivo es una excelente opción para quienes quieren combinar su
                    pasión por el deporte con un impacto positivo en la comunidad. Esta carrera te permite fomentar
                    hábitos saludables, promover la inclusión social y desarrollar habilidades en organización y
                    liderazgo. Además, ofrece variadas oportunidades laborales en escuelas, clubes, eventos y programas
                    deportivos, contribuyendo al bienestar y crecimiento social a través del deporte.</strong>

            </div>
        </div>



    </section>

    <section class="bg-gray-950">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden rounded-xl" src="../../assets/img/foto4.jpg" alt="dashboard image">
            <img class="w-full rounded-xl hidden dark:block" src="../../assets/img/deporte4.jpg" alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 colorblan">Perfil del Estudiante
                </h2>
                <p class="colorblan mb-6 font-normal text-gray-500 md:text-lg">El estudiante de promoción de entrenamiento
                    deportivo se caracteriza por poseer una combinación de intereses y habilidades relacionadas con la
                    salud, el deporte y la actividad física. Este perfil requiere conocimientos sólidos sobre el
                    funcionamiento del cuerpo humano, técnicas de entrenamiento, motivación, y capacidad para diseñar y
                    supervisar programas de actividad física que mejoren el rendimiento y el bienestar de las personas.
                </p>
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
                            nuestro test sobre el Promotor Deportivo</h3>
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

                        <!-- Pregunta 1 -->
                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pregunta 1: ¿Qué hace
                                un promotor de entrenamiento deportivo?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[0] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[0] !== 'A'
                                }">
                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q1" value="A"
                                        v-model="selectedAnswers[0]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Diseña videojuegos
                                        para deportes</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Planifica y
                                        organiza actividades físicas para fomentar la salud y el deporte</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Vende ropa
                                        deportiva en tiendas</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Se encarga del
                                        mantenimiento de estadios</p>
                                </div>
                            </label>
                        </div>

                        <!-- Pregunta 2 -->
                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pregunta 2: ¿Cuál de
                                estas actividades podría organizar un promotor deportivo?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[1] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[1] !== 'A'
                                }">
                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q2" value="A"
                                        v-model="selectedAnswers[1]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Una competencia de
                                        videojuegos</p>
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
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Una campaña de
                                        lectura</p>
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
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Un torneo
                                        intercolegial de fútbol</p>
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
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Una feria de comida
                                        rápida</p>
                                </div>
                            </label>
                        </div>

                        <!-- Pregunta 3 -->
                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pregunta 3: ¿Por qué es
                                importante el trabajo del promotor deportivo en la comunidad?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'A'
                                }">
                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q3" value="A"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Para que todos
                                        compitan profesionalmente</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'B'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q3" value="B"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Porque ayuda a
                                        mejorar la salud física, promover valores y prevenir el sedentarismo</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q3" value="C"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Porque ayuda a
                                        vender más productos deportivos</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[2] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[2] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q3" value="D"
                                        v-model="selectedAnswers[2]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Para reemplazar a
                                        los entrenadores</p>
                                </div>
                            </label>
                        </div>

                        <!-- Pregunta 4 -->
                        <div class="question mb-8">
                            <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pregunta 4: ¿Qué
                                habilidad necesita un buen promotor deportivo?</h2>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'A',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'A'
                                }">
                                <div class="flex hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg">
                                    <input type="radio" class="hidden" name="q4" value="A"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-800 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">A) </strong>Dormir muchas horas
                                    </p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'B',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'B'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q4" value="B"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">B) </strong>Ignorar al público
                                    </p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'C',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'C'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q4" value="C"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">C) </strong>Liderazgo,
                                        comunicación y conocimiento en actividad física</p>
                                </div>
                            </label>

                            <label class="flex items-center p-2 transition duration-200 rounded-lg cursor-pointer mb-2"
                                :class="{
                                    'bg-gray-800 shadow text-white': selectedAnswers[3] === 'D',
                                    'hover:bg-gray-800 hover:shadow': selectedAnswers[3] !== 'D'
                                }">
                                <div
                                    class="flex items-center hover:bg-gray-800 hover:shadow transition duration-200 rounded-lg cursor-pointer">
                                    <input type="radio" class="hidden" name="q4" value="D"
                                        v-model="selectedAnswers[3]" />
                                    <p class="text-gray-600 dark:text-gray-400"><strong
                                            class="text-blue-300 font-extrabold text-lg">D) </strong>Saber cocinar</p>
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