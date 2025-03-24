const chapters = {
  contrat: {
    titre: "Proposition de contrat",
    description: "Alors que tu es en plein cours à l'école, un représentant du Real Madrid entre dans la salle. Tous les regards se tournent vers lui. Il s'approche de toi et te tends une lettre contenant un contrat professionnel avec le club.",
    image: "./assets/img/contract.jpg",
    boutons: [{
        titre: "Accepter le contrat",
        destination: "match",
      },
      {
        titre: "Décliner et poursuivre tes études.",
        destination: "mcdo",
      },
    ],
  },
  mcdo: {
    titre: "Echec",
    image: "./assets/img/macdonalds.jpg",
    description: "Malheureusement, tu échoues lamentablement à l'école. Tu gardes un regret éternel pour avoir refusé ce contrat.",
    boutons: [{
      titre: "Retour",
      destination: "contrat",
    }, ],
  },
  match: {
    titre: "Premier match",
    description: "Après avoir choisi de rejoindre le Real Madrid, tu te retrouves sur le banc des remplaçants lors de ton premier match. Le match est intense, mais l'entraîneur ne t'a pas encore fait entrer.",
    image: "./assets/img/match.jpg",
    boutons: [{
        titre: "Demander au coach de te faire rentrer sur le terrain.",
        destination: "confiance",
      },
      {
        titre: "Attendre patiemment que le coach décide de te faire entrer de lui-même.",
        destination: "patience",
      },
    ],
  },
  confiance: {
    titre: "Gagner la confiance de tous",
    description: "Tu rentre à  la 2ème mi-temps. Tu fais un bon match et tu commence a prendre tes aises. Tu es complètement épuisé à la fin du match.",
    image: "./assets/img/confiance.webp",
    boutons: [{
      titre: "Prochain",
      destination: "victoire",
    }, ],
  },
  patience: {
    titre: "Faire preuve de patience",
    description: "Tu as choisi d'attendre patiemment que le coach décide de te faire entrer. Il te fait rentrer a la 82ème minute. C'est le temps de leur montrer ton talent",
    image: "./assets/img/patience.jpg",
    boutons: [{
      titre: "Prochain match",
      destination: "victoire",
    }, ],
  },
  victoire: {
    titre: "La Victoire",
    description: "Félicitations, ton équipe a remporté le match ! Tu as contribué à la victoire de l'équipe avec 1 but, et maintenant plusieurs choix s'offrent à toi. Que vas-tu faire ensuite ?",
    image: "./assets/img/victoire.jpg",
    boutons: [{
        titre: "S'entraîner pour s'améliorer davantage.",
        destination: "entrainement",
      },
      {
        titre: "Prendre un peu de repos pour récupérer.",
        destination: "repos",
      },
      {
        titre: "Célébrer la victoire avec l'équipe.",
        destination: "fete",
      },
    ],
  },
  entrainement: {
    titre: "Entraînement Intensif",
    image: "./assets/img/entrainement.jpg",
    description: "Pour devenir un meilleur joueur, tu décides de t'engager dans un programme d'entraînement intensif. Cela nécessite un dévouement total et des heures d'efforts sur le terrain. ",
    boutons: [{
      titre: "Prochain match",
      destination: "matchSuiv",
    }, ],
    twist: 1,
  },
  repos: {
    titre: "Un Repos Bien Mérité",
    image: "./assets/img/repos.jpg",
    description: "Après l'effort, le réconfort. Tu prends le temps de te reposer et de récupérer de l'intensité du match. Allez dormir, il y a un autre match demain.",
    boutons: [{
      titre: "Prochain match",
      destination: "matchSuiv",
    }, ],
    twist: 2,
  },
  fete: {
    titre: "Fêter la Victoire",
    image: "./assets/img/fete.jpg",
    description: "C'est l'heure de la fête ! Tu as célébré la victoire toute la nuit. Allez dormir, il y a un autre match demain.",
    boutons: [{
      titre: "Prochain match",
      destination: "matchSuiv",
    }, ],
    twist: 3,
  },
  matchSuiv: {
    titre: "Grand moment",
    description: "Un joueur vient de se blesser, le coach décide de te faire rentrer. Tu commences à t'échauffer.",
    image: "./assets/img/matchSuiv.jpg",
    boutons: [{
      titre: "remplacement",
      destination: "bravo",
    }, ],
    boutons: [{
      titre: "Retour",
      destination: "contrat",
    }, ],
  },
  bravo: {
    titre: "IN-CRO-YA-BLE",
    image: "./assets/img/bravo.jpg",
    gif: "Ronaldo_Juv.gif",
    video: "./assets/video/Ronaldo.mp4",
    description: "Félicitations, ta détermination et ton acharnement à t'entraîner ont porté leurs fruits. Grâce à tes efforts, tu as joué un rôle décisif dans la victoire de ton équipe lors du match. Continue à travailler dur pour atteindre de nouveaux sommets dans ta carrière sportive !",
  },
  moyen: {
    titre: "Pas mal",
    image: "./assets/img/moyen.jpg",
    gif: "Ronaldo_suii.gif",
    video: "./assets/video/Haaland.mp4",
    description: "Bravo ! Avec une performance exceptionnelle sur le terrain aujourd'hui, tu as prouvé que même après une bonne nuit de repos, ton talent naturel brille toujours. Ton jeu exceptionnel a grandement contribué à la victoire de ton équipe. Continue à donner le meilleur de toi-même sur le terrain !",
  },
  blessure: {
    titre: "Quel dommage!",
    image: "./assets/img/blessure.jpg",
    description: "Malgré les déceptions et les dépressions Suite à la pression, que chacun d'entre nous ressent Malgré la répression et les oppressions Les discriminations, puis les arrestations Malgré les provocations, les incarcérations Le manque de compréhension, les peurs et les pulsions Leur désir, de nous maintenir la tête sous l'eau Transcende ma motivation, nourrit mon ambition, on n'est pas condamné à l'échec",
   
  },
};

