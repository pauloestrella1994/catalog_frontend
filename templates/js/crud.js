/* crud api */
function read_api(id){

}
function create_api(data){
    console.log('asd')
    $('.msg.success').html('<p>Dado salvo com sucesso!</p>');
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


$('form').submit((event)=>{
    $('.msg.success').html('')
    $('.msg-error').html('');
    event.preventDefault();
    let message = '';
    let values = $(event.target).serializeArray();
    values.forEach(e => {
        $("[name='"+e['name']+"']").removeClass('input-error');
        if(e['value'].trim() == ''){
            message += '<p>* O campo '+e['name']+' precisa ser preenchido! </p>';
            $("[name='"+e['name']+"']").addClass('input-error');
        }
    });
    $('.msg-error').html(message);
    if(message==''){
        create_api(values);
    }
});