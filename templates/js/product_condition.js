// ============ Load data Json File
function load_data_json(){
    $.ajax({
        url :'../data/product_conditions.json'
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            load_data(data);
        }
    });
}
// ============ END Load data Json File
// ============ Load Json result in HTML
function load_data(data){
    data.forEach(e => {
        data += `
        <tr>
            <td>${e['id']}</td>
            <td>${e['name']}</td>"
            <td>${e['description']}</td>"
            <td>
                <a class='btn-edit' href='product-condition/form.html?id=${e['id']}'>Editar</a> |
                <a class='btn-delete' href='#'>Deletar</a>
            </td>
        </tr>
        `;
    });
    
    $('table tbody').html(data).promise().done(()=>{
        $('.btn-edit').click( (event)=>btnClick(event) );
    });
}
// ============ END Load Json result in HTML
// ============ Find id in Json File and Load html
function findById(id){
    $.ajax({
        url :'../data/product_conditions.json'
        ,dataType : 'json'
        ,type : 'get'
        ,success: (data)=>{
            data.forEach(e => {
                if(e['id']==id){
                    $("[name='id']").val(e['id']);
                    $("[name='name']").val(e['name']);
                    $("[name='description']").val(e['description']);
                }
            });
        }
    });
}
// ============ END Find id in Json File and Load html
$(document).ready(()=>load_data_json());
