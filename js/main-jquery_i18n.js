jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'en': {
      'site-title': 'Nature Through the Viewfinder',
      'common-title-photos': 'Photos',
      'common-title-gallery': 'Photo gallery',
      'common-title-100birds': '100 Birds challenge',
      'common-title-contact': 'Contact me',
      'photos-text': 'I have collected few of my photos below. To see more photos go to my ',
      'photos-text-link': 'photo gallery',
      'gallery-text': 'You can access my photo gallery here: ',
      'gallery-text-link': 'galleria.akiblomqvist.fi',
      'birds-text-link-1': 'BirdLife Finland',
      'birds-text-1': ' has arranged this year (2017) a fun ',
      'birds-text-link-2': 'Identify 100 birds',
      'birds-text-2': '-challenge which purpose is to inspire people to bird watching and at the same time celebrate Finland\'s 100 years of independence. You can find my latests stats here: ',
      'birds-text-link-3': 'akiblomqvist.fi/100lintulajia',
      'contact-text-1': 'Best way to contact me is by email ',
      'contact-text-2': 'firstname.lastname@gmail.com.',
      'contact-text-3': ' You know what to replace... Also note the profile links in the footer.',
      'nav-close': 'Close x'
    },
    'fi': {
      'site-title': 'Luontoa etsimen läpi',
      'common-title-photos': 'Kuvia',
      'common-title-gallery': 'Valokuvagalleria',
      'common-title-100birds': '100 Lintulajia haaste',
      'common-title-contact': 'Ota yhteyttä',
      'photos-text': 'Alle olen koonnut muutamia minun ottamia valokuvia. Enemmän kuvia löytyy ',
      'photos-text-link': 'valokuvagalleriasta',
      'gallery-text': 'Valokuvagalleriaani pääset tästä: ',
      'gallery-text-link': 'galleria.akiblomqvist.fi',
      'birds-text-link-1': 'BirdLife Suomi ry',
      'birds-text-1': ' järjestää vuoden 2017 aikana hauskan ',
      'birds-text-link-2': 'Tunnista 100 lintulajia',
      'birds-text-2': '-kampanjan, jonka tarkoituksena on innostaa ihmisiä lintuharrastuksen pariin ja samalla juhlistaa Suomen 100-vuotisjuhlaa. Minun ajantasaisen \'bongaus\' tilanteen löydät täältä: ',
      'birds-text-link-3': 'akiblomqvist.fi/100lintulajia',
      'contact-text-1': 'Minuun saa parhaiten yhteyttä sähköpostitse ',
      'contact-text-2': 'etunimi.sukunimi@gmail.com.',
      'contact-text-3': 'Nokkelimmat osaavat laittaa minun nimet oikeille paikoille... Sivun alapalkissa löytyy linkkejä minun eri palveluiden profiileihin.',
      'nav-close': 'Sulje x'
    }
  });

  update_texts();
});
