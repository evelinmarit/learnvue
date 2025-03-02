h
<script setup>
import { ref } from 'vue';
import ImageModal from '../components/ImageModal.vue';
import Modal from '../components/Modal.vue';
const modalActive = ref(false);
const modalActive2 = ref(false);
const modalActive3 = ref(false);
const modalActive4 = ref(false);
</script>

<template>

    <div class="buttons">
      <button class="button is-primary" @click="modalActive = true">
        Open modal
      </button>
      <button class="button is-primary" @click="modalActive2 = true">
        Open modal 2
      </button>
      <button class="button is-primary" @click="modalActive3 = true">
        Open modal 3
      </button>
      <button class="button is-primary" @click="modalActive4 = true">
        Open modal 4
      </button>
    </div>

  <ImageModal
    :active="modalActive"
    @close="modalActive = false"
    url="https://picsum.photos/seed/kati/1280/960"
  >
    <h1 class="is-size-1">Hello</h1>
  </ImageModal>
  <ImageModal
    :active="modalActive2"
    @close="modalActive2 = false"
    url="https://picsum.photos/seed/mati/1280/960"
  ></ImageModal>
  <Modal :active="modalActive3" @close="modalActive3 = false">
    <h1 class="is-size-1">Hello</h1>
  </Modal>

  <Modal :active="modalActive4" @close="modalActive4 = false">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal card</p>
        <button class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </div>
      </footer>
    </div>
  </Modal>
</template>
