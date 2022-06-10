/**
 * Criar variaveis
 * Banner 1
 * Banner 2
 * Banner 3
 * criar botao
 * 1
 * 2
 * 3
 * acionar botao 2 tira classe banner-visiel  do banner 1 e 3
 * acionar botao 3tira classe banner-visivel do banner 1 e 2
 * 
 */
 const bannerUm = document.getElementById('banner-1');
 const bannerDois = document.getElementById('banner-2');
 const bannerTres = document.getElementById('banner-3');
 


function sliderFunction(banner) {
    banner.classList.add("banner-visivel");
    if (banner != bannerUm) {
        bannerUm.classList.remove("banner-visivel");
    }; 
    if (banner != bannerDois) {
        bannerDois.classList.remove("banner-visivel");
    }; 
    if (banner != bannerTres) {
        bannerTres.classList.remove("banner-visivel");
    };




    //
    //tudo que for diferente de banner fica invisivel
    // tirar a visibilidade do que não é banner  
}
