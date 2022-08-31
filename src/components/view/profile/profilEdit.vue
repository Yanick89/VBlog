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
                        {{ firstLetter + '' + secondLetter }}
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
                  <input type="text" v-model="name" name="name" id />
                  <label for="surname">Prénom:</label>
                  <input type="text" v-model="lastName" name="surname" id />
                  <div class="display-name">
                    <span for="displayName">Chochez pour afficher le nom:</span>
                    <br />
                    <label for="displayName">
                      <input
                        type="text"
                        v-model="pseudo"
                        name="displayName"
                        id="displayName"
                        placeholder="Pseudo"
                      />
                      <input type="checkbox" v-model="pseudoName" name id="displayName"  />
                    </label>
                  </div>
                  <label for="activity">Votre activité:</label>
                  <input type="text" v-model="activity" id="activity" name placeholder="Activité" />
                  <label for="url">Compte Twitter:</label>
                  <input
                    type="url"
                    v-model="yourLinkWeb"
                    name
                    placeholder="Ajoutez un lien vers votre compte twitter"
                    id="url"
                  />
                  <button @click="updateUser()">Enregistrer</button>
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
  import { auth, db, storage } from '../../../firebase'
  import { collection, doc, getDocs, setDoc, addDoc, updateDoc, onSnapshot } from "firebase/firestore";
  import { ref, uploadBytes } from "firebase/storage"; 
  export default {
    name: "profilEdite",
    components: {
      iconStyle,
      iconCamera
    },
    data() {
      return {
        infosUser:[],
        name: '',
        lastName:'',
        pseudo:'',
        pseudoName: false,
        activity: '',
        yourLinkWeb:'',    
        firstLetter: '',
        secondLetter: '',
        photoUrl: '',
        updateUserInfo:{},
        userId: JSON.parse(localStorage.getItem('userSession')).uid,
      };
    },
    methods: {
      selectImg(){
        const fileList = this.$refs.photoProfile.files
        const storageRef = ref(storage, "images");
        for(const e of fileList){
          const photoProfile = URL.createObjectURL(e)
          this.photoUrl = photoProfile
          uploadBytes(storageRef, this.photoUrl).then((snapshot) => {
            console.log('Uploaded a blob or file! ',snapshot );
          });
          console.log('image nom ', this.photoUrl);        
        }
        
      },
      // modifications des inforamtions
      async updateUser(){
        this.updateUserInfo.name = this.name,
        this.updateUserInfo.lastName = this.lastName,
        this.updateUserInfo.pseudo = this.pseudo,
        this.updateUserInfo.pseudoName = this.pseudoName,
        this.updateUserInfo.activity = this.activity,
        this.updateUserInfo.yourLinkWeb = this.yourLinkWeb,
        this.firstLetter = this.name.charAt(0).toUpperCase(),
        this.secondLetter = this.lastName.charAt(0).toUpperCase();
        const udpateRef = doc(db, "users", this.userId);
        await updateDoc(udpateRef, this.updateUserInfo).then(onSnapshot=>{
          
          console.log('Réussi ',this.updateUserInfo );
        })
      },
      // Récupération des informations avec displayName
      getDisplayName(){
        const user = auth.currentUser
        if(user !== null){
          let getName = user.displayName.split(' ')
          this.firstLetterIcon = getName[0].charAt(0).toUpperCase(),
          this.secondLetter = getName[1].charAt(0).toUpperCase()
        }
      },
      // Récupération de toutes les infos dans le document
      async getUser(){
        this.getDisplayName()
        const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            this.infosUser.push(data);
            this.infosUser.forEach(user =>{
              this.name = user.name,
              this.lastName = user.lastName,
              this.photoUrl = user.photoUrl,
              this.pseudo = user.pseudo,
              this.pseudoName = user.pseudoName,
              this.activity = user.activity,
              this.yourLinkWeb = user.yourLinkWeb,
              this.firstLetter = user.name.charAt(0).toUpperCase()
              this.secondLetter = user.lastName.charAt(0).toUpperCase()
            })
        });
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