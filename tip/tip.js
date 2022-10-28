const tipForm = document.getElementById('tip-form');
const totalBill = document.getElementById('billTotal');
const tipInput = document.getElementById('tipInput');
const tipOutput = document.getElementById('tipOutput');
const tipAmount = document.getElementById('tipAmount');
const billWithTip = document.getElementById('totalBillWithTip');

function tipChange() {
  let tip = +tipInput.value;
  tipOutput.innerHTML = tip + '%';
  tipAmount.value = (+totalBill.value * (tip / 100)).toFixed(2);
  billWithTip.value = (+totalBill.value + +tipAmount.value).toFixed(2);
}

tipForm.addEventListener('change', tipChange);