let titreChap = document.getElementById("titre");
let textChap = document.querySelector(".text");
let imageChap = document.getElementById("logo");
let jeu = document.querySelector(".jeu");
const ziif = new  Audio("./assets/son/son_btn.wav");
let recommencer = document.getElementById("reset");
let mute = document.getElementById("muteCheckbox");

function goToChapter(chapitre) {

  let obj = chapters[chapitre];
  localStorage.setItem("chapStored", chapitre);
  let chapStored = localStorage.getItem("chapStored");

  if (obj == undefined) {
    console.log("Clé de chapitre invalide : " + chapitre);
  } else {
    ziif.play();
    titreChap.textContent = obj.titre;
    textChap.textContent = obj.description;
    
    const boutons = document.querySelector(".boutons");
    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }

    let mediaWrapper = document.getElementById('media');
    mediaWrapper.innerHTML = '';
    if (obj.video != undefined) {
      let videoMp4 = document.createElement("video");
      videoMp4.src = obj.video;
      videoMp4.volume = 0;
      videoMp4.loop = true;
      videoMp4.play();
      mediaWrapper.appendChild(videoMp4)
    } 
    else{
      let imageElement = document.createElement("img");
      imageElement.src = obj.image;
      mediaWrapper.appendChild(imageElement)
    }
  

    if (obj.boutons && obj.boutons.length > 0) {
      for (let i = 0; i < obj.boutons.length; i++) {
        let nouveauBtn = document.createElement("button");
        nouveauBtn.setAttribute("id", "btn");
        nouveauBtn.textContent = obj.boutons[i].titre;
        nouveauBtn.addEventListener("click", () => {
          let chapitreActuel = obj.boutons[i].destination;
          goToChapter(chapitreActuel);
        });

        boutons.appendChild(nouveauBtn);
      }
    }

    if (chapitre === "entrainement") {
      twist = 1;
      localStorage.setItem("twist" , 1)
    } else if (chapitre === "repos") {
      twist = 2;
      localStorage.setItem("twist" , 2)
    } else if (chapitre === "fete") {
      twist = 3;
      localStorage.setItem("twist" , 3)
    }

    if (chapitre === "matchSuiv") {
      if (twist === 1) {
        obj.boutons[0].destination = "bravo";
      } else if (twist === 2) {
        obj.boutons[0].destination = "moyen";
      } else if (twist === 3) {
        obj.boutons[0].destination = "blessure";
      }
    }
  }
}


if(localStorage.getItem("chapStored") === null) {
  goToChapter("contrat");
}else {
  goToChapter(localStorage.getItem("chapStored"));
}


recommencer.addEventListener("click", function() {
  localStorage.setItem("chapStored", "");
  localStorage.setItem("twist", "");
  localStorage.setItem("mute", "")
  goToChapter("contrat");
})

mute.addEventListener("click", function() {
  if(mute.checked){
    ziif.volume= 0;
    localStorage.setItem("mute", "Muted")
  }else {
    ziif.volume= 0.25;
    localStorage.setItem("mute", "Unmuted")
  }
})