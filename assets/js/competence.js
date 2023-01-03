var btnBio = document.getElementById('btnBio') ,
btnCompetence = document.getElementById('btnCompetence') ,
bio = document.getElementById('bio') ,
competence = document.getElementById('competence') ,
etude = document.getElementById('etude') ,
btnEtude = document.getElementById('btnEtude') ;

btnBio.style.background = "#0aad35" ;
competence.style.display = "none" ;

btnCompetence.onclick = function () {
    btnCompetence.style.background = "#0aad35" ;
    competence.style.display = "grid" ;
    
    btnBio.style.background = "transparent" ;
    bio.style.display = "none" ,
    btnEtude.style.background = "transparent" ,
    etude.style.display = "none" ;
} ;

btnBio.onclick = function () {
    btnBio.style.background = "#0aad35" ;
    bio.style.display = "grid" ;
    
    btnCompetence.style.background = "transparent" ;
    competence.style.display = "none" ,
    btnEtude.style.background = "transparent" ,
    etude.style.display = "none" ;
} ;

btnEtude.onclick = function () {
    btnEtude.style.background = "#0aad35" ;
    etude.style.display = "block" ;
    
    btnCompetence.style.background = "transparent" ;
    competence.style.display = "none" ,
    btnBio.style.background = "transparent" ,
    bio.style.display = "none" ;
} ;