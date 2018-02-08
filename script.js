const statifyHandler = () => {
  window.open('http://statify12.herokuapp.com/', '_blank');
};

const constructionFormsHandler = () => {
  window.open('http://construction-forms.herokuapp.com/', '_blank');
};

const flyOverMediaHandler = () => {
  window.open('http://flyovermedia.org', '_blank');
};

$('.statify').on('click', statifyHandler);
$('.construction-forms').on('click', constructionFormsHandler);
$('.fly-over-media').on('click', flyOverMediaHandler);
