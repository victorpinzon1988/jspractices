window.onload = function(){

    this.document.getElementById('blur-range').value = 0;
    this.document.getElementById('grayscale-range').value = 0;


    document.querySelector('.color-picker').addEventListener('click', function(){
        document.querySelector("input[type = 'color']").click();
    });

    document.querySelector("input[type = 'color']").addEventListener('change', function(){
        let color = document.querySelector("input[type = 'color']").value;
        document.querySelector('.color-picker').style.backgroundColor = color;
        document.querySelector('.border-container').style.backgroundColor = color;
    });

    document.getElementById('blur-range').addEventListener('change', function(){
        let contrastValue = document.getElementById('blur-range').value;
        document.querySelector('.image').style.filter = `blur(${contrastValue}px)`;
    });

    document.getElementById('grayscale-range').addEventListener('change', function(){
        let grayscale = document.getElementById('grayscale-range').value;
        document.querySelector('.image').style.filter = `grayscale(${grayscale}%)`;
        
    });
}