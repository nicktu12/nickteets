const statifyHandler = () => {
  window.open('http://statify12.herokuapp.com/', '_blank');
};

const constructionFormsHandler = () => {
  window.open('http://construction-forms.herokuapp.com/', '_blank');
};

const flyOverMediaHandler = () => {
  window.open('http://flyovermedia.org', '_blank');
};

const githubHandler = () => {
  window.open('https://github.com/nicktu12', '_blank');
};

const linkedinHandler = () => {
  window.open('https://linkedin.com/in/nickteets', '_blank');
};

$('.statify').on('click', statifyHandler);
$('.construction-forms').on('click', constructionFormsHandler);
$('.fly-over-media').on('click', flyOverMediaHandler);
$('.github-icon').on('click', githubHandler);
$('.linkedin-icon').on('click', linkedinHandler);
