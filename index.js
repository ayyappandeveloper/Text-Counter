  var textarea = document.getElementById("textarea")
        var counter = document.getElementById("counter")
        var maxlength = 200
        textarea.addEventListener("keyup", () => {
            var count = maxlength - textarea.value.length
            console.log(count)
            counter.innerText = count + "/200"
            if (textarea.value.length > maxlength) {
                textarea.value = textarea.value.substring(0, maxlength);
                alert("Only 200 letters");
            }

        })