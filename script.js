function loadCSV() {
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            let table = document.getElementById('table');
            table.innerHTML = "";

            rows.forEach(row => {
                let cols = row.split(',');
                let tr = document.createElement('tr');

                cols.forEach(col => {
                    let td = document.createElement('td');
                    td.innerText = col;
                    tr.appendChild(td);
                });

                table.appendChild(tr);
            });
        });
}