<template>
    <div class="min-h-screen p-4 sm:p-8 bg-red-900">
      <!-- containerクラスは、幅を自動的に設定 -->
      <!-- mx-autoクラスは、要素を水平方向に中央揃えにする -->
      <div class="container mx-auto min-h-full box-border p-4 sm:p-8 rounded-lg bg-gray-100 text-gray-900">
        <myHeader />
        <!-- <myLogin /> -->
        <div class="my-2">
          <Nuxt />
        </div>
        <myFooter />
      </div>
    </div>
</template>
