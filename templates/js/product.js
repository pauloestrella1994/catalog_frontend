var product_api = 'http://127.0.0.1:5000/api/product/'

// ============ Load data Json File
function load_data_json(){
    $.ajax({
        url : product_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            load_data(data);
        },
        error: (e) => {
            $('.msg.error.error.api').html('<h4>Erro ao acessar a api</h4>')
        }
    });
}
// ============ END Load data Json File
function update(data, id) {
    $.ajax({
        type : 'PUT',
        url: product_api+id,
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
    obj['id'] = data[0].value;
    obj['name'] = data[1].value;
    obj['description'] = data[2].value;
    obj['price'] = parseFloat(data[3].value);
    obj['gtin'] = data[4].value;
    obj['brand_id'] = parseInt(data[5].value);
    obj['product_condition_id'] = parseInt(data[6].value);
    obj['shipping_country_id'] = parseInt(data[7].value);
    return obj;
}

// ============ Load Json result in HTML
function load_data(data){
    data.forEach(e => {
        data += `<tr>
            <td>${e['id']}</td>
            <td>${e['name']}</td>"
            <td>${e['description']}</td>"
            <td>${e['price']}</td>"
            <td>${e['gtin']}</td>"
            <td>${e['brand_id']}</td>"
            <td>${e['product_condition_id']}</td>"
            <td>${e['shipping_country_id']}</td>"
            <td>
                <a class='btn-edit' href='product/form.html?id=${e['id']}'>Editar</a> |
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
        url : product_api
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='name']").val(e['name']);
                    $("[name='description']").val(e['description']);
                    $("[name='price']").val(e['price']);
                    $("[name='gtin']").val(e['gtin']);
                    $("[name='brand_id']").val(e['brand_id']);
                    $("[name='product_condition_id']").val(e['product_condition_id']);
                    $("[name='shipping_country_id']").val(e['shipping_country_id']);
                }
            });
        }
    });
}
// ============ END Find id in Json File and Load html
$(document).ready(()=>load_data_json());