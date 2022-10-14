/*=============customer---------------*/

var customer = [];
$("#btnSave").click(function () {


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
    loadAllCustomers();
    clearAllTexts();
});

/*    getPreviousCustomersFromTable();
    function getPreviousCustomersFromTable() {
        // tabel customer

        var customerObject2 = {

            id: $(this).children(":eq(0)").text(),
            name: $(this).children(":eq(1)").text(),
            address: $(this).children(":eq(2)").text(),
            contact: $(this).children(":eq(3)").text()
        }

        console.log(customerObject2)
        customer.push()
    }*/

/*------------gel All Customer--------------*/
loadAllCustomers();
function loadAllCustomers() {
    $("#tblAllCustomer2").empty();

    for (var customers of customer) {
        var row = `<tr><td>${customers.id}</td><td>${customers.name}</td><td>${customers.address}</td><td>${customers.contact}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblAllCustomer2").append(row);
    }
}

function getAllCustomer() {
    $("#tblCustomer").empty();

    for (var customers of customer) {
        console.log(customers);

        var row = `<tr><td>${customers.id}</td><td>${customers.name}</td><td>${customers.address}</td><td>${customers.contact}</td></tr>`;

        $("#tblCustomer").append(row);
    }
}
/*--------------------------*/


$("#inputCusId,#inputCusName,#inputCusAddress,#inputCusContact,#inputCusId2,#inputCusName2,#inputCusAddress2,#inputCusContact2").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#inputCusId").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#inputCusId"))) {
        $("#inputCusName").focus();
    } else {
        focusText($("#inputCusId"));
    }
});


$("#inputCusName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#inputCusName"))) {
        focusText($("#inputCusAddress"));
    }
});


$("#inputCusAddress").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $("#inputCusAddress"))) {
        focusText($("#inputCusContact"));
    }
});


$("#inputCusContact").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusSalaryRegEx, $("#inputCusContact"))) {
        $("#btnSave").focus();
        let res = confirm("Do you want to add this customer.?");
        if (res) {
            clearAllTexts();
        }
    }
});

/*--------------------*/

$("#inputCusId2").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#inputCusId2"))) {
        $("#inputCusName2").focus();
    } else {
        focusText($("#inputCusId2"));
    }
});


$("#inputCusName2").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#inputCusName2"))) {
        focusText($("#inputCusAddress2"));
    }
});


$("#inputCusAddress2").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusAddressRegEx, $("#inputCusAddress"))) {
        focusText($("#inputCusContact"));
    }
});


$("#inputCusContact2").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusSalaryRegEx, $("#inputCusContact2"))) {
        $("#btnSave2").focus();
        let res = confirm("Do you want to add this customer.?");
        if (res) {
            clearAllTexts();
        }
    }
});



/*----------search (eliye ekata)------------*/

$("#btnSearchCus").on("click",function () {
    SearchCusFunction();
});

$("#inputSerIdCus").on('keyup', function (event) {
    if (event.code == "Enter") {
        SearchCusFunction();
    }
});


function SearchCusFunction(){
    let typedId = $("#inputSerIdCus").val();
    let customer = searchCustomer(typedId);
    if (customer != null) {
        setTextfieldValues(customer.id, customer.name, customer.address, customer.contact);
    } else {
        alert("There is no cusotmer available for that " + typedId);
        setTextfieldValues("", "", "", "");
    }
}

function setTextfieldValues(id, name, address, contact) {
    $("#inputSerIdCus").val(id);
    $("#inputSerNameCus").val(name);
    $("#inputSerContactCus").val(contact);
}


/*----------search (in search ekata)------------*/
$("#btnSearch2").on("click",function () {
    SearchCusFunction2();
});



function SearchCusFunction2(){
    let typedId = $("#inputCusId2").val();
    let customer = searchCustomer(typedId);
    if (customer != null) {
        setTextfieldValues2(customer.id, customer.name, customer.address, customer.contact);
    } else {
        alert("There is no cusotmer available for that " + typedId);
        setTextfieldValues2("", "", "", "");
    }
}


function setTextfieldValues2(id, name, address, contact) {
    $("#inputCusId2").val(id);
    $("#inputCusName2").val(name);
    $("#inputCusAddress2").val(address);
    $("#inputCusContact2").val(contact);
}


function searchCustomer(cusID) {
    for (let customers of customer) {
        if (customers.id == cusID) {
            return customers;
        }
    }
    return null;
}


/*-----------Delete Customer----------------*/
$("#btnDelete2").on("click",function () {
    let deleteID = $("#inputCusId2").val();

    let option = confirm("Do you really want to delete customer id :" + deleteID);
    if (option){
        if (deleteCustomer(deleteID)) {
            alert("Customer Successfully Deleted..");
            setTextfieldValues2("", "", "", "");
        } else {
            alert("No such customer to delete. please check the id");
        }
    }
});

function deleteCustomer(customerID) {
    let customers = searchCustomer(customerID);
    if (customers != null) {
        let indexNumber = customer.indexOf(customers);
        customer.splice(indexNumber, 1);
        getAllCustomer();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

$("#btnModify2").on("click",function () {
    let customerID = $("#inputCusId2").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Updated Successfully");
        setTextfieldValues2("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#inputCusId2").val();
        customer.name = $("#inputCusName2").val();
        customer.address = $("#inputCusAddress2").val();
        customer.salary = $("#inputCusContact2").val();
        getAllCustomer();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }

}

// btnDelete2



/*=========validation part================*/

$("#inputCusId").focus();
$("#inputCusId2").focus();

// customer reguler expressions
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusContactRegEx = /^[0-9]{10}[.]?[0-9]{1,2}$/;

const cusIDRegEx2 = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx2 = /^[A-z ]{5,20}$/;
const cusAddressRegEx2 = /^[0-9/A-z. ,]{7,}$/;
const cusContactRegEx2 = /^[0-9]{10}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#inputCusId'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx, field: $('#inputCusName'),error:'Customer Name Pattern is Wrong : Ex : Nipuna'});
customerValidations.push({reg: cusAddressRegEx, field: $('#inputCusAddress'),error:'Customer Address Pattern is Wrong : Ex : Galle 01'});
customerValidations.push({reg: cusContactRegEx, field: $('#inputCusContact'),error:'Customer Contact Pattern is Wrong : 0782545156'});

customerValidations.push({reg: cusIDRegEx2, field: $('#inputCusId2'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx2, field: $('#inputCusName2'),error:'Customer Name Pattern is Wrong : Ex : Nipuna'});
customerValidations.push({reg: cusAddressRegEx2, field: $('#inputCusAddress2'),error:'Customer Address Pattern is Wrong : Ex : Galle 01'});
customerValidations.push({reg: cusContactRegEx2, field: $('#inputCusContact2'),error:'Customer Contact Pattern is Wrong : 0782545156'});


$("#inputCusId,#inputCusName,#inputCusAddress,#inputCusContact,#inputCusId2,#inputCusName2,#inputCusAddress2,#inputCusContact2").on('keyup', function (event) {
    checkValidity();
});

$("#inputCusId,#inputCusName,#inputCusAddress,#inputCusContact,#inputCusId2,#inputCusName2,#inputCusAddress2,#inputCusContact2").on('blur', function (event) {
    checkValidity();
});

function checkValidity() {
    let errorCount=0;
    for (let validation of customerValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);

}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
        txtField.parent().children('span').css('font-size','10px');
        txtField.parent().children('span').css('color','red');
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}


function clearAllTexts() {
    $("#inputCusId").focus();
    $("#inputCusId,#inputCusName,#inputCusAddress,#inputCusContact").val("");
    checkValidity();
}










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

$("#inputItemName2").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemQts2").focus();
    }
});

$("#inputItemQts2").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#inputItemPrice2").focus();
    }
});

$("#inputItemPrice2").on('keydown',function (event) {
    if (event.key=="Enter"){
        $("#btnSave2").focus();
    }
});