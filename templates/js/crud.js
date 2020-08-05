/* crud api */
function read_api(id){

}
function create_api(data){

}
function update_api(data){

}
function delete_api(id){

}
//------------------ end crud api

function loadResource(url, selector){
    $(selector).load(url);
}
function btnClick(event){
    event.preventDefault();
    url = $(event.target).attr('href');
    resource = '#content';
    loadResource(url, resource);
}
$('.btn-new').click( (event)=>btnClick(event) );
$('.btn-edit').click( (event)=>btnClick(event) );
$('.btn-list-all').click( (event)=>btnClick(event) );

$('.btn-delete').click( (event)=>{
    answer = confirm('Deseja deletar?');
    if(answer){
        id= 0;
        delete_api(id);
    }
    else{
        event.preventDefault();
    }
} );


