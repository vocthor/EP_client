#!/usr/bin/ruby

# ATTENTION AU PATH DU FICHIER DE SORTIE
vide = File::zero?("./login.txt")
# Boucle de lecture du fichier d'entrée
begin
	# Boucle de lecture du contenu fournit par 'nfc-list' dans l'entrée standarde
	while (line = STDIN.readline)
		# Si un UID est capté et si login.txt est vide, l'y stocker  
		if ((line =~ /UID.+:\s([\w\s]+)$/))
			# Ouverture du fichier de sortie
			begin
				fs=File.open("./login.txt","w")
				rescue Errno::ENOENT
					abort "\t[Erreur: Echec d'ouverture du fichier de sortie]\n"
			end
			# Ajout de l'UID au fichier
			fs.print(Integer("0x" + ($1.gsub! ' ','')))
			# Fermeture du fichier de sortie
			fs.close		
		end		
	end
	rescue EOFError
end