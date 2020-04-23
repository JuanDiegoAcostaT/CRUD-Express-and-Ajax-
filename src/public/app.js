$(function () {
    $('#getProducts').on('click', function(){
        $.ajax({
            url: '/products',
            success: function (products) {
                let tbody = $('tbody');

                tbody.html('');
                products.forEach(product => {
                    tbody.append(`
                    <tr>
                        <td class="id">
                            ${product.id}
                        </td>
                        <td>
                            <input type="text" class="name" value="${product.name}"></input>
                        </td>
                            <td>
                                <button class="upDate-button" >Update</button>
                                <button class="deleteButton" >Delete</button>
                            </td>
                    </tr>
                    `)
                })
            }
        })
    })

    $('#productForm').on('submit', function (e) {
        e.preventDefault();
      let newProduct = $('#newProduct');
      $.ajax({
          url : '/products',
          method: 'POST',
          data : {
              name : newProduct.val()
          },
          success: function (res) {
            $('#getProducts').click();
          }

      })
    })
})