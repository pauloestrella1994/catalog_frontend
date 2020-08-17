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
        url : product_api+id
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            $("[name='id']").val(data.id);
            $("[name='name']").val(data.name);
            $("[name='description']").val(data.description);
            $("[name='price']").val(data.price);
            $("[name='gtin']").val(data.gtin);
            $("[name='brand_id']").val(data.brand_id);
            $("[name='product_condition_id']").val(data.product_condition_id);
            $("[name='shipping_country_id']").val(data.shipping_country_id);
        }
    });
}
// ============ END Find id in Json File and Load html
$(document).ready(()=>load_data_json());