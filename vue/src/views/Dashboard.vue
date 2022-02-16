<template>
    <PageComponent title="Dashboard"></PageComponent>

    <div v-if="loading" class="flex justify-center">Loading...</div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-gray-700"
    >

      <div class="bg-white animate-fade-in-down shadow-md p-3 text-center flex flex-col order-1 lg:order-2" style="animation-delay: 0.1s">
        <h1 class="text-2xl font-semibold">Total Surveys</h1>

        <div class="text-8xl font-semibold flex-1 flex items-center justify-center">
          {{data.totalSurveys}}
        </div>
      </div>

      <div class="bg-white animate-fade-in-down shadow-md p-3 text-center flex flex-col order-2 lg:order-4" style="animation-delay: 0.2s">
        <h1 class="text-2xl font-semibold">Total Answers</h1>

        <div class="text-8xl font-semibold flex-1 flex items-center justify-center">
          15
        </div>
      </div>

      <div class="row-span-2 animate-fade-in-down order-3 bg-white shadow-md p-4 lg:order-1">
        <h1 class="text-2xl font-semibold">Latest Survey</h1>

        <img 
          :src="data.latestSurvey.image" 
          alt="Survey"
          class="w-[240px] mx-auto"
        >

        <h3 class="text-xl font-bold">{{data.latestSurvey.title}}</h3>

        <div class="flex justify-between text-sm mb-1">
          <div>Upload Date:</div>
          <div>{{data.latestSurvey.created_at}}</div>
        </div>      

        <div class="flex justify-between text-sm mb-3">
          <div>Answers:</div>  
          <div>24</div>
        </div>  

        <div class="flex justify-between">
          <router-link
            :to="{ name: 'SurveyView', params: { id: data.latestSurvey.id}}"
            class="flex py-2 px-4 border border-transparent text-sm rounded-md text-indigo-500 hover:bg-indigo-500 
            hover:text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>

            Edit Survey
          </router-link>
        </div>
      </div>

      <div class="bg-white animate-fade-in-down shadow-md p-3 row-span-2 order-4 lg:order-3" style="animation-delay: 0.3s">
        
      </div>
    </div>    
</template>

<script setup>
  import PageComponent from "../components/PageComponent.vue"
  import { computed } from "vue"
  import { useStore } from "vuex"

  const store = useStore();

  const loading = computed(() => store.state.dashboard.loading);
  const data = computed(() => store.state.dashboard.data);

  store.dispatch("getDashboardData");

</script>