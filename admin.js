/*Validates admin assignment input and runs the function if an input is found
@author Ben Zhang 15904358
*/

const formsearch = document.getElementById('formsearch');
const searchbutton = document.getElementById('search-submit');
const assign = document.getElementById('assign');

const taxi = document.getElementById('taxi');

//validates if the form exists
if(formsearch){
	formsearch.addEventListener('submit',(e) => {
		//prevent default action of submitting the form
		e.preventDefault();
		//if the search button is clicked run this function
		searchbutton.onclick = function(){
			searchbooking('admin.php', 'results');
		}
		//validate taxi input exists
		if(taxi.value == null || !(taxi.value === '')){
			//if assign taxi is clicked run this function
			assign.onclick = function(){
				assigntaxi('assign.php', 'results', taxi.value);
			}
		}
	});
}

