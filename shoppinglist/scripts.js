if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addItemButtons = document.getElementsByClassName("btn-dark")
    for (var i = 0; i < addItemButtons.length; i++) {
        var button = addItemButtons[i]
        button.addEventListener('click', addItem)
    }

    var deleteItemButtons = document.getElementsByClassName("btn-danger")
    for (var i = 0; i < deleteItemButtons.length; i++) {
        var button = deleteItemButtons[i]
        button.addEventListener('click', deleteItem)
    }
}

function addItem(event) {
    var buttonClicked = event.target
    var valueTags = buttonClicked.parentElement.parentElement.getElementsByTagName("input")

    if (isInput(valueTags)) {
        var forms = buttonClicked.parentElement.parentElement.getElementsByTagName("form")
        Array.from(forms).forEach((formElement) => {
            var formInput = formElement.getElementsByTagName("input")[0]
            var formInputValue = formInput.value
            if (formInputValue !== "") {
                formInput.disabled = true
            }
        })
    } else {
        alert('Fill in all fields')
    }
}

function isInput(valueTagCollection) {
    var Arr = []
    Array.from(valueTagCollection).forEach((valueElement) => {
        if (valueElement.value.length === 0) {
            Arr.push(false)
        }
        // initial code fails because "return false" exits callback function and returns control to isInput
        // if (valueElement.value.length === 0) {
        //     return false
        // }
    })
    if (Arr.length == 0) {
        return true
    } else {
        return false
    }
}

function deleteItem(event) {
    var buttonClicked = event.target
    var forms = buttonClicked.parentElement.parentElement.getElementsByTagName("form")
    Array.from(forms).forEach((formElement) => {
        var formInput = formElement.getElementsByTagName("input")[0]
        formInput.disabled = false
        formInput.value=""
    })
}
