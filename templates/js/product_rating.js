// ============ Load data Json File
var product_rating_api = 'http://127.0.0.1:5000/api/product-rating/'

function load_data_json(){

    $.ajax({
        url : product_rating_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            load_data(data);
        },
        error:(e)=>{
            $('.msg.error.error.api').html('<h4> Erro ao acessar a api</h4>')
        }
    });
}
// ============ END Load data Json File
// ============ Load Json result in HTML
function load_data(data){
    data.forEach(e => {
        data += `<tr>
            <td>${e['id']}</td>
            <td>${e['score']}</td>"
            <td>${e['status']}</td>"
            <td>${e['person_id']}</td>"
            <td>${e['product_id']}</td>"
            <td>
                <a class='btn-edit' href='product-rating/form.html?id=${e['id']}'>Editar</a> |
                <a class='btn-delete' href='#'>Deletar</a>
            </td>
        </tr>`;
    });

        $('table tbody').html(data).promise().done(()=>{
            $('.btn-edit').click( (event)=>btnClick(event) );
        });
}
// ============ END Load Json result in HTML
// ============ Find id in Json File and Load html
function findById(id){
    $.ajax({
        url : product_rating_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='score']").val(e['score']);
                    $("[name='status']").val(e['status']);
                    $("[name='person_id']").val(e['person_id']);
                    $("[name='product_id']").val(e['product_id']);
                }
            });
        }
    });
}


function delete_data(id){
    $.ajax({
        url : product_rating_api + id
        , dataType: 'json'
        , type: 'DELETE'
        , success: function(){
            alert('Deleted')
        }
    })
}

// ============ END Find id in Json File and Load html

$(document).ready(()=>load_data_json());