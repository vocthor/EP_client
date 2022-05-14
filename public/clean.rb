#!/usr/bin/ruby
if(!File::zero?("./login.txt"))
    begin
        fs=File.open("./login.txt","w")
        rescue Errno::ENOENT
            abort "\t[Erreur: Echec d'ouverture du fichier de sortie]\n"
    end
    fs.close
end