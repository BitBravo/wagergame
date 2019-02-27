<template>
 <div class="col-md-8 main-content">
  <b-card>
     <b-container class="bv-example-row">
  <b-row>
    <b-col><div style="text-align: left; color: black;"></br>
<img style="display: block; margin-left: auto; margin-right: auto; width: 150px; height: 150px; border-radius: 150px" :src="fields.profilePic ? fields.profilePic : 'images/fortnite.jpg'" alt="Hero">
 
 <h5 style="text-align: center; color: black; font-size: 18px;"><b>Fortnite </b> </h5>
  <h5 style="text-align: center; color: grey; font-size: 16px;">Battle Royale</h5>
  <h5 style="text-align: center; color: black; font-size: 16px;">Epic Games</h5>
     <p style="text-align: center; color: yellow; font-size: 18px;"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
<h6 style="text-align: center; font-size:16 px; color: black;">4.92 star average</h6>
     </div></b-col>
<b-col>
  
<v-sheet
          class="d-flex"
          color="grey lighten-3"
          height="320"
        >    </v-sheet>

</b-col>
    <b-col style="border: thick;">
      
      <h5 class="heading-90">Top 5 Players</h5>
       <v-sheet
            class="d-flex"
            color="grey lighten-3"
            height="200"
          >
           <v-list dense >
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
          <p style="font-size: 10px;">
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>
</p>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
          
          </v-sheet>
        </b-col>

  </b-row>

</b-container>
</b-card>
<h5 class="heading-90">
  <b-row>
    <b-col>
  <p style="text-align: left">
       <v-chip small>
          #BattleRoyale
          </v-chip>
         <v-chip small>
           #FPS
          </v-chip>
            <v-chip small>
           #Survival
          </v-chip>
            
         </p> </b-col>
         <b-col><div class="online2"/>&nbsp; 0 players online <v-chip color="red" small>
          18+
          </v-chip> </b-col> </b-row></h5>

  <p style="color: white; text-align: left; font-size: 16px;">Price: 
 <span style="color: grey;" class="name">
 Free
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Direct Download Link: 
 <span style="color: grey;" class="name">
https://www.epicgames.com/fortnite/en-US/download
 </span></p>
     <p style="color: white; text-align: left; font-size: 16px;">Compatibility: 
 <span style="color: grey;" class="name">
iOS and Android </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Languages: 
 <span style="color: grey;" class="name">English, Spanish

 </span></p>
   <p style="color: white; text-align: left; font-size: 16px;">Description: 
 <span style="color: grey;" class="name">
Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build, Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing, and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale has been released for those platforms in addition for Nintendo Switch, iOS and Android devices.
 </span></p>


  <b-button block variant="success" href="#/h2h/mobile/fortnite/matches">View Tournaments</b-button>

  



  

            </div>
          
  
     

        <!-- Modal Component -->
       
  
  
</template>


<style>

  .heading-90 {
    background-color: #222222;
    color: #fff;
    padding: 10px 0 10px 0px;
    width: 100%;
    text-align: center; }

    .online2 {
    height: 15px;
    width: 15px;
    background-color: #23dd2c;
    border-radius: 50%;
    display: inline-block;
    
}

    .offline2 {
    height: 15px;
    width: 15px;
    background-color: #ff0000;
    border-radius: 50%;
    display: inline-block;
    
}
</style>
<script>
export default {
  name: 'Sponsors',
    data () {
    return {
      items: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
    }
    }
}
</script>