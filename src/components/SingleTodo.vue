<template>

 <h5  class="nonDone"  @click="sendFlag"  v-if="myelement.todo">
    <b-icon icon="check2-circle">  </b-icon> {{myelement.name}}
  </h5>

  <h5 class="done" @click="sendFlag"  v-else>
    <b-icon icon="check-circle-fill">  </b-icon> {{myelement.name}}
  </h5>
 
</template>

<script>


export default {
    name: 'Single',
    props :['myelement'],
    methods:{
      sendFlag(){
        this.$emit('toggle', this.myelement.id )

      }
    }
 
}
 

</script>

<style>
.done{
  text-decoration: line-through;
}
h5{
  cursor: pointer;
}
</style>