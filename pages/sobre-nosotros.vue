<script setup></script>
<template>
    <!-- Hero de pagina -->
    <section class="bg-white dark:bg-gray-950 mt-23">
        <div class="max-w-screen px-4 py-42 mx-auto bg-img">
            <div class="flex flex-col items-center">
                <h1 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Sobre nosotros
                </h1>
                <p class="text-center max-w-2xl mb-6 font-normal text-white lg:mb-8 md:text-lg lg:text-xl">
                    Formamos personas desde el nivel inicial hasta el secundario con un enfoque integral, moderno y
                    humano.
                </p>
                <div class="flex flex-row">
                    <a href="#formulario"
                        class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">
                        Solicitar Información
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L13.586 9H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#nosotros"
                        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-[#041184] dark:hover:border-[#041184] dark:focus:ring-gray-800">
                        Conocé más
                    </a>
                </div>
            </div>
        </div>
    </section>


    <section class="bg-gray-950">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <img class="w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                alt="dashboard image">
            <img class="w-full hidden dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                alt="dashboard image">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more
                    tools and ideas that brings us together.</h2>
                <p class="mb-6 font-normal text-gray-700 md:text-lg">Flowbite helps you connect with
                    friends and communities of people who share your interests. Connecting with your friends and family
                    as well as discovering new ones is easy with features like Groups.</p>
                <a href="#formulario"
                    class="mt-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">
                    Leer mas
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L13.586 9H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <section class="bg-white">
        <div
            class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Let's create more
                    tools and ideas that brings us together.</h2>
                <p class="mb-6 font-normal text-gray-500 md:text-lg">Flowbite helps you connect with
                    friends and communities of people who share your interests. Connecting with your friends and family
                    as well as discovering new ones is easy with features like Groups.</p>
                <a href="#formulario"
                    class="mt-6 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white bg-[#150484] rounded-lg hover:bg-[#041184]  focus:ring-4">
                    Leer mas
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                            d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L13.586 9H3a1 1 0 100 2h10.586l-3.293 3.293a1 1 0 000 1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
            <img class="w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                alt="dashboard image">
            <img class="w-full hidden dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                alt="dashboard image">

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