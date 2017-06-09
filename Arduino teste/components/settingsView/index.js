'use strict';

app.settingsView = kendo.observable({
    onShow: function() {
                if (datagl <= 50) {
                    $(".gl").removeClass("gl_red");
                    $(".gl").removeClass("gl_green");
                    setTimeout(function(){
                    $(".gl").addClass("gl_green");
                    }, 1200);
                    $(".texto_pagetwo2").removeClass("texto_pagetwo2_color_red");
                    $(".texto_pagetwo2").addClass("texto_pagetwo2_color_green");
					$(".resultado").addClass("icon_1");
					$(".texto_resultado").html("<div class='resultado_frase'> Você está sóbrio!</div>Um conselho: Se não aguenta, bebe leite!");
					$(".texto_resultado").addClass("esta_sobrio");
					$(".imprimindo").addClass("remove_imprimindo");	
                    $(".imprimindo").removeClass("add_imprimindo");
				}
 
				if (datagl >= 51 && datagl <=200) {
                  $(".texto_pagetwo2").removeClass("texto_pagetwo2_color_green");
                  $(".texto_pagetwo2").addClass("texto_pagetwo2_color_red");  
                  $(".gl").removeClass("gl_green");
                  $(".gl").removeClass("gl_red");
                  setTimeout(function(){
                  $(".gl").addClass("gl_red");
                  }, 1300);
				  $(".resultado").addClass("icon_2");
				  $(".texto_resultado").html("<div class='resultado_frase'>Embriagado! Mas só de leve.</div>Está sendo multado por alguns goles de cerveja!");
				  $(".imprimindo").addClass("remove_imprimindo");
                  setTimeout(function(){
                    $(".imprimindo").removeClass("remove_imprimindo");
                  }, 6000);
                  
                  
				}
        
				if (datagl >= 201 && datagl <=400) {
                  $(".texto_pagetwo2").removeClass("texto_pagetwo2_color_green");
                  $(".texto_pagetwo2").addClass("texto_pagetwo2_color_red");  
                  $(".gl").removeClass("gl_green");
                  $(".gl").removeClass("gl_red");
                  setTimeout(function(){
                  $(".gl").addClass("gl_red");
                  }, 1300);
				  $(".resultado").addClass("icon_3");
				  $(".texto_resultado").html("<div class='resultado_frase'>Você Está embriagado!</div>Se pensa que cachaça é água... cachaça não é água não!");
				  $(".imprimindo").addClass("remove_imprimindo");
                  setTimeout(function(){
                    $(".imprimindo").removeClass("remove_imprimindo");
                  }, 6000);
				}

				if (datagl >= 401 && datagl <=1000) {
                  $(".texto_pagetwo2").removeClass("texto_pagetwo2_color_green");
                  $(".texto_pagetwo2").addClass("texto_pagetwo2_color_red");  
                  $(".gl").removeClass("gl_green");
                  $(".gl").removeClass("gl_red");
                  setTimeout(function(){
                  $(".gl").addClass("gl_red");
                  }, 1300);
				  $(".resultado").addClass("icon_4");
				  $(".texto_resultado").html("<div class='resultado_frase'>Nossa! É coma alcoólico!!</div> Pague a multa e chame o samu!");	  
				  $(".imprimindo").addClass("remove_imprimindo");
                  setTimeout(function(){
                    $(".imprimindo").removeClass("remove_imprimindo");
                  }, 6000);
				}
		
			
			
				
				//G/L
				
					if (datagl <= 50) {
						$(".gl").html("0.0 g/l");
					}
				
					if (datagl >= 51 && datagl <= 70) {
						$(".gl").html("0.1 g/l");
					}
					
					if (datagl >= 71 && datagl <= 90) {
						$(".gl").html("0.2 g/l");
					}
					
					if (datagl >= 91 && datagl <= 110) {
						$(".gl").html("0.3 g/l");
					}
					
					if (datagl >= 111 && datagl <= 130) {
						$(".gl").html("0.4 g/l");
					}
				
					if (datagl >= 131 && datagl <= 150) {
						$(".gl").html("0.5 g/l");
					}
					
					if (datagl >= 151 && datagl <= 170) {
						$(".gl").html("0.6 g/l");
					}
					
					if (datagl >= 171 && datagl <= 190) {
						$(".gl").html("0.7 g/l");
					}
					
					if (datagl >= 191 && datagl <= 210) {
						$(".gl").html("0.8 g/l");
					}
					
					if (datagl >= 211 && datagl <= 230) {
						$(".gl").html("0.9 g/l");
					}
					
					if (datagl >= 231 && datagl <= 250) {
						$(".gl").html("1.0 g/l");
					}
				
					if (datagl >= 251 && datagl <= 270) {
						$(".gl").html("1.1 g/l");
					}
					
					if (datagl >= 271 && datagl <= 290) {
						$(".gl").html("1.2 g/l");
					}
				
					if (datagl >= 291 && datagl <= 310) {
						$(".gl").html("1.3 g/l");
					}
					
					if (datagl >= 311 && datagl <= 330) {
						$(".gl").html("1.4 g/l");
					}
					
					if (datagl >= 331 && datagl <= 350) {
						$(".gl").html("1.5 g/l");
					}
					
					if (datagl >= 351 && datagl <= 370) {
						$(".gl").html("1.6 g/l");
					}
					
					if (datagl >= 371 && datagl <= 390) {
						$(".gl").html("1.7 g/l");
					}
				
					if (datagl >= 391 && datagl <= 410) {
						$(".gl").html("1.8 g/l");
					}
				
					if (datagl >= 411 && datagl <= 1000) {
						$(".gl").html("1.9 g/l");
					} 
    
    },
    afterShow: function() {}
});
app.localization.registerView('settingsView');

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function () {
    app.settingsView.set('title', 'Settings');
})();
// END_CUSTOM_CODE_settingsView