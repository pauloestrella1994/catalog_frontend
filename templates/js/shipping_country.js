// ============ Load data Json File
var shipping_country_api = 'http://127.0.0.1:5000/api/shipping-country/'

function load_data_json(){

    $.ajax({
        url : shipping_country_api
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
            <td>${e['name']}</td>"
            <td>${e['imported']}</td>"
            <td>
                <a class='btn-edit' href='shipping-country/form.html?id=${e['id']}'>Editar</a> |
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

        url : shipping_country_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='name']").val(e['name']);
                    $("[name='imported']").val(e['imported']);
                }
            });
        }
    });
}
// ============ END Find id in Json File and Load html

function save(data) {
    debugger;
    $.ajax({
        type : 'POST',
        url: shipping_country_api,
        contentType: 'application/json',
        data: data,
        success: () => {
            load_data_json();
        },
        error: (e) => {
            $('.msg.error.error.api').html('<h4>Erro ao acessar a api</h4>')
        }
    });
}

$(document).ready(()=>load_data_json());