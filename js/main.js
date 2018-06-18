// ...................modal
// get modal
var modal=document.getElementById('newModal');
// get click here button
var modalButton=document.getElementById('modalButton');
// get close button (x)
var closeButton=document.getElementsByClassName('closeButton')[0];
// when modal button is clicked
modalButton.addEventListener('click', openModal);
// when x is clicked
closeButton.addEventListener('click', closeModal);
// opens modal when modal button is clicked
function openModal(){
	modal.style.display='block';
}
// closes modal when x is clicked
function closeModal(){
	modal.style.display='none';
}
