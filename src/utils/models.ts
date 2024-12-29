export enum QuestionState { /*export exporte l'enum dans d'autres fichiers*/
    Empty = "Empty",        /*question non répondue.*/
    Fill = "Fill",          /* question répondue*/
    Submit = "Submit",      /*question soumise*/
    Correct = "Correct",    /*réponse juste*/
    Wrong = "Wrong",        /*éponse fausse*/
  }

  /* Question state contient les cinq états qu'une question peut avoi, ici .
  Le type enum fait que QuestionState peut prendre chacunes des valeurs définies*/
