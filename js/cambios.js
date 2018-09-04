$(document).ready(function () {
    $("#btn1").click(function(){
        $("img").toggle(1000);
    });
    $("#btn2").click(function(){
        $("body").addClass("Img2");
        $("body").removeClass("Img1");
        $("body").removeClass("Img3");
        $("body").removeClass("Img4");
        $("body").removeClass("Img5");
    });
    $("#btn3").click(function(){
        $("body").addClass("Img3");
        $("body").removeClass("Img1");
        $("body").removeClass("Img2");
        $("body").removeClass("Img4");
        $("body").removeClass("Img5");
        $("body").addClass("StyleArmy");
        $(".textoSI").append("<p class='psI'>Spartans Conocidos: Gilly, Avery Junior Johnson, James Lee, Morales, Gladys Swanson, Candidato 047.</p>");
        $(".textoSII").append("<p class='psII'>Unidades: Blue Team, Red Team, Black Team, entre otros.</p>");
        $(".textoSIII").append("<p class='psIII'>Unidades: Echo, Foxtrot, India, Katana, entre otros.</p>");
        $(".textoSIV").append("<p class='psIV'>Unidades: Equipo de Asalto Majestic, Equipo de Asalto Carmesí, Equipo de Asalto Osiris, entre otros.</p>");
    });
    $("#btn4").click(function(){
        $("body").addClass("Img4");
        $("body").removeClass("Img1");
        $("body").removeClass("Img2");
        $("body").removeClass("Img3");
        $("body").removeClass("Img5");
        $("#SI img").attr('src','https://vignette.wikia.nocookie.net/halo/images/b/bb/Logotipo_ORION.png/revision/latest?cb=20170423191307&path-prefix=es');
        $("#SII img").attr('src','https://img00.deviantart.net/33b5/i/2015/182/9/3/halo_5_blue_team_xb1_wallpaper_by_disturbedshifty-d8ziyjz.jpg');
        $("#SIII img").attr('src','https://img00.deviantart.net/d245/i/2011/039/2/6/noble_team_artwork_bungie_by_giovannimicarelli-d3939h7.png');
        $("#SIV img").attr('src','https://vignette.wikia.nocookie.net/halo/images/6/63/Spartan_Ops_Recruit.jpg/revision/latest?cb=20121104144846&path-prefix=es');
    });
    $("#btn5").click(function(){
        $("body").addClass("Img5");
        $("body").removeClass("Img1");
        $("body").removeClass("Img2");
        $("body").removeClass("Img3");
        $("body").removeClass("Img4");
        $("#SI img").attr('src','https://vignette1.wikia.nocookie.net/facts-of-everything/images/9/93/Sgt._Johnson.jpg/revision/latest?cb=20131227222058');
        $("#SII img").attr('src','http://img6.gram.pl/20150413164625.jpg');
        $("#SIII img").attr('src','https://i.pinimg.com/originals/6a/4b/ca/6a4bcaaef98e1f2ca05d424576e5e862.jpg');
        $("#SIV img").attr('src','https://vignette.wikia.nocookie.net/halo/images/3/3d/Equipo_de_Asalto_Majestic.jpg/revision/latest?cb=20150408222152&path-prefix=es');
        $("p").remove(".psI");
        $("p").remove(".psII");
        $("p").remove(".psIII");
        $("p").remove(".psIV");
        $("body").removeClass("StyleArmy");
    });
});