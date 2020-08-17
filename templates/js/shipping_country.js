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
function update(data, id) {
    $.ajax({
        type : 'PUT',
        url: shipping_country_api+id,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: () => {
            load_data_json();
        },
        error: (e) => {
            $('.msg.error.error.api').html('<h4>Erro ao acessar a api</h4>')
        }
    });
}

function toJson(data) {
    let obj = {};
    obj['name'] = data[1].value;
    obj['imported'] = data[2] !== undefined ? true : false;
    return obj
}

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
        url : shipping_country_api+id
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            $("[name='id']").val(data.id);
            $("[name='name']").val(data.name);
            $("[name='imported']").prop('checked', data.imported);
        }
    });
}
// ============ END Find id in Json File and Load html
$(document).ready(()=>load_data_json());