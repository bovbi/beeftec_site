(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });


    $('.credits-text').empty().text( (new Date()).getFullYear()+ ' © Beef-Tec - Tecnologia em Pecuária');

    //widget cepea
    var widthCepea = $('#indicador-cepea').width();
    var script = ('<script type="text/javascript" src="http://www.cepea.esalq.usp.br/br/widgetproduto.js.php?fonte=arial&tamanho=10&largura={{widthCepea}}px&corfundo=ffffff&cortexto=333333&corlinha=ede7bf&id_indicador%5B%5D=2&id_indicador%5B%5D=54&id_indicador%5B%5D=77&id_indicador%5B%5D=12&id_indicador%5B%5D=92"></script>').replace('{{widthCepea}}', widthCepea); 
    postscribe('#indicador-cepea', script);

     //widget noticias agricolas
    var widthNoticias = $('#indicador-noticias-agricolas').width();
    var script = ('<script type="text/javascript" src="http://www.noticiasagricolas.com.br/widget/cotacoes.js.php?id=160&fonte=Arial%2C%20Helvetica%2C%20sans-serif&tamanho=10pt&largura={{widthNoticias}}px&cortexto=333333&corcabecalho=FFFFFF&corlinha=ede7bf&imagem=true&output=js"></script>').replace('{{widthNoticias}}', widthNoticias); 
    postscribe('#indicador-noticias-agricolas', script);


     $("#formulario-contato").submit(function (event){

        var handle200 = function(data, textStatus, jqXHR) {
            $("#messageSuccess").show();
        };

        var handle201 = function(data, textStatus, jqXHR) {
            $("#messageSuccess").show();
        };

        var handle404 = function(jqXHR, textStatus, errorThrown) {
            $("#messageError").show();
        };

        $.ajax({
            url:'https://jenkins.bovbi.com.br:8080/job/transf_site_send_email/buildWithParameters',
            data: $("#formulario-contato").serialize()+'&ts='+ (new Date().getTime()),
            method: 'GET',
            headers: {'Authorization': 'Basic ' + btoa('admin:b2c974514f280902d4e4adddbb479c2f')}
        }).done(function(data) {
            
            $("#messageSuccess").show();
        }).fail(function() {
            $("#messageError").show();
            
        });

        event.preventDefault();
    });

  

})(jQuery); // End of use strict

//formulario
function sendMessage(){

    var handle200 = function(data, textStatus, jqXHR) {
        $("#messageSuccess").show();
    };

    var handle201 = function(data, textStatus, jqXHR) {
        $("#messageSuccess").show();
    };

    var handle404 = function(jqXHR, textStatus, errorThrown) {
        $("#messageError").show();
    };

    $.ajax({
        url:'https://jenkins.bovbi.com.br:8080/job/transf_site_send_email/buildWithParameters',
        data: $("#formulario-contato").serialize()+'&ts='+ (new Date().getTime()),
        method: 'GET',
        headers: {'Authorization': 'Basic ' + btoa('admin:b2c974514f280902d4e4adddbb479c2f')}
    }).done(function(data) {
        
        $("#messageSuccess").show();
    }).fail(function() {
        $("#messageError").show();
        
    });
}

function validacao(){
    var status = true;

    if($("#formulario-contato"))
    return {
        status : true,
        fieldNameError : "Nome"
    };
}
