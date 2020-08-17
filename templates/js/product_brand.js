var product_brand_api = 'http://127.0.0.1:5000/api/product-brand/'

// ============ Load data Json File
function load_data_json(){
    $.ajax({
        url : product_brand_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            load_data(data);
        },
        error:(e)=>{
            $('.msg.error.error.api').html('<h4>Erro ao acessar a api</h4>')
        }
    });
}
// ============ END Load data Json File
function update(data, id) {
    $.ajax({
        type : 'PUT',
        url: product_brand_api+id,
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
    jQuery.map(data, function(n, i) {
        obj[n.name] = n.value;
    });
    return obj
}

// ============ Load Json result in HTML
function load_data(data){ 
    data.forEach(e => {
        data += `<tr>
            <td>${e['id']}</td>
            <td>${e['name']}</td>"
            <td>${e['full_name']}</td>"
            <td>
                <a class='btn-edit' href='product-brand/form.html?id=${e['id']}'>Editar</a> |
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
        url : product_brand_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='name']").val(e['name']);
                    $("[name='full_name']").val(e['full_name']);
                }
            });
        }
    });
}
// ============ END Find id in Json File and Load html


function save(data) {
    $.ajax({
        type : 'POST',
        url: product_brand_api,
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