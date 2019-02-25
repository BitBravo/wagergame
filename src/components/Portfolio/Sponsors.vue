<template>
        <div class="row">
                <div class="col-md-12 pl-0 pr-0">
                        <h5 class="heading">Sponsors
                                <switches style="vertical-align: middle; float: right; margin-right: 60px" v-model="enabled"
                                        theme="bootstrap" color="success"></switches>
                                <i @click="showModal()" class="fa fa-pencil fa-1x"></i>  
                        </h5>
                        <div class="sponsors">
                                <flickity ref="flickity" v-if="data.sponsors && data.sponsors.length > 0">
                                        <div class="carousel-cell gallery-cell" v-for="(item, key) of data.sponsors" :key="key" @click="showModal(key)">
                                                <img :src="item.picture" alt="" style="height: 100px">
                                        </div>
                                </flickity>
                                <div class="disabled-overlay" v-if="enabled == false"></div>
                        </div>
                </div>
    <b-modal ref="sponsorModal" id="modal1" title="Edit Sponsor" hide-footer>
        <EditSponsor  :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" @submit="closeModal" :index="editItem"
        :data="data.sponsors ? data.sponsors : []" />
    </b-modal>
        </div>
</template>

<script>
import Switches from 'vue-switches';
import EditSponsor from '@/components/forms/EditSponsor';
import Flickity from 'vue-flickity';
export default {
    name: 'Sponsors',
    components: {
            Switches,
            EditSponsor,
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
                        this.$refs.sponsorModal.show();
                },
    closeModal() {
      if (this.editItem !== false)
        this.$emit("refresh");
      this.$refs.sponsorModal.hide();
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
