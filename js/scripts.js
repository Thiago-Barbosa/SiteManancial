//VARIAVEIS

var velocidade = "1000"

//FUNCOES
$( document ).ready(function() {  
	//código para sair de qualquer seção para home.
	$('.home, .logo').click(function() {
  		$('html, body').animate({scrollTop: $(".home-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para historia.
	$('.historia').click(function() {
  		$('html, body').animate({scrollTop: $(".historia-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para servicos.
	$('.servicos').click(function() {
  		$('html, body').animate({scrollTop: $(".servicos-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para lugar.
	$('.lugar').click(function() {
  		$('html, body').animate({scrollTop: $(".lugar-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para galeria.
	$('.galeria').click(function() {
  		$('html, body').animate({scrollTop: $(".galeria-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para lugar.
	$('.ajude').click(function() {
  		$('html, body').animate({scrollTop: $(".ajude-section").offset().top}, velocidade);
	});

	//código para sair de qualquer seção para contato.
	$('.goto_contato, .contato').click(function() {
  		$('html, body').animate({scrollTop: $(".contato-section").offset().top}, velocidade);
	});
});

