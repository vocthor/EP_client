#!/bin/bash

# Permet d'accéder aux ports usb
# Ne pas oublier de contourner le sudo en modifiant avec visudo
# Laisser sudo tout de même
sudo modprobe -r pn533_usb
# Récupération du contenu du lecteur nfc et redirection vers le script ruby qui traite avec une regex
# et stocke l'UID dans un fichier texte : mettre le path absolu du .rb
watch -n 1 'nfc-list | ./traitement.rb ; sleep 5 ; ./clean.rb'