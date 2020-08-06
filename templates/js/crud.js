/* crud api */
function read_api(id){

}
function create_api(data){
    $('.msg.success').html('<p>Dado salvo com sucesso!</p>');
}
function update_api(data){
}
function delete_api(id){
    $('.msg.success').html('<p>Dado deletado com sucesso!</p>');
}
//------------------ end crud api

function loadResource(url, selector){
    $(selector).load(url).promise().done(()=>{
        index = url.indexOf('?')
        if(index!=-1){
            id = url.substring(index+4);
            findById(id);
        }
    });
}
function btnClick(event){
    event.preventDefault();
    url = $(event.target).attr('href');
    resource = '#form';
    loadResource(url, resource);
    $('#form').show(); 
}
$('.btn-new').click( (event)=>btnClick(event) );

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