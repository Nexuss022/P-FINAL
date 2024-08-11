document.addEventListener("DOMContentLoaded", function () {
  // Sélection des boutons Ajouter au panier et Supprimer
  const boutonsAjouterPanier = document.querySelectorAll(".ajouter-panier");
  const boutonsSupprimerProduit =
    document.querySelectorAll(".supprimer-produit");

  // le Gestionnaire d'évé pour ajouter un produit au panier
  boutonsAjouterPanier.forEach((bouton) => {
    bouton.addEventListener("click", function () {
      alert("Produit ajouté au panier");
    });
  });

  // Gestionnaire d'événement pour supprimer un produit
  boutonsSupprimerProduit.forEach((bouton) => {
    bouton.addEventListener("click", function () {
      const produit = this.closest(".produit");
      if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
        produit.remove();
      }
    });
  });

  // Gestionnaire d'envoi du formulaire de contact
  const formulaireContact = document.getElementById("formulaire-contact");
  formulaireContact.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Simuler l'envoi de données
    const email = document.getElementById("email").value;

    // Envoyer une requête AJAX ou traiter le formulaire ici si nécessaire

    // Afficher un message de confirmation
    alert("Merci beaucoup ! Nous avons bien reçu votre message.");

    // Réinitialiser le formulaire
    formulaireContact.reset();
  });
});
