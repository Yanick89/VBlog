<template>
  <div class="main-edit">
    <!-- <topMenuUser ref="topMenuUser"/> -->
    <div class="content-edit">
      <section>
        <div class="title">
          <h3>Mon profil</h3>
          <!-- <p>Gérer votre profil</p> -->
        </div>
        <div class="content">
          <div class="edit">
            <form>
              <div class="img-photo">
                <div class="container-img">
                  <div v-if="photoUrl">
                    <img :src="photoUrl" alt="photo de profil" />
                  </div>
                  <div v-else>
                    <h2>
                      {{ firstLetterIcon + '' + secondLetterIcon }}
                    </h2>
                  </div>
                  <label for="photo">
                    📷
                  </label>
                  <input type="file" name id="photo" accept=".jpg, .jpeg" style="display: none" ref="photoProfile" @change="selectImg"/>
                </div>
              </div>
              <h5>Ajoutez votre photo de profil</h5>
              <div class="write-infos">
                <label for="name">Nom:</label>
                <input type="text" v-model="infosUser.name" name="name" id />
                <label for="surname">Prénom:</label>
                <input type="text" v-model="infosUser.lastName" name="surname" id />
                <div class="display-name">
                  <span for="displayName">Chochez pour afficher le nom:</span>
                  <br />
                  <label for="displayName">
                    <input
                      type="text"
                      name="displayName"
                      id="displayName"
                      placeholder="Pseudo"
                    />
                    <input type="checkbox" name id="displayName" checked />
                  </label>
                </div>
                <label for="activity">Votre activité:</label>
                <input type="text" id="activity" name placeholder="Activité" />
                <label for="link-web">Compte Twitter:</label>
                <input
                  type="text"
                  name
                  placeholder="Ajoutez un lien vers votre compte twitter"
                  id="link-web"
                />
                <button>Enregistrer</button>
              </div>
            </form>
          </div>
          <div class="illustration">
            <div class="content-illustration">
              <div class="text">
                <div>
                  <h4>Améliorez profil</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Magnam, hic rem, magni
                    fugit sapiente nemo a delectus fugiat architecto
                  </p>
                </div>
                <iconStyle ref="iconStyle" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import iconStyle from "./iconStyle";
import iconCamera from '../iconCamera'
import { auth, db } from '../../../firebase'
import { collection, doc, getDocs  } from "firebase/firestore"; 
export default {
  name: "profilEdite",
  components: {
    iconStyle,
    iconCamera
  },
  data() {
    return {
      infosUser:{},
      firstLetterIcon: '',
      secondLetterIcon: '',
      photoUrl: ''
    };
  },
  methods: {
    selectImg(){
      const fileList = this.$refs.photoProfile.files
      for(let e of fileList){
        const photoProfile = URL.createObjectURL(e)
        this.photoUrl = photoProfile
        console.log('image nom ', this.photoUrl);        
      }
      
    },
    // update user inforamtions
    updateUser(){},
    // get informations displayName
    getDisplayName(){
      const user = auth.currentUser
      if(user !== null){
        let getName = user.displayName.split(' ')
        this.firstLetterIcon = getName[0].charAt(0).toUpperCase(),
        this.secondLetterIcon = getName[1].charAt(0).toUpperCase()
      }
    },
    // Get informartion user
    async getUser(){
      this.getDisplayName()
      const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          this.infosUser = {
            name: data.firstName,
            lastName: data.surName
          }
      });
      console.log('user id ', querySnapshot.id);
    }
  },
  mounted(){
    this.getUser()
  }
};
</script>

<style scoped>
  .main-edit {
    min-height: 100vh;
    width: 100%;
  }
  .main-edit .content-edit {
    padding: 5% 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main-edit .content-edit .content {
    display: flex;
    justify-content: center;
  }
  .main-edit .content-edit .content .edit {
    flex: 2;
  }
  .main-edit .content-edit .title {
    margin-bottom: 25px;
  }
  .main-edit .content-edit h5 {
    margin: 15px 0;
  }
  /* ================* style photo *================ */
  .main-edit .content-edit .img-photo {
    display: flex;
    align-items: center;
  }
  .main-edit .content-edit .img-photo .container-img {
    position: relative;
    height: 150px;
    width: 150px;
    background: var(--orange-color);
    border-radius: 50%;
  }
  .main-edit .content-edit .img-photo .container-img h2{
    font-weight: 800;
    font-size: 53px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    -webkit-text-stroke: 2px;
  }
  .main-edit .content-edit .img-photo .container-img label{
    opacity: 0;
  }
  .main-edit .content-edit .img-photo .container-img img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .main-edit .content-edit .img-photo .container-img:hover label{
    position: absolute;
    opacity: 1;
    padding: 20px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    cursor: pointer;
    font-size: 1.6rem;
    color: var(--text-dark-primary-light);
  }
  /* ================* write Informations *============ */
  .write-infos {
    display: flex;
    flex-direction: column;
  }
  .write-infos label {
    margin: 3px 0;
  }
  .write-infos input,
  textarea {
    margin: 5px 0;
    border: 1px solid var(--border-dark-thin);
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
  }
  .write-infos input {
    padding: 5px 10px;
    text-transform: capitalize;
    color: var(--text-dark-secondary);
  }
  .write-infos button{
    outline: none;
    border: 1px solid var(--background-purple-color);
    background: var(--background-white-color);
    color: var(--text-purple-color);
    font-size: .9rem;
    font-weight: 600;
    padding: 8px 10px;
    border-radius: 15px;
    width: 26%;
    margin: 8px 0;
    transition: background color .3s;
    cursor: pointer;
  }
  .write-infos button:hover{
    background: var(--background-purple-color);
    color: var(--text-white-primary);
    border: none;
  }
  /*==============* custom checkbox *==============*/
  .display-name label {
    display: flex;
    align-items: center;
  }
  .display-name input:last-child {
    appearance: none;
    border: 1px solid var(--hover-link-gray);
    background: var(--background-purple-color);
    height: 25px;
    width: 25px;
    display: grid;
    place-content: center;
    border-radius: 8px;
    margin-left: 15px;
  }
  .display-name input:last-child::before {
    content: "";
    height: 25px;
    width: 25px;
    border-radius: 8px;
    transition: 0.2s transform ease-in-out;
    transform: scale(0);
    background: var(--background-white-primary);
    border: 1px solid var(--hover-link-gray);
  }
  .display-name input:last-child:checked::before {
    transform: scale(1);
  }
  /*===============* end custom checkbox *=============*/
  .main-edit .content-edit .content .illustration {
    flex: 2;
    display: flex;
  }
  .main-edit .content-edit .content .illustration .content-illustration {
    position: relative;
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    margin-left: 15%;
    height: 197px;
    background: var(--background-btn-gray-light);
  }
  .illustration .content-illustration .text {
    display: flex;
    justify-content: space-between;
  }
  .main-edit .content-edit .content .illustration .content-illustration p {
    width: 50%;
    padding-right: 10px;
    margin-top: 8px;
  }
</style>