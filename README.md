# Compte rendu du TP 6 de JXT


+ ****Auteurs****

     **Oumar BALLO**

     **Roland KOUASSI**


Ce TP portait sur la mise en place d'un système d'alerte.


# Objectif : 
Réaliser un service avec NodeJS et MongoDB offrant une API CRUD. 
+ Cette API sera sécurisée par un JWT fourni par le service élaboré en première partie de TP avec Stéphane Michel.
+ le contrat d'API est celui fourni dans le swagger de ce projet


## Fonctionnement du code
Pour exécuter notre code, il faut suivre les étapes suivantes : 

+ Taper la commande   **git clone https://github.com/Roland1000/Tp6JXT.git**   pour cloner notre depot Git pour avoir notre   code en local sur votre machine.

+ Ensuite taper la commande   **npm install**   pour installer toutes les dependances qu'il faut pour executer notre code. 
  Puis taper la commande  **npm start**  pour lancer le serveur qui écoute sur le port 3000. En effet, nous avons utilisé     le module  **nodemon** qui permet au serveur de se relancer automatiquement chaque qu'il y a des modifications.
   
+ Après avoir lancer le serveur, il faudra utiliser **postman** pour lui envoyer des requêtes. Dans un premier temps on va     envoyer au serveur une requête post ( création d'une alerte) qui permettra de création la base données mongoDB que nous     avons appélée  **MyAlertsBD**.La requête à envoyer au serveur est : http://localhost:3000/v1/alerts.
   
   
   
## Ce qui ne marche pas
La commande est **npm test** permettant normalement de lancer les tests ne marche pas. En effet, nous n'avons pas pu implémenter les tests car nous avons pris beaucoup de retard sur ce TP. 



## Nos difficultés
Lors de ce TP, nous avons rencontré cerataines difficultés notamment avec la partie création de la base de données mongoDB. En effet, après spécifier le schema de notre base de données dans le fichier Alert.js, nous arrivions pas à envoyer de requête au serveur à travers **postman** du fait que les champs de notre schéma soirnt réquis "required". N'ayant pas trouvé la solution à ce problème, nous avons pris l'initiative de commenter les differentes lignes "required". Et suite à cela, on est parvenu à envoyer des requêtes au serveur donc créer la base de données.
