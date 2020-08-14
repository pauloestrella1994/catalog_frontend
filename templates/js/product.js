var product_api = 'http://127.0.0.1:5000/api/product/'

// ============ Load data Json File
function load_data_json(){
    $.ajax({
        url :'../data/products.json'
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
        url :'../data/products.json'
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