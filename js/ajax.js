function loadSites() {
    var xh = new XMLHttpRequest();
    xh.open("GET", "../users.json", true)
    xh.setRequestHeader('Content-Type', 'application/json')
    xh.send()
    xh.onload = function () {
        if (this.status == 200) {
            var obj = JSON.parse(this.responseText)
            if (obj.length == 0) {
                $('#links').append(`
               <p>No Links Available. Please add a few links in users.json to get started.</p>
               `)
            } else {
                for (var i = 0; i < obj.length; i++) {
                    if (i === 0) {
                        $('#links').append(`
                        <div class="justify-content-center col-12 col-md-6 col-xl-4 my-4 mx-md-0">
                            <div class="card product-scrollable card-body h-100" >
                            <img src="${obj[i].image}" class="product-image" alt="" style="width: 280px; height: 280px;"> 
                            <p><strong><center>${obj[i].name}</center></strong></p>
                            <p><strong>Skin Type : </strong> ${obj[i].skintype}</p>
                            <p><strong>Directions : </strong> ${obj[i].directions}</p>
                            <p><strong>Benefits : </strong> ${obj[i].benefits}</p>
                            <p><strong>Ingredients : </strong> ${obj[i].ingredients}</p>
                            </div>
                        </div>
                        `)
                    } else {
                        $('#links').append(`
                        <div class="justify-content-center col-12 col-md-6 col-xl-4 my-4 mx-md-0">
                            <div class="card product-scrollable card-body h-100" >
                            <img src="${obj[i].image}" class="product-image" alt="" style="width: 280px; height: 280px;">
                            <p><strong><center>${obj[i].name}</center></strong></p>
                            <p><strong>Skin Type : </strong> ${obj[i].skintype}</p>
                            <p><strong>Directions : </strong> ${obj[i].directions}</p>
                            <p><strong>Benefits : </strong> ${obj[i].benefits}</p>
                            <p><strong>Ingredients : </strong> ${obj[i].ingredients}</p>
                            </div>
                        </div>
                        `)
                    }
                }
            }
        }
    }

    xh.onload = function () {
        if (this.status == 200) {
            var obj = JSON.parse(this.responseText)
            if (obj.length == 0) {
                $('#link').append(`
               <p>No Links Available. Please add a few links in users.json to get started.</p>
               `)
            } else {
                for (var i = 0; i < obj.length; i++) {
                    if (i === 0) {
                        $('#link').append(`
                        <div class="justify-content-center col-12 col-md-6 col-xl-4 my-4 mx-md-0">
                            <div class="card product-scrollable card-body h-100" >
                            <img src="${obj[i].image}" class="product-image" alt="" style="width: 280px; height: 280px;"> 
                            <p><strong><center>${obj[i].name}</center></strong></p>
                            <p><strong>Skin Type : </strong> ${obj[i].skintype}</p>
                            <p><strong>Ingredients : </strong> ${obj[i].ingredients}</p>
                            </div>
                        </div>
                        `)
                    } else {
                        $('#link').append(`
                        <div class="justify-content-center col-12 col-md-6 col-xl-4 my-4 mx-md-0">
                            <div class="card product-scrollable card-body h-100" >
                            <img src="${obj[i].image}" class="product-image" alt="" style="width: 280px; height: 280px;">
                            <p><strong><center>${obj[i].name}</center></strong></p>
                            <p><strong>Skin Type : </strong> ${obj[i].skintype}</p>
                            <p><strong>Ingredients : </strong> ${obj[i].ingredients}</p>
                            </div>
                        </div>
                        `)
                    }
                }
            }
        }
    }
}

