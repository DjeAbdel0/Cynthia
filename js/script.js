const chapters = {
  debut: {
    titre: "Cynthia Cherche l'amour",
    description: "Tu cherches l'amour ? Ça tombe bien, ici la jeune et charmante demoiselle le cherche aussi. La vraie question est : Es-tu à la hauteur ?",
    image: "./assets/foto2cynthia.png",
    boutons: [{
      titre: "Je suis prêt",
      destination: "premiereQ",
    },
    {
      titre: "Je suis en couple",
      destination: "couple",
    },
    ],
  },
  couple: {
    titre: "Ouf",
    image: "./assets/couple.webp",
    description: "Qu'est-ce que tu fais là alors ? Bouge de là !",
    boutons: [{
      titre: "Retour",
      destination: "debut",
    },],
  },
  premiereQ: {
    titre: "Première question",
    description: "Es-tu un homme sans vice ? C'est vraiment, vraiment important mon frérot.",
    image: "./assets/sincere.webp",
    boutons: [{
      titre: "Bien sûr",
      destination: "DeuxiemeQ",
      correct: true,
    },
    {
      titre: "Hahaha, ça existe ??",
      destination: "DeuxiemeQ",
      correct: false,
    },
    ],
  },
  DeuxiemeQ: {
    titre: "Deuxième question",
    description: "Elle fait une blague pourrie, tu...",
    image: "./assets/drole.webp",
    boutons: [{
      titre: "Rigoles",
      destination: "troisiemeQ",
      correct: true,
    },
    {
      titre: "Rigoles pas",
      destination: "troisiemeQ",
      correct: false,
    },
    ],
  },
  troisiemeQ: {
    titre: "Troisième question",
    description: "Elle te demande de choisir entre une soirée tranquille à la maison ou une soirée avec des amis. Tu choisis :",
    image: "./assets/soiree.webp",
    boutons: [{
      titre: "Netflix",
      destination: "QuatrièmeQ",
      correct: true,
    },
    {
      titre: "Go sortir",
      destination: "QuatrièmeQ",
      correct: false,
    },
    ],
  },
  QuatrièmeQ: {
    titre: "Quatrième question",
    description: "Elle te dit : je suis fatiguée, tu réponds :",
    image: "./assets/fatigue.webp",
    boutons: [{
      titre: "Le canapé t'a épuisée ?",
      destination: "CinquièmeQ",
      correct: true,
    },
    {
      titre: "Cool",
      destination: "CinquièmeQ",
      correct: false,
    },
    ],
  },
  CinquièmeQ: {
    titre: "Last but not the least",
    description: "Elle te demande si elle a grossi. Ta réponse ?",
    image: "./assets/grossi.webp",
    boutons: [{
      titre: "t'es parfate",
      destination: "resultat",
      correct: true,
    },
    {
      titre: "La gravité, tu sais...",
      destination: "resultat",
      correct: false,
    },
    ],
  },
  resultat: {
    titre: "Fini!!",
    description: "On a comptabilisé tes réponses, allons voir les résultats.",
    image: "./assets/resultat.webp",
    boutons: [{
      titre: "Go!!",
      destination: "bravo",
    },],
  },
  bravo: {
    titre: "IN-CRO-YA-BLE",
    image: "./assets/bravo.webp",
    gif: undefined,
    video: undefined,
    description: "Félicitations ! Tu as répondu correctement à toutes les questions ! Ta sagesse et ton charme t'ont permis de briller tout au long du jeu. Félicitations, tu es prêt à conquérir le cœur de Cynthia ! 🌟",
  },
  moyen: {
    titre: "Pas mal",
    image: "./assets/presque.webp",
    description: "Pas mal ! Tu as fait un bon travail, mais quelques petites erreurs t'ont empêché d'atteindre la perfection. Mais ne t'inquiète pas, avec un peu plus de pratique, tu seras au top la prochaine fois ! 💪",
  },
  out: {
    titre: "Quel dommage !",
    image: "./assets/out.webp",
    description: "Quel dommage... Il semble que tu n'aies pas tout à fait réussi à impressionner Cynthia cette fois-ci, mais ce n'est pas la fin du monde. Tu peux toujours essayer à nouveau et améliorer ta performance ! Il n'y a pas de honte à se relever après un échec. 💔",
  },
};

let count = 0;
let titreChap = document.getElementById("titre");
let textChap = document.querySelector(".text");
let imageChap = document.getElementById("logo");
let jeu = document.querySelector(".jeu");
let recommencer = document.getElementById("reset");
let mute = document.getElementById("muteCheckbox");

function goToChapter(chapitre) {

  let obj = chapters[chapitre];
  localStorage.setItem("chapStored", chapitre);
  let chapStored = localStorage.getItem("chapStored");

  if (obj == undefined) {
    console.log("Clé de chapitre invalide : " + chapitre);
  } else {
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
    else {
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
          if (obj.boutons[i].hasOwnProperty('correct')) {
            if (obj.boutons[i].correct) {
              count += 1;  // Réponse correcte
            }
          }

          console.log("Score actuel: " + count);

          goToChapter(chapitreActuel);
        });

        boutons.appendChild(nouveauBtn);
      }
    }


    if (chapitre === "resultat") {
      if (count === 5) {
        obj.boutons[0].destination = "bravo";
      } else if (count >= 2 && count < 5) {
        obj.boutons[0].destination = "moyen";
      } else if (count < 2) {
        obj.boutons[0].destination = "out";
      }
    }
  }
}


if (localStorage.getItem("chapStored") === null) {
  goToChapter("debut");
} else {
  goToChapter(localStorage.getItem("chapStored"));
}


recommencer.addEventListener("click", function () {
  localStorage.setItem("chapStored", "");
  localStorage.setItem("twist", "");
  localStorage.setItem("mute", "")
  goToChapter("debut");
  count = 0;
})

