<input type="text" id="price1">
<input type="text" id="price2">
<input type="text" id="price3">
<input type="text" id="results">
<input type="button" value="Calculate" onclick="calculateResults()">

<script type="text/javascript">
function calculateResults() {
    var price1Box = document.getElementById('price1');
    var price2Box = document.getElementById('price2');
    var price3Box = document.getElementById('price3');
    var resultsBox = document.getElementById('results');
    resultsBox.value = getTotalPrice(price1Box.value, price2Box.value,price3Box.value);
}
</script>
