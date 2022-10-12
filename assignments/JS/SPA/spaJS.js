/*=============customer---------------*/

var customer = [];
$("#cusBtnSave").click(function () {
    let customerID = $("#inputCusId").val();
    let customerName = $("#inputCusName").val();
    let customerAddress = $("#inputCusAddress").val();
    let customerContact = $("#inputCusContact").val();

    var customerObject = {
        id: customerID,
        name: customerName,
        address: customerAddress,
        contact: customerContact
    }
    customer.push(customerObject);
    console.log(customer);
    getAllCustomer();
});

function getAllCustomer() {
    $("#tblCustomer").empty();

    for (var customers of customer) {
        console.log(customers);

        var row = `<tr><td>${customers.id}</td><td>${customers.name}</td><td>${customers.address}</td><td>${customers.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}

$("#inputCusId,#inputCusName,#inputCusAddress,#inputCusContact,#inputCusId2,#inputCusName2,#inputCusAddress2,#inputCusContact2").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$("#inputCusId").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusName").focus();
    }
})

$("#inputCusName").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusAddress").focus();
    }
});


$("#inputCusAddress").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusContact").focus();
    }
});

$("#inputCusContact").on('keydown', function (event) {
    if (event.key=="Enter"){
        $("#cusBtnSave").focus();
    }
});

$("#inputCusId2").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusName2").focus();
    }
});

$("#inputCusName2").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusAddress2").focus();
    }
});

$("#inputCusAddress2").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#inputCusContact2").focus();
    }
});

