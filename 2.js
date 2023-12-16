$(document).ready(function () {
    var data = [
        { icon: '👤', name: 'John Doe', email: 'john@example.com', country: 'USA', age: 25 },
        { icon: '👩', name: 'Jane Smith', email: 'jane@example.com', country: 'Canada', age: 30 },
        { icon: '👨', name: 'Bob Johnson', email: 'bob@example.com', country: 'UK', age: 22 },
        { icon: '🧑', name: 'Alice Brown', email: 'alice@example.com', country: 'Australia', age: 28 },
        { icon: '👵', name: 'Elderly Person', email: 'elderly@example.com', country: 'Germany', age: 65 }
    ];

    var tableBody = $('#dataTable tbody');
    data.forEach(function (row, index) {
        var newRow = '<tr>';
        newRow += '<td class="icon-cell">' + row.icon + '</td>';
        newRow += '<td>' + row.name + '</td>';
        newRow += '<td>' + row.email + '</td>';
        newRow += '<td>' + row.country + '</td>';
        newRow += '<td>' + row.age + '</td>';
        newRow += '</tr>';
        tableBody.append(newRow);
    });

    $('#dataTable').on('click', '.icon-cell', function () {
        var iconText = $(this).text();
        alert('You clicked on icon: ' + iconText);
    });

    $('#dataTable tbody tr:odd').hover(
        function () {
            $(this).css('color', 'red');
        },
        function () {
            $(this).css('color', 'black');
        }
    );
});
