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
    // $("#tblCustomer").empty();

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

$("#inputCusContact2").on('keydown', function (event) {
    if (event.key == "Enter") {
        $("#cusBtnSave2").focus();
    }
});




/*=============Item---------------*/

var item = [];
$("#btnSave").click(function () {
    let itemCode = $("#inputItemCode").val();
    let itemName = $("#inputItemName").val();
    let itemQty = $("#inputItemQts").val();
    let itemPrice = $("#inputItemPrice").val();

    var itemObject = {
        code: itemCode,
        name: itemName,
        qty: itemQty,
        price: itemPrice
    }

    item.push(itemObject);
    loadTable();
});

function loadTable() {
    $("#tblItem").empty();

    for (var items of item) {
        var row = `<tr><td>${items.code}</td><td>${items.name}</td><td>${items.qty}</td><td>${items.price}</td></tr>`;
        $("#tblItem").append(row);
    }
}

$("#inputItemCode,#inputItemName,#inputItemQts,#inputItemPrice,#inputItemCode2,#inputItemName2,#inputItemQts2,#inputItemPrice2").on('keydown', function (event) {
    if (event.key == 'Tab') {
        event.preventDefault();
    }
});

$("#inputItemCode").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemName").focus();
    }
});

$("#inputItemName").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemQts").focus();
    }
});

$("#inputItemQts").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemPrice").focus();
    }
});

$("#inputItemPrice").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#btnSave").focus();
    }
});

/*----------------*/

$("#inputItemCode2").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemName2").focus();
    }
});


