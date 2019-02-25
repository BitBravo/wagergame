<template>
  <div class="row switch-container">
    <div class="col-md-12 pl-0 pr-0">
      <h5 class="heading">Brands
      <switches style="vertical-align: middle; float: right; margin-right: 60px" v-model="enabled"
      theme="bootstrap" color="success"></switches>
      <i @click="showModal()" class="fa fa-pencil fa-1x"></i>  
      </h5>
      <div class="sponsors">
        <flickity ref="flickity" v-if="data.brands && data.brands.length > 0">
          <div style="color: white; display: flex; flex-direction: column; align-items: center" class="carousel-cell gallery-cell" v-for="(item, key) of data.brands" :key="key" @click="showModal(key)">
            <p>{{item.name}}</p>
            <img :src="item.picture" alt="t shirt" style="height: 70px">
            <p class="mt-3">{{item.price}} WGT</p>
            <a class="btn buy_now" :href="item.link" style="background-color: white">Buy Now </a>
          </div>
        </flickity>
        <div class="disabled-overlay" v-if="enabled == false"></div>
      </div>
    </div>
    <b-modal ref="brandModal" id="modal1" title="Edit Brand" hide-footer>
        <EditBrand    :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" @submit="closeModal" :index="editItem"
        :data="data.brands ? data.brands : []" />
    </b-modal>
  </div>
</template>

<script>
import Switches from 'vue-switches';
import EditBrand from '@/components/forms/EditBrand';
import Flickity from 'vue-flickity';
export default {
  name: 'Brands',
  components: {
    Switches,
    EditBrand,
    Flickity
  },
  props: ['data'],
  data() {
    return {
      enabled: true,
      editItem: false
    }
  },
  methods: {
    showModal(edit = false) {
      this.editItem = edit;
      this.$refs.brandModal.show();
    },
    closeModal() {
      if (this.editItem !== false)
        this.$emit("refresh");
      this.$refs.brandModal.hide();
        this.$emit("refresh");
    }
  }
}
</script>

<style>
  .brands-list {
    position: relative;
  }
  .disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
