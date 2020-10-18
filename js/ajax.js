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
                        <div class="col-sm-4 py-2">
                <div class="card card-body h-100">
                ${obj[i].name}
                ${obj[i].directions}
                ${obj[i].benefits}
                </div>
            </div>
                        `)
                    } else {
                        $('#links').append(`
                        <div class="col-sm-4 py-2">
                        <div class="card card-body h-100">
                        ${obj[i].name}
                        ${obj[i].directions}
                        ${obj[i].benefits}
                        </div>
                    </div>
                        `)
                    }
                }
            }
        }
    }
}