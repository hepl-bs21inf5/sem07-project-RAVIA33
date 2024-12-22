<template>
  <div class="container my-5">
    
    <div class="text-center mb-5">
      <h1 class="display-4 text-primary">À propos de ce Quiz</h1>
      <p class="lead text-secondary">
        Découvrez l'histoire et les objectifs derrière la création de ce projet interactif.
      </p>
    </div>

    
    <div class="row">
      <div class="col">
        <h2 class="text-success mb-3">Un projet éducatif innovant</h2>
        <p>
          Ce quiz est un projet réalisé dans le cadre de ma certification en informatique web. 
          Il combine des compétences en développement frontend et en conception pédagogique.
        </p>
        <p>
          Le but était de créer une plateforme interactive où les utilisateurs peuvent tester leurs connaissances tout en découvrant la puissance de Vue.js et Bootstrap.
        </p>
        <p>
          Chaque aspect, du design à la logique, a été pensé pour offrir une expérience engageante et accessible.
        </p>
      </div>
    </div>

    
    <div class="row mt-5">
      <div class="col-md-4">
        <div class="card shadow border-0">
          <div class="card-body text-center">
            <i class="bi bi-lightbulb display-4 text-warning"></i>
            <h5 class="card-title mt-3">Idée</h5>
            <p class="card-text">
              Concevoir un quiz ludique qui met en avant des concepts simples mais engageants.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow border-0">
          <div class="card-body text-center">
            <i class="bi bi-code-slash display-4 text-primary"></i>
            <h5 class="card-title mt-3">Technologies</h5>
            <p class="card-text">
              Ce projet utilise <strong>Vue.js</strong>, <strong>Bootstrap</strong> et des pratiques modernes de développement web.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card shadow border-0">
          <div class="card-body text-center">
            <i class="bi bi-people display-4 text-success"></i>
            <h5 class="card-title mt-3">Objectif</h5>
            <p class="card-text">
              Apprendre tout en s'amusant ! Un quiz interactif pour tous les âges et niveaux.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Espacement pour la page */
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Customisation des icônes */
.card .bi {
  font-size: 3rem;
}

/* Couleurs de la typographie */
.text-primary {
  color: #ff69b4 !important;
}

.text-success {
  color: #ff1493 !important; 
}

.text-secondary {
  color: #6c757d !important; 
}
</style>

